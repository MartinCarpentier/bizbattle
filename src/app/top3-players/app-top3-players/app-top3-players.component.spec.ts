import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTop3PlayersComponent } from './app-top3-players.component';

describe('AppTop3PlayersComponent', () => {
  let component: AppTop3PlayersComponent;
  let fixture: ComponentFixture<AppTop3PlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTop3PlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTop3PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
