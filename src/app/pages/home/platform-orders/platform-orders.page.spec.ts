import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformOrdersPage } from './platform-orders.page';

describe('PlatformOrdersPage', () => {
  let component: PlatformOrdersPage;
  let fixture: ComponentFixture<PlatformOrdersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
