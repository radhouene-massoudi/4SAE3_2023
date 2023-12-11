import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListappartementComponent } from './listappartement.component';

describe('ListappartementComponent', () => {
  let component: ListappartementComponent;
  let fixture: ComponentFixture<ListappartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListappartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
