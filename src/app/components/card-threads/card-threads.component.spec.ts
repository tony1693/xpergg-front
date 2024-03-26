import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThreadsComponent } from './card-threads.component';

describe('CardThreadsComponent', () => {
  let component: CardThreadsComponent;
  let fixture: ComponentFixture<CardThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardThreadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
