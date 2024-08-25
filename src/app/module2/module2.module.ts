import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2RoutingModule } from './module2-routing.module';
import { Child2Component } from './child2/child2.component';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule,
    Child2Component 
  ]
})
export class Module2Module { }
