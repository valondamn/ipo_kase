import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatNeedToKnowComponent } from './what-need-to-know.component';

describe('WhatNeedToKnowComponent', () => {
  let component: WhatNeedToKnowComponent;
  let fixture: ComponentFixture<WhatNeedToKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatNeedToKnowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatNeedToKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
