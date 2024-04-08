import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListChatComponent } from './user-list-chat.component';

describe('UserListChatComponent', () => {
  let component: UserListChatComponent;
  let fixture: ComponentFixture<UserListChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
