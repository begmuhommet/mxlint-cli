import { IPolicies, IPoliciesState } from '@/types';

const parsePolicies = (policies: IPolicies): IPoliciesState => {
  const policiesResult = {
    data: [],
    results: { passed: 0, failures: 0, skipped: 0, total: 0 },
  };

  try {
    policies?.rules?.forEach((policy) => {
      const testSuite = policies.testsuites.find(({ name }) => name === policy.path);
      if (!testSuite) return;
      policiesResult.results.total += testSuite?.tests;
      policiesResult.results.failures += testSuite?.failures;
      policiesResult.results.skipped += testSuite?.skipped;
      policiesResult.results.passed += testSuite?.tests - (testSuite?.failures + testSuite?.skipped);

      policiesResult.data.push({ ...policy, testSuite });
    });
  } catch (error: unknown) {
    console.log('error -> ', error);
    return policiesResult;
  }

  return policiesResult;
};

const getPolicies = async () => {
  const response = await fetch('../api.json');
  const data = await response.json();
  console.log(data);

  return parsePolicies(data);
};

export default getPolicies;
