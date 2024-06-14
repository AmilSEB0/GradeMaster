import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoyennePage } from './moyenne.page';

describe('MoyennePage', () => {
  let component: MoyennePage;
  let fixture: ComponentFixture<MoyennePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoyennePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
