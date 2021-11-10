import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  fromgroup = new FormGroup({
    firstName: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
