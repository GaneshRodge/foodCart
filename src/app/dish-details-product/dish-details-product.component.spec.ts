import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailsProductComponent } from './dish-details-product.component';

describe('DishDetailsProductComponent', () => {
  let component: DishDetailsProductComponent;
  let fixture: ComponentFixture<DishDetailsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishDetailsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
