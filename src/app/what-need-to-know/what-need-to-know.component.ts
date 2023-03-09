import { Component, OnInit } from '@angular/core';
interface Tab {
  type: 'paragraph' | 'list'
  text?: string,
  margin?: string,
  listChildren?: listChild[]
}

interface listChild {
  paragraphs: string[]
}

@Component({
  selector: 'app-what-need-to-know',
  templateUrl: './what-need-to-know.component.html',
  styleUrls: ['./what-need-to-know.component.scss'],
})
export class WhatNeedToKnowComponent {
  tabs: Tab[] = [
    {
      type: 'paragraph',
      text: 'Как инвесторы могут заработать на IPO?',

    },
    {
      type: 'paragraph',
      text: 'asdasdasd'
    }
  ]
}







