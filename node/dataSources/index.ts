import { CallcenterOperatorDataSource } from './callcenterOperator'
import { CatalogDataSource } from './catalog'
import { CheckoutDataSource } from './checkout'
import { DocumentDataSource } from './document'
import { IdentityDataSource } from './identity'
import { LicenseManagerDataSource } from './licenseManager'
import { LogisticsDataSource } from './logistics'
import { Messages } from './messages'
import { OMSDataSource } from './oms'
import { PortalDataSource } from './portal'
import { ProfileDataSource } from './profile'
import { SessionDataSource } from './session'
import { SubscriptionsDataSource } from './subscriptions'
import { SubscriptionsGroupDataSource } from './subscriptionsGroup'
import { FixedPriceDataSource } from './fixedPrice'
import { RatesAndBenefitsDataSource } from './ratesAndBenefits'

export const dataSources = () => ({
  callcenterOperator: new CallcenterOperatorDataSource(),
  catalog: new CatalogDataSource(),
  checkout: new CheckoutDataSource(),
  document: new DocumentDataSource(),
  identity: new IdentityDataSource(),
  licenseManager: new LicenseManagerDataSource(),
  logistics: new LogisticsDataSource(),
  messages: new Messages(undefined, {metrics}),
  oms: new OMSDataSource(),
  portal: new PortalDataSource(),
  profile: new ProfileDataSource(undefined, {metrics}),
  session: new SessionDataSource(),
  subscriptions: new SubscriptionsDataSource(),
  subscriptionsGroup: new SubscriptionsGroupDataSource(),
  fixedPrice: new FixedPriceDataSource(),
  ratesAndBenefits: new RatesAndBenefitsDataSource(),
})
