import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.state";

const getCounterState=createFeatureSelector<CounterModel>('counter');
export const getcounter = createSelector(getCounterState,(state)=>{
    return state.counter;
})

export const getchannel = createSelector(getCounterState,(state)=>{
    return state.channelname;
})