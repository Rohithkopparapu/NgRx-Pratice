import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppstateModel } from 'src/app/shared/Global/Appstate.Model';
import { getchannel, getcounter } from 'src/app/shared/counter.selector';
import { CounterModel } from 'src/app/shared/counter.state';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit,OnDestroy {

  constructor(private store:Store<AppstateModel>){}
  channelname!:string;
  displaynumber!:number;
  counterSubsrciption!:Subscription
  ngOnInit(): void {
   this.counterSubsrciption=this.store.select(getcounter).subscribe((data:any)=>{
      this.displaynumber = data;
      
    })
    this.counterSubsrciption=this.store.select(getchannel).subscribe((data:any)=>{
      this.channelname = data;
    })
  }
ngOnDestroy(): void {
  if(this.counterSubsrciption){
    this.counterSubsrciption.unsubscribe();
  }
}


}
