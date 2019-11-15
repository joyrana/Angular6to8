import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RXJSExampleComponent } from './rxjsexample.component';

describe('RXJSExampleComponent', () => {
  let component: RXJSExampleComponent;
  let fixture: ComponentFixture<RXJSExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RXJSExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RXJSExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
