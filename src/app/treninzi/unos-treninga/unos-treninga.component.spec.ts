import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosTreningaComponent } from './unos-treninga.component';

describe('UnosTreningaComponent', () => {
  let component: UnosTreningaComponent;
  let fixture: ComponentFixture<UnosTreningaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosTreningaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosTreningaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
