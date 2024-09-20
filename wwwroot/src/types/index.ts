export interface IPolicies {
  testsuites: ITestSuite[];
  rules: IPolicy[];
}

export interface IPolicy {
  title: string;
  description: string;
  category: string;
  severity: string;
  ruleNumber: string;
  remediation: string;
  ruleName: string;
  path: string;
  skipReason: string;
  pattern: string;
  packageName: string;
}

export interface ITestCase {
  name: string;
  time: number;
}

export interface ITestSuite {
  name: string;
  tests: number;
  failures: number;
  skipped: number;
  time: number;
  testcases: ITestCase[];
}

export interface IPolicyData {
  title: string;
  description: string;
  category: string;
  severity: string;
  ruleNumber: string;
  remediation: string;
  ruleName: string;
  path: string;
  skipReason: string;
  pattern: string;
  packageName: string;
  testSuite: {
    failures: number;
    name: string;
    skipped: number;
    tests: number;
    time: number;
    testcases: ITestCase[];
  };
}

export interface IPolicyResults {
  total: number;
  passed: number;
  failures: number;
  skipped: number;
}

export interface IPoliciesState {
  data: IPolicyData[];
  results: IPolicyResults;
}
