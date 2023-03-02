import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHowToJoinComponent } from './grid-how-to-join.component';

describe('GridHowToJoinComponent', () => {
  let component: GridHowToJoinComponent;
  let fixture: ComponentFixture<GridHowToJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridHowToJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridHowToJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
