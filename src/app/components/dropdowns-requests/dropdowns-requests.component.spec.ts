import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsRequestsComponent } from './dropdowns-requests.component';

describe('DropdownsRequestsComponent', () => {
  let component: DropdownsRequestsComponent;
  let fixture: ComponentFixture<DropdownsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownsRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
