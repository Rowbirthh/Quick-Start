import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaybillSummaryPage } from './waybill-summary.page';

describe('WaybillSummaryPage', () => {
  let component: WaybillSummaryPage;
  let fixture: ComponentFixture<WaybillSummaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaybillSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
