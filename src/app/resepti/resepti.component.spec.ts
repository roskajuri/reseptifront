import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseptiComponent } from './resepti.component';

describe('ReseptiComponent', () => {
  let component: ReseptiComponent;
  let fixture: ComponentFixture<ReseptiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseptiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
