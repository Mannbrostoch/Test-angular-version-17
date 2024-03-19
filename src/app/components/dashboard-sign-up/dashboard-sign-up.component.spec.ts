import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSignUpComponent } from './dashboard-sign-up.component';

describe('DashboardSignUpComponent', () => {
  let component: DashboardSignUpComponent;
  let fixture: ComponentFixture<DashboardSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
