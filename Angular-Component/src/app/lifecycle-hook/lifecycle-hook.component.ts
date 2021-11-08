import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  
  styleUrls: ['./lifecycle-hook.component.css'],
})
// export class LifecycleHookComponent {
//   title="Angular Property Binding Example"
//   //Example 1
//   isDisabled= false;
//   message = "Hi!"
//   code = "<header></header>"
//   User = "Harish"
// }
export class LifecycleHookComponent implements OnInit{
  title = "Angular Property Binding"
  isDisabled = false
  message = "Hi"
  code = "<Header></Header>"
  User= "Harish"
  
  constructor(){
    console.log('Conastructor');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
      console.log("ng destroyed Called")
  }
ngOnInit(): void {
  console.log("Ng OnInit Called");
}
  number: any;
  private : number = 123;
get counter(){
  return this.number
}
set counter(value){
  this.number = value
}
 inc(){
   this.counter++;
 }
 dec(){
    this.counter--;
 }
  
}