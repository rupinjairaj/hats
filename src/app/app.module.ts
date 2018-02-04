import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ToggleComponent } from './toggle/toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
