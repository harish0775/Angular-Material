import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
constructor(public router :Router) {}
name : any
password : any

login(){
  if(this.name == 'harish' && this.password == "123"){
    this.router.navigate(["comp2"]);
  }else{
    alert("Invalid credentials");
    
  }
}
  // login() : void {
  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["user"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }
  

  ngOnInit(){}
  
}
