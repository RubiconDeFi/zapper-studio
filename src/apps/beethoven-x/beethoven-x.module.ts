import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';
import { BalancerV2AppModule } from '~apps/balancer-v2';

import { BeethovenXAppDefinition, BEETHOVEN_X_DEFINITION } from './beethoven-x.definition';
import { BeethovenXContractFactory } from './contracts';
import { FantomBeethovenXBalanceFetcher } from './fantom/beethoven-x.balance-fetcher';
import { FantomBeethovenXFBeetsTokenFetcher } from './fantom/beethoven-x.f-beets.token-fetcher';
import { FantomBeethovenXFarmContractPositionFetcher } from './fantom/beethoven-x.farm.contract-position-fetcher';
import { FantomBeethovenXPoolTokenFetcher } from './fantom/beethoven-x.pool.token-fetcher';
import { BeethovenXTheGraphPoolTokenDataStrategy } from './helpers/beethoven-x.the-graph.pool-token-address-strategy';
import { OptimismBeethovenXBalanceFetcher } from './optimism/beethoven-x.balance-fetcher';
import { OptimismBeethovenXFarmContractPositionFetcher } from './optimism/beethoven-x.farm.contract-position-fetcher';
import { OptimismBeethovenXPoolTokenFetcher } from './optimism/beethoven-x.pool.token-fetcher';

@Register.AppModule({
  appId: BEETHOVEN_X_DEFINITION.id,
  imports: [BalancerV2AppModule],
  providers: [
    BeethovenXAppDefinition,
    BeethovenXContractFactory,
    // Fantom
    FantomBeethovenXFarmContractPositionFetcher,
    FantomBeethovenXPoolTokenFetcher,
    FantomBeethovenXFBeetsTokenFetcher,
    FantomBeethovenXBalanceFetcher,
    // Optimism
    OptimismBeethovenXFarmContractPositionFetcher,
    OptimismBeethovenXPoolTokenFetcher,
    OptimismBeethovenXBalanceFetcher,
    // Helpers
    BeethovenXTheGraphPoolTokenDataStrategy,
  ],
})
export class BeethovenXAppModule extends AbstractApp() {}
