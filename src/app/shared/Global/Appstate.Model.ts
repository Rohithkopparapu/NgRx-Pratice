import { BlogModel, StudentsModel, issueModel } from "src/app/blogs/blog.model";
import { CounterModel } from "../counter.state";


export interface AppstateModel{
    counter:CounterModel,
    blog:BlogModel,
    students:StudentsModel,
    issuebooks:issueModel,
    delete:string,
    update:{id:string,students:StudentsModel}
}