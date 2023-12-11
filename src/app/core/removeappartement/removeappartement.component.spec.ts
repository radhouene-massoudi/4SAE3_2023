import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveappartementComponent } from './removeappartement.component';

describe('RemoveappartementComponent', () => {
  let component: RemoveappartementComponent;
  let fixture: ComponentFixture<RemoveappartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveappartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
