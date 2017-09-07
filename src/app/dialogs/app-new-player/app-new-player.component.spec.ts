import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewPlayerComponent } from './app-new-player.component';

describe('AppNewPlayerComponent', () => {
  let component: AppNewPlayerComponent;
  let fixture: ComponentFixture<AppNewPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNewPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
