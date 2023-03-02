import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { GridHowToJoinComponent } from './components/grid-how-to-join/grid-how-to-join.component';
import { GridEventsComponent } from './components/grid-events/grid-events.component';
const components = [
  TabsComponent,
  GridHowToJoinComponent,
  GridEventsComponent
]


@NgModule({
  declarations: [
    ...components,
    GridHowToJoinComponent,
    GridEventsComponent

  ],
  imports: [
    CommonModule
  ], 
  exports:[
    ...components
  ]
})
export class SharedModule { }
