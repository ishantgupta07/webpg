import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomlayerComponent } from './bottomlayer.component';

describe('BottomlayerComponent', () => {
  let component: BottomlayerComponent;
  let fixture: ComponentFixture<BottomlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
