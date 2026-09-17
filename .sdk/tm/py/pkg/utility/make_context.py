# HubspotAutomation SDK utility: make_context

from projectname_sdk.core.context import HubspotAutomationContext


def make_context_util(ctxmap, basectx):
    return HubspotAutomationContext(ctxmap, basectx)
