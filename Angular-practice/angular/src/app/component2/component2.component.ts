import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 items= [
   { name:'Angular', active:true},
   { name:'React', active:true},
   { name:'Typescript', active:true},
   { name:'FoxPro', active:false},
   { name:'Javascript', active:true},
   { name:'ASP.NET Core', active:true},
   { name:'DBase', active:false}
 ]
 
}
