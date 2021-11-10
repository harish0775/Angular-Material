import { Component, OnInit } from '@angular/core';
import {FormBuilder,NgForm,Validators} from '@angular/forms'
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  showMyMessage: boolean = false;

    constructor(private fb: FormBuilder) { }

 login =  this.fb.group({
    name : ['Harish', [Validators.required, Validators.minLength(10)]],
    password : ['123']
 })
   get name() {
    return this.login.get('name');
  }
onSubmit(f:NgForm){
  console.log(this.login.value);
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid); 
}
showMessageSoon(){
  this.showMyMessage = true;
}

  ngOnInit(): void {
  }

}



