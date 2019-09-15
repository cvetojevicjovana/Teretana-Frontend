import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosKorisnikaComponent } from './unos-korisnika.component';

describe('UnosKorisnikaComponent', () => {
  let component: UnosKorisnikaComponent;
  let fixture: ComponentFixture<UnosKorisnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosKorisnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
