import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureCodeComponent } from './secure-code.component';

describe('SecureCodeComponent', () => {
  let component: SecureCodeComponent;
  let fixture: ComponentFixture<SecureCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
