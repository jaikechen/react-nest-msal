## Description
This web app allows users signin with their Azure Active Directory Identity 

- frontend: react, msal
- backend:nestjs,passport-azure-ad

## Azure Configuration
1. go to portal.azure.com
2. add a app registration, write down client id and tenant id, save the value to src/client/src/config.private.ts
```
export const msal_client_id=''
export const msal_tenant_id=''
```
3. Click the 'Authentication' link in the left, add the url(http://localhost:3000) to the redirect URIs

## Installation
### backend
```bash
$ npm install
```
### frontend, go to directory src/client
```bash
$ npm install
```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## frontend programming
1. authConnfiguration code is at  src/client/src/core/auth/authConfig.ts
2. useAuth check if azad account exists, if not redirect to the azure sign in page
3. any where need display account infomaiton, call
```
const account = useAuth()
```
4. in fetchMiddleware.ts, get the token and put to headers.
```
    const account =  msalApp.getAccount()
    if (account){
      const result =await msalApp.acquireTokenSilent(loginRequest)
      console.log(result.idToken.rawIdToken)
      headers['Authorization'] = `Bearer ${result.idToken.rawIdToken}`
    }else {
      throw error('user is not signin')
    }
```

## backend programming
1. make sure  all these are added to dependencies
```
    "@nestjs/jwt": "^7.0.0",
    "@nestjs/passport": "^7.0.0",
    "passport": "^0.4.1",
    "passport-azure-ad": "^4.2.1",
    "passport-jwt": "^4.0.0"
```
2. add getUserDecorator.ts
3. add myAuthGuard.ts, auto add it as provider to app.module.ts
4. any controller need authenication add @UserGuards, any method need the user information add @GetUser
```
@UseGuards(MyAuthGuard)
export class AppController {
  @Get()
  getHello(@GetUser() user:any) {
    console.log(user)
    return 'Hello ' + user.name
  }
}
```

