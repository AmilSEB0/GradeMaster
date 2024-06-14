import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoyenneClassePage } from './moyenne-classe.page';

describe('MoyenneClassePage', () => {
  let component: MoyenneClassePage;
  let fixture: ComponentFixture<MoyenneClassePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoyenneClassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
