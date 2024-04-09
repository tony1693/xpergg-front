import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsNotificationsComponent } from './dropdowns-notifications.component';

describe('DropdownsNotificationsComponent', () => {
  let component: DropdownsNotificationsComponent;
  let fixture: ComponentFixture<DropdownsNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownsNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
