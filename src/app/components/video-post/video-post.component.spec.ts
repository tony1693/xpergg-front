import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPostComponent } from './video-post.component';

describe('VideoPostComponent', () => {
  let component: VideoPostComponent;
  let fixture: ComponentFixture<VideoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
