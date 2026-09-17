package core

type HubspotAutomationError struct {
	IsHubspotAutomationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHubspotAutomationError(code string, msg string, ctx *Context) *HubspotAutomationError {
	return &HubspotAutomationError{
		IsHubspotAutomationError: true,
		Sdk:              "HubspotAutomation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HubspotAutomationError) Error() string {
	return e.Msg
}
