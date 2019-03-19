import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ToDoListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ToDoListComponent]
})
export class ToDoListModule { }
