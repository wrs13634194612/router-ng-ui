import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceZczComponent } from './device-zcz.component';

describe('DeviceZczComponent', () => {
  let component: DeviceZczComponent;
  let fixture: ComponentFixture<DeviceZczComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceZczComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceZczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
