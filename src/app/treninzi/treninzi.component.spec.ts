import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreninziComponent } from './treninzi.component';

describe('TreninziComponent', () => {
  let component: TreninziComponent;
  let fixture: ComponentFixture<TreninziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreninziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreninziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
