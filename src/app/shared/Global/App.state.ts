import { blogReducer, issueBook, studentReducer, updateStudents } from "src/app/blogs/blog.reducers";
import { counterReducer } from "../counter.reducer";
import { routerReducer } from "@ngrx/router-store";

export const Appstate={
 counter:counterReducer,
 blog:blogReducer,
 students:studentReducer,
 issuebooks:issueBook,
updatestudents:updateStudents,
router:routerReducer
}