import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TempletedrivenfromComponent } from './templetedrivenfrom/templetedrivenfrom.component';
const routes: Routes = [
  { path: 'comp1', component: Component1Component },
  { path: 'comp2', component:  Component2Component},
  {path : 'comp3', component : Component3Component},
  {path : 'comp4', component : TempletedrivenfromComponent},  
  {path : 'comp5',component :  ReactiveformComponent },
  {path : 'comp6',component : FormbuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
