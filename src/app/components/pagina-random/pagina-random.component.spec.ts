import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRandomComponent } from './pagina-random.component';

describe('PaginaRandomComponent', () => {
  let component: PaginaRandomComponent;
  let fixture: ComponentFixture<PaginaRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
