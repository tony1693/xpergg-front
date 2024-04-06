import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWithoutPageComponent } from './link-without-page.component';

describe('LinkWithoutPageComponent', () => {
  let component: LinkWithoutPageComponent;
  let fixture: ComponentFixture<LinkWithoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkWithoutPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkWithoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
