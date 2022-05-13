import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipseEditComponent } from './recipse-edit.component';

describe('RecipseEditComponent', () => {
  let component: RecipseEditComponent;
  let fixture: ComponentFixture<RecipseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
