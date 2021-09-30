import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutBetweenComponent } from './components/layout-between/layout-between.component';
import { MainBodyLayoutComponent } from './components/main-body-layout/main-body-layout.component';
import { BodyComponent } from './components/body/body.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LayoutBetweenComponent,
    MainBodyLayoutComponent,
    BodyComponent,
    MainHeaderComponent,
    PageLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
