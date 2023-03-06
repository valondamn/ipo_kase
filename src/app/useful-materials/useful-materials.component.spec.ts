import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulMaterialsComponent } from './useful-materials.component';

describe('UsefulMaterialsComponent', () => {
  let component: UsefulMaterialsComponent;
  let fixture: ComponentFixture<UsefulMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefulMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



