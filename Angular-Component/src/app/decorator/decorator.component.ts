import { Component} from '@angular/core';

function  log(target: any,name: any,description: any){
  console.log(target,name,description);
}

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent {

@log 
SimpleMehtod(){ 
console.log("hey there!")
}
}
