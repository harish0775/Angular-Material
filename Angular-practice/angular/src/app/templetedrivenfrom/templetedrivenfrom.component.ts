import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templetedrivenfrom',
  templateUrl: './templetedrivenfrom.component.html',
  styleUrls: ['./templetedrivenfrom.component.css']
})
export class TempletedrivenfromComponent implements OnInit {
  user(data:any){
    console.warn(data);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
