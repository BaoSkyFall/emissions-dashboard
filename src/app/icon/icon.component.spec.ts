import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent]
    });
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default properties', () => {
    expect(component.name).toEqual('');
    expect(component.color).toEqual('');
    expect(component.className).toEqual('');
    expect(component.background).toEqual('');
    expect(component.styleBorder).toEqual('default');
  });

  it('should have the correct container classes', () => {
    component.styleBorder = 'circle';
    const containerClasses = component.getContainerClasses();
    expect(containerClasses['flex items-center justify-center']).toBeTrue();
    expect(containerClasses['rounded-full p-3 w-fit']).toBeTrue();
    expect(containerClasses['p-2']).toBeFalse();

    component.styleBorder = 'default';
    const defaultContainerClasses = component.getContainerClasses();
    expect(defaultContainerClasses['flex items-center justify-center']).toBeTrue();
    expect(defaultContainerClasses['rounded-full p-3 w-fit']).toBeFalse();
    expect(defaultContainerClasses['p-2']).toBeTrue();
  });

  it('should have the correct icon classes', () => {
    component.name = 'camera';
    component.color = 'red';
    expect(component.getIconClasses()).toEqual('fa fa-camera text-red');
  });
});
