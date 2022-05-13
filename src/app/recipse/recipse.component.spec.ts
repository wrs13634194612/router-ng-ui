import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipseComponent } from './recipse.component';

describe('RecipseComponent', () => {
  let component: RecipseComponent;
  let fixture: ComponentFixture<RecipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
