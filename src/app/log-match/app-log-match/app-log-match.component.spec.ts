import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogMatchComponent } from './app-log-match.component';

describe('AppLogMatchComponent', () => {
  let component: AppLogMatchComponent;
  let fixture: ComponentFixture<AppLogMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLogMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLogMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
