import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../api.service";
import { LOAD_BLOG, blogaction, getstudents, booksforissue, loadblogscuess, payloadForIssuebooks, setStudents, deleteStudents, studentslist, update_blog, update_blog_scuess } from "./blog.action";
import { EMPTY, catchError, exhaustMap, map, mergeMap } from "rxjs";
import { StudentsModel, issueModel, responseModel } from "./blog.model";
import { issueBooks } from "./blog.state";

@Injectable()
export class BlogEffects{

    constructor(private actions$:Actions,private serice:ApiService){}

    _blog = createEffect(() => {
        return this.actions$.pipe(
            ofType(blogaction),//here one action for listening the action
            exhaustMap((action) => {
                return this.serice.getAllBlogs().pipe(map((data) => {
                    return loadblogscuess({ bloglist: data });//here one action for dispatch
                }),
                    catchError(() => EMPTY)
                );
            })
        );
    })

    _students = createEffect( () => {
      return this.actions$.pipe(
            ofType(getstudents),
            exhaustMap((action) => {
                return this.serice.getStudentsList().pipe(map((data:StudentsModel[])=>{
                    return setStudents({students:data});
                }),
                
                catchError(() => EMPTY)
                )
            })
        )
    })

    _issuebooks = createEffect( () => {
        return this.actions$.pipe(
            ofType(booksforissue),
            exhaustMap((action:any) => {
               return this.serice.issuebooks(action.id,action.books).pipe(map((data:issueModel[])=>{
                return payloadForIssuebooks({payload:data})
               }),
                
               catchError(() => EMPTY))
            })
        )
    })
    _delete = createEffect( () => {
        return this.actions$.pipe(
            ofType(deleteStudents),
            exhaustMap((action:any) => {
               return this.serice.deleteStudentList(action.id).pipe(map((data)=>{
                return studentslist({id:action.id})
               }),
                
               catchError(() => EMPTY))
            })
        )
    })

    _updateStudents = createEffect( () => {
        return this.actions$.pipe(
            ofType(update_blog),
            exhaustMap((action:any) => {
               return this.serice.updateStudents(action.id,action.students).pipe(map((data)=>{
                return update_blog_scuess({id:action.id,students:action.students})
               }),
                
               catchError(() => EMPTY))
            })
        )
    })
}