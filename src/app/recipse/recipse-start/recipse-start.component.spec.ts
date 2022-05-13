import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipseStartComponent } from './recipse-start.component';

describe('RecipseStartComponent', () => {
  let component: RecipseStartComponent;
  let fixture: ComponentFixture<RecipseStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipseStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipseStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
