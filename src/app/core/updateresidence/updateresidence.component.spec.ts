import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateresidenceComponent } from './updateresidence.component';

describe('UpdateresidenceComponent', () => {
  let component: UpdateresidenceComponent;
  let fixture: ComponentFixture<UpdateresidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateresidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
