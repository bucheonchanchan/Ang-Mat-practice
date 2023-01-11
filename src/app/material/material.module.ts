import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule
  ]
})
export class MaterialModule { }