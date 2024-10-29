import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveArrayComponent } from './directive-array.component';

describe('DirectiveArrayComponent', () => {
  let component: DirectiveArrayComponent;
  let fixture: ComponentFixture<DirectiveArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
