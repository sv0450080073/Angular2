import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorialComponent } from 'tutorial.component';
import {FormsModule} from '@angular/forms'
import {employeeListComponent} from './employee.component'



@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    employeeListComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
