import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { LOAD_BLOG, blogaction, booksforissue, deleteBlog, deleteStudents, getstudents, payloadForIssuebooks, setStudents, update_blog } from 'src/app/blogs/blog.action';
import { BlogModel, StudentsModel, issueModel } from 'src/app/blogs/blog.model';
import { getAllBlog, getStudents } from 'src/app/blogs/blog.selector';
import { PopupComponent } from 'src/app/popup/popup.component';
import { AppstateModel } from 'src/app/shared/Global/Appstate.Model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  
})
export class BlogComponent implements OnInit {
  constructor(private store:Store<AppstateModel>,private dialog:MatDialog,private router:Router){}
  blogList:any[]=[];
  id!:string;
  studentsList:StudentsModel[]=[];
  updatedList:StudentsModel[]=[];
  ngOnInit(): void {
    this.store.dispatch(blogaction())
    this.store.select(getAllBlog).subscribe((data:any)=>{
      this.blogList=data.bloglist;
    })

    this.store.dispatch(getstudents());
    this.store.select('students').subscribe((data:any)=>{
      this.studentsList=data.students;
      console.log(data);
      
    })


    

    // this.store.dispatch(booksforissue({ id: '65d313189eabecb193817b38', books: [{ categoryname: 'IPS', bookname: 'Maths' }, { categoryname: 'IPS', bookname: 'Genral Knowledge' }, { categoryname: 'IPS', bookname: 'Hindi' }] }));
    // this.store.select('issuebooks').subscribe((data)=>{
    //   console.log(data);
    // })
  }

  deleteStudentlist(){
    this.store.dispatch(deleteStudents({id:this.id}));
    this.store.select('delete').subscribe((data)=>{
      console.log(data);
      
    })
  }
 
  openPopup(){
    this.updatepopup(0,'Add Blog')
  }


  updatepopup(item:any,index:any,isedit=false){
    this.dialog.open(PopupComponent,{
      data:{
        id:item.id,
        title:item.title,
        description:item.description,
        isedit:isedit
      }
    })
  }

  update(id:any,item:any){
    // this.updatepopup(item,'Edit Blog',true);
    this.router.navigate(['Blog/edit/'+id]);
  }

  delete(i:any,item:any){
    this.store.dispatch(deleteBlog({id:item.id}));
  }
  updateList(list:StudentsModel,index:any){

    this.updatedList.push(list);
    this.store.dispatch(update_blog({id:'65d2ee909eabecb193817b2d',students:this.updatedList}));
    this.store.select('students').subscribe((data)=>{
       console.log(data);
       console.log(data);
       
    })
  }
}
