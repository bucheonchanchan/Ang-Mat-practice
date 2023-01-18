import { Component } from '@angular/core';

@Component({
  selector: 'app-async-b',
  template: `<div>
    <code>promise|async</code>:
    <button (click)="clicked()" style='outline: 1px solid black;margin-right: 10px'>{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <span style="outline: 1px solid black;margin-right: 10px">Wait for it... </span><span style="outline: 1px solid black;margin-right: 10px">{{ greeting | async }}</span>
    </div>`
})
export class AsyncBComponent {
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
    console.log("promise: ", this.greeting);
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
}
