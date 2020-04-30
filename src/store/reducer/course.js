import * as TYPES from '../action-types'

let INIT_STATE={

}

export default function course(state={INIT_STATE},action) {
    state=JSON.parse(JSON.stringify(state))
    if(action.type){

    }
    return state
}