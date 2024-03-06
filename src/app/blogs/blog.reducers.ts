import { createReducer, on } from "@ngrx/store";
import { BlogState, issueBooks, students } from "./blog.state";
import { addBlogAction, blogaction, booksforissue, deleteBlog, deleteStudents, getstudents, loadblogscuess, payloadForIssuebooks, setStudents, updateBlog, update_blog_scuess } from "./blog.action";


const _blogrecuer=createReducer(BlogState,on(blogaction,(state)=>{
    return{
        ...state
    }
}),
on(loadblogscuess, (state,action) => {
    
    return {...state, bloglist:[...action.bloglist]}; 
  })
, on(addBlogAction, (state, { title, description }) => {
    const id = state.length + 1; 
    const newBlog = { id, title, description };
    return [...state, newBlog]; 
  }),
  on(updateBlog, (state, action) => {
    const updatedBlog = action; 
    
    const index = state.findIndex(blog => blog.id === updatedBlog.id);
    
    if (index === -1) {
        return state;
    } else {

//         slice() is used to create new arrays for the elements before and after the updated blog.
// The spread operator ... is used to merge these arrays together with the updated blog object in between, creating a new array without mutating the original state.
// This approach maintains immutability and ensures Redux works correctly with the updated state.
        return [
            ...state.slice(0, index),
            updatedBlog, 
            ...state.slice(index + 1)
        ];
    }
}),on(deleteBlog, (state, action) => {
   
    const updateblog:any = state.filter(blog => blog.id !== action.id);
   
    return [...updateblog];
})

)

const _studentReducer=createReducer(students,on(setStudents, (state, action ) => {
       
    return {...state, students:[...action.students]};
    })
    
)

const _issuebookReducer=createReducer(issueBooks,on(booksforissue, (state, action ) => {
    return [...state,action];
    }),on(deleteStudents,(state,action) => {
  return [...state]
    })
    
)

const _updateStudentsList = createReducer(students,on(update_blog_scuess,(state,action)=>{
    return {...state, students:action.students};
}))

export function blogReducer(action:any,state:any){
  return _blogrecuer(action,state);
}


export function studentReducer(action:any,state:any){
    return _studentReducer(action,state);
  }

  export function issueBook(action:any,state:any){
    return _issuebookReducer(action,state);
  }

  export function updateStudents(action:any,state:any){
    return _updateStudentsList(action,state);
  }