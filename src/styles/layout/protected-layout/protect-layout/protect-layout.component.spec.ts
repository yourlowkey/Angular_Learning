import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectLayoutComponent } from './protect-layout.component';

describe('ProtectLayoutComponent', () => {
  let component: ProtectLayoutComponent;
  let fixture: ComponentFixture<ProtectLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
