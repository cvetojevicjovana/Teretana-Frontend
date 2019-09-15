import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazClanskeKarteComponent } from './prikaz-clanske-karte.component';

describe('PrikazClanskeKarteComponent', () => {
  let component: PrikazClanskeKarteComponent;
  let fixture: ComponentFixture<PrikazClanskeKarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazClanskeKarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazClanskeKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
