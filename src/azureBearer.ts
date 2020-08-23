import { msal_client_id, msal_tenant_id } from "client/src/share/config.private";

export const BearerStrategy = require('passport-azure-ad').BearerStrategy;
const config = {
    identityMetadata: `https://login.microsoftonline.com/${msal_tenant_id}/v2.0/.well-known/openid-configuration`,
    clientID: msal_client_id,
    validateIssuer: false,
    loggingLevel: 'debug',
    passReqToCallback: false,

};
console.log(config)

export const bearerStrategy = new BearerStrategy(config, (token, done) => {
        done(null, {}, token);
    }
);