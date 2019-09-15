import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanskeKarteComponent } from './clanske-karte.component';

describe('ClanskeKarteComponent', () => {
  let component: ClanskeKarteComponent;
  let fixture: ComponentFixture<ClanskeKarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanskeKarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanskeKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
