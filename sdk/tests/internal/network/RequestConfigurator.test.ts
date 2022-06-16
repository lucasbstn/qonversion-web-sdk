import {
  ApiEndpoint,
  IHeaderBuilder,
  NetworkRequest,
  RequestConfigurator,
  RequestHeaders,
  RequestType
} from '../../../src/internal/network';
import {PrimaryConfig} from '../../../src/types';
import {PrimaryConfigProvider} from '../../../src/internal/types';
import {IUserDataProvider} from '../../../src/internal/user';
import {PurchaseCoreData, StripeStoreData} from '../../../src';

const testHeaders: RequestHeaders = {a: 'a'};
const headerBuilder: IHeaderBuilder = {
  buildCommonHeaders(): RequestHeaders {
    return testHeaders;
  }
};
const testBaseUrl = 'test base url';
const testUserId = 'test user id'
const testProjectKey = 'test project key';

let primaryConfig: PrimaryConfig = {
  environment: undefined,
  launchMode: undefined,
  projectKey: testProjectKey,
  sdkVersion: ''
};
let requestConfigurator: RequestConfigurator;

describe('RequestConfigurator tests', () => {
  beforeEach(() => {
    const primaryConfigProvider: PrimaryConfigProvider = {
      getPrimaryConfig(): PrimaryConfig {
        return primaryConfig;
      }
    };
    // @ts-ignore
    const userDataProvider: IUserDataProvider = {
      getUserId(): string | undefined {
        return testUserId;
      }
    };

    requestConfigurator = new RequestConfigurator(headerBuilder, testBaseUrl, primaryConfigProvider, userDataProvider);
  });

  test('user request', () => {
    // given
    const expResult: NetworkRequest = {
      headers: testHeaders,
      type: RequestType.GET,
      url: testBaseUrl + '/' + ApiEndpoint.Users + '/' + testUserId,
    };

    // when
    const request = requestConfigurator.configureUserRequest(testUserId);

    // then
    expect(request).toStrictEqual(expResult);
  });

  test('create user request', () => {
    // given
    const expResult: NetworkRequest = {
      headers: testHeaders,
      type: RequestType.POST,
      url: testBaseUrl + '/' + ApiEndpoint.Users,
      body: {id: testUserId},
    };

    // when
    const request = requestConfigurator.configureCreateUserRequest(testUserId);

    // then
    expect(request).toStrictEqual(expResult);
  });

  test('user properties request', () => {
    // given
    const properties = {a: 'a', b: 'b'};
    const expResult: NetworkRequest = {
      headers: testHeaders,
      type: RequestType.POST,
      url: testBaseUrl + '/' + ApiEndpoint.Properties,
      body: {
        access_token: testProjectKey,
        q_uid: testUserId,
        properties,
      }
    };

    // when
    const request = requestConfigurator.configureUserPropertiesRequest(properties);

    // then
    expect(request).toStrictEqual(expResult);
  });

  test('identity request', () => {
    // given
    const testIdentityId = 'test identity id';
    const expResult: NetworkRequest = {
      headers: testHeaders,
      type: RequestType.GET,
      url: `${testBaseUrl}/${ApiEndpoint.Identity}/${testIdentityId}`,
    };

    // when
    const request = requestConfigurator.configureIdentityRequest(testIdentityId);

    // then
    expect(request).toStrictEqual(expResult);
  });

  test('create identity request', () => {
    // given
    const testIdentityId = 'test identity id';
    const expResult: NetworkRequest = {
      headers: testHeaders,
      type: RequestType.POST,
      url: `${testBaseUrl}/${ApiEndpoint.Identity}/${testIdentityId}`,
      body: {
        user_id: testUserId,
      }
    };

    // when
    const request = requestConfigurator.configureCreateIdentityRequest(testUserId, testIdentityId);

    // then
    expect(request).toStrictEqual(expResult);
  });

  test('entitlements request', () => {
    // given
    const expResult: NetworkRequest = {
      headers: testHeaders,
      type: RequestType.GET,
      url: `${testBaseUrl}/${ApiEndpoint.Users}/${testUserId}/entitlements`,
    };

    // when
    const request = requestConfigurator.configureEntitlementsRequest(testUserId);

    // then
    expect(request).toStrictEqual(expResult);
  });

  test('stripe purchase request', () => {
    // given
    const data: PurchaseCoreData & StripeStoreData = {
      currency: 'USD',
      price: 14.99,
      purchasedAt: 124330432,
      productId: 'test product',
      subscriptionId: 'test subscription',
    };
    const expResult: NetworkRequest = {
      headers: testHeaders,
      type: RequestType.POST,
      url: `${testBaseUrl}/${ApiEndpoint.Users}/${testUserId}/purchases`,
      body: {
        price: data.price,
        currency: data.currency,
        stripe_store_data: {
          subscription_id: data.subscriptionId,
          product_id: data.productId,
        },
        purchased: data.purchasedAt,
      },
    };

    // when
    const request = requestConfigurator.configureStripePurchaseRequest(testUserId, data);

    // then
    expect(request).toStrictEqual(expResult);
  });
});
