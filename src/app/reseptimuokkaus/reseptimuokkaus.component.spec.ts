import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseptimuokkausComponent } from './reseptimuokkaus.component';

describe('ReseptimuokkausComponent', () => {
  let component: ReseptimuokkausComponent;
  let fixture: ComponentFixture<ReseptimuokkausComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseptimuokkausComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseptimuokkausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
