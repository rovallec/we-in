import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BlogComponent } from './components/blog/blog.component';
import { LinksComponent } from './components/links/links.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    BlogComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
