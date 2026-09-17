# HubspotAutomation SDK feature factory

from hubspotautomation_sdk.feature.base_feature import HubspotAutomationBaseFeature
from hubspotautomation_sdk.feature.debug_feature import HubspotAutomationDebugFeature
from hubspotautomation_sdk.feature.idempotency_feature import HubspotAutomationIdempotencyFeature
from hubspotautomation_sdk.feature.metrics_feature import HubspotAutomationMetricsFeature
from hubspotautomation_sdk.feature.paging_feature import HubspotAutomationPagingFeature
from hubspotautomation_sdk.feature.ratelimit_feature import HubspotAutomationRatelimitFeature
from hubspotautomation_sdk.feature.retry_feature import HubspotAutomationRetryFeature
from hubspotautomation_sdk.feature.test_feature import HubspotAutomationTestFeature
from hubspotautomation_sdk.feature.timeout_feature import HubspotAutomationTimeoutFeature


_FEATURES = {
    "base": lambda: HubspotAutomationBaseFeature(),
    "debug": lambda: HubspotAutomationDebugFeature(),
    "idempotency": lambda: HubspotAutomationIdempotencyFeature(),
    "metrics": lambda: HubspotAutomationMetricsFeature(),
    "paging": lambda: HubspotAutomationPagingFeature(),
    "ratelimit": lambda: HubspotAutomationRatelimitFeature(),
    "retry": lambda: HubspotAutomationRetryFeature(),
    "test": lambda: HubspotAutomationTestFeature(),
    "timeout": lambda: HubspotAutomationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
