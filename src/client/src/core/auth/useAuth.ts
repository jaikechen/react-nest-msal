import { msalApp, loginRequest } from "./authConfig"

export function useAuth(){
  const account =  msalApp.getAccount()
  if(account === null){
    msalApp.loginRedirect(loginRequest)
  }  
  return account
}