import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { RXJSExampleComponent } from './rxjsexample/rxjsexample.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    RXJSExampleComponent,
    ViewChildExampleComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, GridModule, HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
