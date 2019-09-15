import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosClanskeKarteComponent } from './unos-clanske-karte.component';

describe('UnosClanskeKarteComponent', () => {
  let component: UnosClanskeKarteComponent;
  let fixture: ComponentFixture<UnosClanskeKarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosClanskeKarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosClanskeKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
