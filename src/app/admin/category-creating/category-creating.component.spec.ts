import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreatingComponent } from './category-creating.component';

describe('CategoryCreatingComponent', () => {
  let component: CategoryCreatingComponent;
  let fixture: ComponentFixture<CategoryCreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCreatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
