import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customDecrement, customIncrement, customSelection, customchannelName } from 'src/app/shared/counter.actions';
import { CounterModel } from 'src/app/shared/counter.state';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {

  constructor(private store:Store<{counter:CounterModel}>){}

  counterInput!:number;
  counterDecrement!:number;
  actionType:string='Add';
  channelname:string='';
  onIncrement(){
   this.store.dispatch(customIncrement({value:this.counterInput}));
  }
  ondecrement(){
    this.store.dispatch(customDecrement({value: +this.counterDecrement}));
  }
  userSelection(){
    this.store.dispatch(customSelection({value: +this.counterInput,action: this.actionType}));
  }
  changeChanelname(){
   this.store.dispatch(customchannelName({action:this.channelname}));
  }
}
