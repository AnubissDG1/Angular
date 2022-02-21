import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatofComponent } from './contatof.component';

describe('ContatofComponent', () => {
  let component: ContatofComponent;
  let fixture: ComponentFixture<ContatofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
