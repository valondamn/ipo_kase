import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAttentionComponent } from './components-attention.component';

describe('ComponentsAttentionComponent', () => {
  let component: ComponentsAttentionComponent;
  let fixture: ComponentFixture<ComponentsAttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsAttentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
