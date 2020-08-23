import { useDispatch, useSelector } from "react-redux"
import { SetGlobalStateAction } from "./globalStateActions"
import { useEffect } from 'react';
import { rootStoreType } from "core/store/store";

const mydispath = (dispatch: any, key: string, val: any) => {
  const request = new SetGlobalStateAction({ key, val })
  dispatch(Object.assign({}, request))
}

export function useGlobalState<T>(key: string, initValue: any = undefined) {
  const dispatch = useDispatch()
  const selector =  useSelector((state:rootStoreType) => (state.globalStateReducer).find(x => x.key === key)?.val)
  useEffect(() => {
    if (initValue !== undefined && selector === undefined) {
      mydispath(dispatch, key, initValue)
    }
  }, [key,initValue])

  return [
    selector,
    (val) => mydispath(dispatch, key, val)
  ] as [T, (val: T) => {}]
}