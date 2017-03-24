import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachineComponent } from './virtual-machine.component';

describe('VirtualMachineComponent', () => {
  let component: VirtualMachineComponent;
  let fixture: ComponentFixture<VirtualMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
