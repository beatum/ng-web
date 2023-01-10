import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppusergroupComponent } from './appusergroup.component';

describe('AppusergroupComponent', () => {
  let component: AppusergroupComponent;
  let fixture: ComponentFixture<AppusergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppusergroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppusergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
