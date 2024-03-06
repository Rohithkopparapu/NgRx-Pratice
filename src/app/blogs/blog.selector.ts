import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, StudentsModel } from "./blog.model";


const getBlogstate=createFeatureSelector<BlogModel>('blog');
const getStudentsList=createFeatureSelector<StudentsModel>('students');

export const getBlog = createSelector(getBlogstate,(state)=>{
    return state.title;
})

export const getchannel = createSelector(getBlogstate,(state)=>{
    return state.description;
})

export const getAllBlog = createSelector(getBlogstate,(state)=>{
    return state;
})

export const getBlogById=(blogid:number) => createSelector(getBlogstate,(state:any)=>{
     return state.find((blog:any) => blog.id === blogid);
})


export const getStudents = createSelector(getStudentsList,(state)=>{
    return state;
})

