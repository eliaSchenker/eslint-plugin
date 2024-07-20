const htmlTagPattern = /<\/?[a-z][\s\S]*>/i;

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensures that the values in the i18n json files do not contain html code.'
    },
    messages: {
      noHtml: 'HTML found in translation for JSON key {{ key }}'
    },
    schema: [],
  },
  create(context) {
    return {
      Program(node) {
        if (context.getFilename().startsWith('lang/') && context.getFilename().endsWith('.json')) {
          const sourceCode = context.getSourceCode();
          const jsonText = sourceCode.getText(node);
          let jsonObject;

          try {
            jsonObject = JSON.parse(jsonText);
          } catch {
            return;
          }

          for (const [key, value] of Object.entries(jsonObject)) {
            if (typeof value === 'string' && htmlTagPattern.test(value)) {
              context.report({
                node,
                messageId: 'noHtml',
                data: { key },
              });
            }
          }
        }
      },
    };
  },
};
