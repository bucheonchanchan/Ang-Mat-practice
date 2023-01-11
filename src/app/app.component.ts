import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitMessage: any = "";
  firstExample: any = "";
  secondExample: any = "";
  currentItem = { name: "" };
  myArray:any = [];
  myArray01:any = [];

  trackById(index: number, item: any): number { return item.id; }

  func(value: any){
    console.log(value);
  }

  onSubmit(form: any){
    this.submitMessage = form.value.name;
    console.log("form: ", form.value);
  }

  assignData(){
    this.myArray01 = [
      { name : "David", id: 1 },
      { name : "Chris", id: 2 },
      { name : "Michele", id: 3 },
      { name : "Sam", id: 4 },
      { name : "Tom", id: 5 },
    ];
  }

  ngOnInit(): void {
    this.myArray = [
      { name : "David", id: 1 },
      { name : "Chris", id: 2 },
      { name : "Michele", id: 3 },
      { name : "Sam", id: 4 },
      { name : "Tom", id: 5 },
    ];
    this.myArray01 = [
      { name : "David", id: 1 },
      { name : "Chris", id: 2 },
      { name : "Michele", id: 3 },
      { name : "Sam", id: 4 },
      { name : "Tom", id: 5 },
    ];
  }
}
