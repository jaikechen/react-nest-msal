import React from 'react'
import { useFetchRequest } from 'core/fetch/useFetchRequest'
export function Hello () {
    const [state] = useFetchRequest<string>(true,'GET','hello')
    return state === undefined || state.status ==='Loading' ? <div>Loading</div>
        : state.status === 'Fail' ? <div>{state.error}</div>
        : <div> msg from svr:{state.result}</div>
}