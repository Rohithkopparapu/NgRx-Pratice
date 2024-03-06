import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppstateModel } from '../shared/Global/Appstate.Model';
import { getAllBlog, getBlogById } from '../blogs/blog.selector';
import { addBlogAction, updateBlog } from '../blogs/blog.action';
import { BlogModel } from '../blogs/blog.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  item!:any;
  title!:string;
  description!:string;
  update!:string;
  editblogid=0;
  constructor(private dialog:MatDialog,private store:Store<AppstateModel>,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(): void {
    this.item=this.data;
    if(this.item.isedit){
      this.store.select(getBlogById(this.item.id)).subscribe((data)=>{
        this.title = data.title;
        this.description = data.description;
      })
    }
  }

  addBlog(){
    this.update = "false";
    const newBlog:any={
      title:this.title,
      description:this.description
    }
    if(this.item.isedit){
      newBlog.id = this.item.id;
    this.store.dispatch(updateBlog(newBlog))
    }else{
      this.store.dispatch(addBlogAction(newBlog));
    }
  }

  closepopup(){
    this.dialog.closeAll();
  }
}
