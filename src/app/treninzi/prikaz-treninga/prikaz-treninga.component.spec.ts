import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazTreningaComponent } from './prikaz-treninga.component';

describe('PrikazTreningaComponent', () => {
  let component: PrikazTreningaComponent;
  let fixture: ComponentFixture<PrikazTreningaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazTreningaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazTreningaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
