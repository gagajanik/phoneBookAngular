import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassResComponent } from './pass-res.component';

describe('PassResComponent', () => {
  let component: PassResComponent;
  let fixture: ComponentFixture<PassResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
