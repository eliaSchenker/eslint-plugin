import { RuleTester } from 'eslint';
import { loadRuleTests } from './rules/utils/rule.js';

// Technically this would work (only for javascript/typescript files), but we currently don't have
// any custom javascript rules

const ruleTester =  new RuleTester();

const tests = await loadRuleTests();

tests.forEach((test) => {
  ruleTester.run(test.rule.name, test.rule.rule, test.test);
});
