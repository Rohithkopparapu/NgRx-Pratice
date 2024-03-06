import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/shared/counter.actions';
import { getchannel } from 'src/app/shared/counter.selector';
import { CounterModel } from 'src/app/shared/counter.state';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  implements OnInit{

  constructor(private store:Store<{counter:CounterModel}>){}
  ngOnInit(): void {
  
  }
  onIncrement(){
  this.store.dispatch(increment());
  }
  ondecrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }

}
