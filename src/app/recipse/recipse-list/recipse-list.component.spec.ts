import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipseListComponent } from './recipse-list.component';

describe('RecipseListComponent', () => {
  let component: RecipseListComponent;
  let fixture: ComponentFixture<RecipseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
