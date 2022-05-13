import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipseDetailComponent } from './recipse-detail.component';

describe('RecipseDetailComponent', () => {
  let component: RecipseDetailComponent;
  let fixture: ComponentFixture<RecipseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
