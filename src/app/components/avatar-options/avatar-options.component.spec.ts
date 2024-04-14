import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarOptionsComponent } from './avatar-options.component';

describe('AvatarOptionsComponent', () => {
  let component: AvatarOptionsComponent;
  let fixture: ComponentFixture<AvatarOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
