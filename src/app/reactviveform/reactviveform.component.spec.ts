import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactviveformComponent } from './reactviveform.component';

describe('ReactviveformComponent', () => {
  let component: ReactviveformComponent;
  let fixture: ComponentFixture<ReactviveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactviveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactviveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
