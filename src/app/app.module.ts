import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableSortingComponent } from './table-sorting/table-sorting.component';
import { TableDefaultComponent } from './table-default/table-default.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AsyncAComponent } from './async-a/async.component';
import { AsyncBComponent } from './async-b/async.component';
@NgModule({
  declarations: [
    AppComponent,
    TableSortingComponent,
    TableDefaultComponent,
    AsyncAComponent,
    AsyncBComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
