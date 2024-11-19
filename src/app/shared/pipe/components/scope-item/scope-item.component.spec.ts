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
});
