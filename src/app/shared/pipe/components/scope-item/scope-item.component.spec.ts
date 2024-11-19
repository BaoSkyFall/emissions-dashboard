import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScopeItemComponent } from './scope-item.component';

describe('ScopeItemComponent', () => {
  let component: ScopeItemComponent;
  let fixture: ComponentFixture<ScopeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScopeItemComponent]
    });
    fixture = TestBed.createComponent(ScopeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default properties', () => {
    expect(component.color).toEqual('');
    expect(component.title).toEqual('');
    expect(component.value).toEqual(0);
  });

  it('should display the correct information', () => {
    component.color = 'red';
    component.title = 'Scope 1';
    component.value = 22000;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const colorEl = compiled.querySelector('.w-2.h-2.rounded-full') as HTMLElement;
    const titleEl = compiled.querySelector('.text-sm.text-gray-600') as HTMLElement;
    const valueEl = compiled.querySelector('.text-2xl.font-bold') as HTMLElement;

    expect(colorEl.style.backgroundColor).toEqual('red');
    expect(titleEl.textContent).toContain('Scope 1');
    expect(valueEl.textContent).toContain('22,000');
  });
});
