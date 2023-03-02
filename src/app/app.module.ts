import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 

import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { VideoBlockComponent } from './video-block/video-block.component';
import { WhatNeedToKnowComponent } from './what-need-to-know/what-need-to-know.component';
import { HowToJoinComponent } from './how-to-join/how-to-join.component';
import { EventsComponent } from './events/events.component'; 

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    VideoBlockComponent,
    WhatNeedToKnowComponent,
    HowToJoinComponent,
    EventsComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    TabModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
