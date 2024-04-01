import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsThreadsComponent } from './dropdowns-threads.component';

describe('DropdownsThreadsComponent', () => {
  let component: DropdownsThreadsComponent;
  let fixture: ComponentFixture<DropdownsThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownsThreadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownsThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
