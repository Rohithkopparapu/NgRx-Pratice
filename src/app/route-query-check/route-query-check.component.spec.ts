import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteQueryCheckComponent } from './route-query-check.component';

describe('RouteQueryCheckComponent', () => {
  let component: RouteQueryCheckComponent;
  let fixture: ComponentFixture<RouteQueryCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteQueryCheckComponent]
    });
    fixture = TestBed.createComponent(RouteQueryCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
