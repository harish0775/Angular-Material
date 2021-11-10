import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  login = new FormGroup({
  name :new FormControl(''),
  password : new FormControl('')
})
name :any
password : any
onSubmit(){
  console.log(this.login);
}
  constructor() { }
  ngOnInit(): void {
  }

}
