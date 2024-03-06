import { createReducer, on } from "@ngrx/store";
import { intialState } from "./counter.state";
import { customDecrement, customIncrement, customSelection, customchannelName, decrement, increment, reset } from "./counter.actions";


const _counterReducer=createReducer(intialState,on(increment,(state)=>{
    return{
        ...state,
        counter:state.counter + 1
    }

}),(on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter - 1
    }
})),(on(reset,(state)=>{
    return{
        ...state,
        counter:0
    }
})),on(customIncrement,(state,action:any)=>{
    return{
        ...state,
        counter:state.counter+parseInt(action.value)
    }
}),on(customDecrement,(state,action)=>{
    return{
        ...state,
        counter:state.counter-action.value
    }
}),
on(customSelection,(state,action)=>{
    if(action.action === 'Add'){
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
    else{
        return{
            ...state,
            counter:state.counter-action.value
        } 
    }
}),
on(customchannelName,(state,action)=>{
    return{
        ...state,
        channelname:action.action
    }
}),

)

export function counterReducer(action:any,state:any){
  return _counterReducer(action,state);
}