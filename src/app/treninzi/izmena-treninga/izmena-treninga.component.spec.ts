import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaTreningaComponent } from './izmena-treninga.component';

describe('IzmenaTreningaComponent', () => {
  let component: IzmenaTreningaComponent;
  let fixture: ComponentFixture<IzmenaTreningaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaTreningaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaTreningaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
