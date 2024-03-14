import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFollowComponent } from './news-follow.component';

describe('NewsFollowComponent', () => {
  let component: NewsFollowComponent;
  let fixture: ComponentFixture<NewsFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsFollowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
