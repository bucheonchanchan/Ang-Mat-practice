import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableSortingComponent } from './table-sorting/table-sorting.component';
import { TableDefaultComponent } from './table-default/table-default.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { TableRowClickComponent } from './table-row-click/table-row-click.component';
import { DrawerComponent } from './drawer/drawer.component';
import { TableExpandComponent } from './table-expand/table-expand.component';
import { TableFilteringComponent } from './table-filtering/table-filtering.component';
@NgModule({
  declarations: [
    AppComponent,
    TableSortingComponent,
    TableDefaultComponent,
    TableRowClickComponent,
    DrawerComponent,
    TableExpandComponent,
    TableFilteringComponent
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
