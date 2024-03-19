import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboradHeaderComponent } from './dasborad-header.component';

describe('DasboradHeaderComponent', () => {
  let component: DasboradHeaderComponent;
  let fixture: ComponentFixture<DasboradHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasboradHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasboradHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
