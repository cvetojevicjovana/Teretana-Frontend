import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazTerminaComponent } from './prikaz-termina.component';

describe('PrikazTerminaComponent', () => {
  let component: PrikazTerminaComponent;
  let fixture: ComponentFixture<PrikazTerminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazTerminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazTerminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
