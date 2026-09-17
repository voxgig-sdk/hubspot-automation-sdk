# HubspotAutomation SDK exists test

import pytest
from hubspotautomation_sdk import HubspotAutomationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HubspotAutomationSDK.test(None, None)
        assert testsdk is not None
