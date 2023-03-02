import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEventsComponent } from './grid-events.component';

describe('GridEventsComponent', () => {
  let component: GridEventsComponent;
  let fixture: ComponentFixture<GridEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
