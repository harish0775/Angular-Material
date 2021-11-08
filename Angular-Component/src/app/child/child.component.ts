import { Component, OnInit,Input,OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges{
  @Input() data : any;
  constructor() {
    console.log('Constructor called');
   }
  ngOnInit(){
 
     console.log('Ng OnInit called')
  }
   ngOnChanges(){
    console.log("data is Update");
  
  }
}