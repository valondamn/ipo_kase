import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { GridHowToJoinComponent } from './components/grid-how-to-join/grid-how-to-join.component';
import { GridEventsComponent } from './components/grid-events/grid-events.component';
import { ComponentsAttentionComponent } from './components/components-attention/components-attention.component';
const components = [
  TabsComponent,
  GridHowToJoinComponent,
  GridEventsComponent,
  ComponentsAttentionComponent
]


@NgModule({
  declarations: [
    ...components,
    GridHowToJoinComponent,
    GridEventsComponent,
    ComponentsAttentionComponent
    

  ],
  imports: [
    CommonModule
  ], 
  exports:[
    ...components,
    
  ]
})
export class SharedModule { }
