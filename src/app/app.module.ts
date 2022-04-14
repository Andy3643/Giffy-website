import { GifserviceService } from './gifservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { GiftrendsComponent } from './giftrends/giftrends.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GiftrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [GifserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
