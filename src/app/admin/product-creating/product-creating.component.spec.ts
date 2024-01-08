import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreatingComponent } from './product-creating.component';

describe('ProductCreatingComponent', () => {
  let component: ProductCreatingComponent;
  let fixture: ComponentFixture<ProductCreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCreatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
