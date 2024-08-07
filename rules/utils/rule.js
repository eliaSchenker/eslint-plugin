import fs from 'node:fs';
import { join, basename } from 'node:path';

async function loadRule(ruleId) {
  const rule = (await import(`../${ruleId}.js`)).default;

  return {
    name: ruleId,
    rule,
  };
}

async function loadRuleTest(ruleId) {
  return (await import(`../${ruleId}.test.js`)).default;
}

export async function loadRules() {
  const files = fs.readdirSync(join(import.meta.url, '..'), { withFileTypes: true }).
    filter(file => file.isFile()).
    filter(file => !file.name.endsWith('.test.js'));
  const rules = await Promise.all(files.map(async file => {
    const ruleId = basename(file.name, '.js');
    return [ruleId, await loadRule(ruleId)];
  }));

  return Object.fromEntries(rules);
}

export async function loadRuleTests() {
  const files = fs.readdirSync(join(import.meta.url.replace('file://', ''), '../..'), { withFileTypes: true }).
    filter(file => file.isFile()).
    filter(file => file.name.endsWith('.test.js'));
  return await Promise.all(files.map(async file => {
    const ruleId = basename(file.name, '.test.js');
    return {
      rule: await loadRule(ruleId),
      test: await loadRuleTest(ruleId),
    };
  }));
}
