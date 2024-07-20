const kebabCase = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensures that the keys in the i18n json files are camel-cased'
    },
    messages: {
      incorrectCasing: 'JSON key {{ key }} is not in kebab-case'
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

          for (const [key] of Object.entries(jsonObject)) {
            if (!kebabCase.test(key)) {
              context.report({
                node,
                messageId: 'incorrectCasing',
                data: { key },
              });
            }
          }
        }
      },
    };
  },
};
