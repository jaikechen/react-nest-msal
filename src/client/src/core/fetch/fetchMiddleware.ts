import { FetchActionTypes, FetchRequest } from "./fetchActions"
import { msalApp, loginRequest } from "core/auth/authConfig"
const baseUrl = '/api/'
const buildOption = async (action: FetchRequest) => {
  const { method, requireToken } = action
  const headers: any = { 'Content-Type': 'application/json' }
  const option: any = {}
  option['headers'] = headers
  option['method'] = method
  if (method !== 'GET') {
    option['body'] = JSON.stringify(action.postData)
  }
  if (requireToken) {
    try {
      const result = await msalApp.acquireTokenSilent(loginRequest)
      console.log(result.idToken.rawIdToken)
      headers['Authorization'] = `Bearer ${result.idToken.rawIdToken}`
    } catch{
      throw Error('User is not sign in')
    }
  }
  return option
}

function getResult(text: string) {
  let result: any
  try {
    result = JSON.parse(text)
  } catch{
    result = text
  }
  return result
}

function getError(text: string) {
  let error = text
  try {
    let json = JSON.parse(text)
    console.log(json)
    error = json.message ?? json.error ?? text
  } catch{
  }
  return error
}

export const fetchMiddleware = ({ dispatch }: any) => (next: any) => async (action: FetchRequest) => {
  switch (action.type) {
    case FetchActionTypes.FetchRequest: {
      const { url, onSuccess, onError, onLoading } = action
      const fullUrl = baseUrl + url
      let error: any
      let result: any
      try {
        if (onLoading) {
          dispatch({
            type: onLoading,
            payload: { ...action.payload, url }
          })
        }
        const option = await buildOption(action)
        const response = await fetch(fullUrl, option)
        const text = await response.text()
        if (response.ok) {
          result = getResult(text)
        }
        else {
          error = getError(text)
        }
      } catch (err) {
        error = err
      }

      dispatch({
        type: result ? onSuccess : onError,
        payload: {
          ...action.payload,
          error, result, url
        }
      })
    }
  }
  return next(action)
}