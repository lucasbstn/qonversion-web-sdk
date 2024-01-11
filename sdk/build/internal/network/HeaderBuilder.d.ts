import { HeaderBuilder, RequestHeaders } from './types';
import { EnvironmentProvider, PrimaryConfigProvider } from '../types';
import { UserDataProvider } from '../user';
export declare class HeaderBuilderImpl implements HeaderBuilder {
    private readonly primaryConfigProvider;
    private readonly environmentProvider;
    private readonly userDataProvider;
    constructor(primaryConfigProvider: PrimaryConfigProvider, environmentProvider: EnvironmentProvider, userDataProvider: UserDataProvider);
    buildCommonHeaders(): RequestHeaders;
}
