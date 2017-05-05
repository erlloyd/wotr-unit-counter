import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyBoxComponent } from './army-box.component';

describe('ArmyBoxComponent', () => {
  let component: ArmyBoxComponent;
  let fixture: ComponentFixture<ArmyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
