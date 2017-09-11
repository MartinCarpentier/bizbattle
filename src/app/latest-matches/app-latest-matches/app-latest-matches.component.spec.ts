import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLatestMatchesComponent } from './app-latest-matches.component';

describe('AppLatestMatchesComponent', () => {
  let component: AppLatestMatchesComponent;
  let fixture: ComponentFixture<AppLatestMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLatestMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLatestMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
