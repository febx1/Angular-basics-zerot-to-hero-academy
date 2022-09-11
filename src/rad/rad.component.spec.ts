import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadComponent } from './rad.component';

describe('RadComponent', () => {
  let component: RadComponent;
  let fixture: ComponentFixture<RadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
