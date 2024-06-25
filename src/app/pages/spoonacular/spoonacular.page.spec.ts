import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpoonacularPage } from './spoonacular.page';

describe('SpoonacularPage', () => {
  let component: SpoonacularPage;
  let fixture: ComponentFixture<SpoonacularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoonacularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
