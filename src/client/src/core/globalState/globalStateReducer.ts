import { SetGlobalStateAction, GlobalStateActionTypes } from "./globalStateActions"
export interface globalState{
  key:string,
  val:any
}
export function getGlobalState(arr:globalState[], key:string) {
  return arr.find(x=>x.key === key)
}
function pushState(arr: globalState[], state: globalState) {
  return [...arr.filter(x => x.key !== state.key), state];
}
export const globalStateReducer = (states = [], action:SetGlobalStateAction) => {
  switch(action.type){
    case GlobalStateActionTypes.Set_State:{
      return pushState(states,{...action.payload})
    }
    default:
      return states
  }
}