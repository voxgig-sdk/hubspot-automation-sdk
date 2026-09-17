-- HubspotAutomation SDK error

local HubspotAutomationError = {}
HubspotAutomationError.__index = HubspotAutomationError


function HubspotAutomationError.new(code, msg, ctx)
  local self = setmetatable({}, HubspotAutomationError)
  self.is_sdk_error = true
  self.sdk = "HubspotAutomation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HubspotAutomationError:error()
  return self.msg
end


function HubspotAutomationError:__tostring()
  return self.msg
end


return HubspotAutomationError
