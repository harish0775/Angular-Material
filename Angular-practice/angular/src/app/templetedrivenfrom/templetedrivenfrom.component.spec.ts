import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletedrivenfromComponent } from './templetedrivenfrom.component';

describe('TempletedrivenfromComponent', () => {
  let component: TempletedrivenfromComponent;
  let fixture: ComponentFixture<TempletedrivenfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletedrivenfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletedrivenfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
