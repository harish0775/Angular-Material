import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  
  addtask(data:any){
    console.warn(data);
  }
  constructor() { }

  ngOnInit(): void {
  }
  addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}

title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

}
