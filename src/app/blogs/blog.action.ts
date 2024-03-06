import { createAction, props } from "@ngrx/store";
import { BlogModel, StudentsModel, issueModel } from "./blog.model";

export const LOAD_BLOG='loadblod'
export const UPDATE_LOAD_BLOG = '[Blog] update Blog';
export const UPDATE_LOAD_BLOG_SUCESS = '[blog pgae] update blog scuess';

export const blogaction=createAction(LOAD_BLOG);
export const addBlogAction=createAction( '[Blog] Add Blog',props<{title:string,description:string}>());
export const updateBlog = createAction('[Blog] update Blog',props<BlogModel>());
export const deleteBlog = createAction('[Blog] delete Blog',props<{id:number}>());
export const LOAD_BLOG_SUCESS = '[blog pgae] load blog scuess';

//creating action for services here we get resoonse form props
export const loadblogscuess = createAction(LOAD_BLOG_SUCESS,props<{bloglist:BlogModel[]}>())


export const getstudents = createAction('get-students');

export const setStudents = createAction('set-students',props<{students:StudentsModel[]}>());

export const booksforissue= createAction('issuebook-students',props<{ id: string; books: { categoryname: string; bookname: string; }[] }>());
export const payloadForIssuebooks = createAction('set-payload',props<{payload:issueModel[]}>());


export const studentslist = createAction('deletestudents',props<{id:string}>());
export const deleteStudents = createAction('delete',props<{id:string}>());

export const update_blog = createAction(UPDATE_LOAD_BLOG,props<{id:string,students:StudentsModel[]}>());
export const update_blog_scuess = createAction(UPDATE_LOAD_BLOG_SUCESS,props<{id:string,students:StudentsModel[]}>());
