import {ApiHeader, HeaderBuilderImpl, RequestHeaders} from '../../../src/internal/network';
import {EnvironmentProvider, PrimaryConfigProvider} from '../../../src/internal';
import {Environment} from '../../../src';
import {PrimaryConfig} from '../../../src/types';
import {UserDataProvider} from '../../../src/internal/user';

const testProjectKey = 'test project key';
const testSdkVersion = '500.1.1';
const testUserId = 'test uid';

let currentPrimaryConfig: PrimaryConfig = {
  environment: undefined,
  launchMode: undefined,
  projectKey: testProjectKey,
  sdkVersion: testSdkVersion,
};
const primaryConfigProvider: PrimaryConfigProvider = {
  getPrimaryConfig(): PrimaryConfig {
    return currentPrimaryConfig;
  }
};

let currentEnvironment = Environment.Production;
const environmentProvider: EnvironmentProvider = {
  getEnvironment(): Environment {
    return currentEnvironment;
  },

  isSandbox(): boolean {
    return currentEnvironment == Environment.Sandbox;
  }
};

// @ts-ignore
const userDataProvider: UserDataProvider = {
  getOriginalUserId: () => testUserId,
};

const headerBuilder = new HeaderBuilderImpl(primaryConfigProvider, environmentProvider, userDataProvider);

describe('buildCommonHeaders tests', () => {
  const commonExpectedHeaders: RequestHeaders = {
    [ApiHeader.Authorization]: 'Bearer ' + testProjectKey,
    [ApiHeader.Platform]: 'web',
    [ApiHeader.PlatformVersion]: testSdkVersion,
    [ApiHeader.UserID]: testUserId,
  };

  test('common headers test', () => {
    // given

    // when
    const res = headerBuilder.buildCommonHeaders();

    // then
    expect(res).toStrictEqual(commonExpectedHeaders);
  });

  test('debug mode', () => {
    // given
    currentEnvironment = Environment.Sandbox;
    const expectedHeaders: RequestHeaders = {
      ...commonExpectedHeaders,
      [ApiHeader.Authorization]: 'Bearer test_' + testProjectKey,
    };

    // when
    const res = headerBuilder.buildCommonHeaders();

    // then
    expect(res).toStrictEqual(expectedHeaders);
  });
});
