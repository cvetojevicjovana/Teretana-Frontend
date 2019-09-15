import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaClanskeKarteComponent } from './izmena-clanske-karte.component';

describe('IzmenaClanskeKarteComponent', () => {
  let component: IzmenaClanskeKarteComponent;
  let fixture: ComponentFixture<IzmenaClanskeKarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaClanskeKarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaClanskeKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
