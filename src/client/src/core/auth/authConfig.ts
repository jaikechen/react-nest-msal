import { UserAgentApplication,Account} from "msal";
import { msal_client_id, msal_tenant_id } from "share/config.private";
const url = `${window.location.protocol}//${window.location.hostname}` + (window.location.port ? `:${window.location.port}` : "") 
export const msalApp = new UserAgentApplication({
    auth: {
        clientId: msal_client_id,
        authority: `https://login.microsoftonline.com/${msal_tenant_id}`,
        validateAuthority: false,
        redirectUri: url,
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "localStorage", 
        storeAuthStateInCookie: false 
    },
});

export const loginRequest = {
	response_type: "id_token token",
    scopes: ["openid", "profile","offline_access"]
}


