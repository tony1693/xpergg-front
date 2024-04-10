import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginNavbarComponent } from './form-login-navbar.component';

describe('FormLoginNavbarComponent', () => {
  let component: FormLoginNavbarComponent;
  let fixture: ComponentFixture<FormLoginNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLoginNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormLoginNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
