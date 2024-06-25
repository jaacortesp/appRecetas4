import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPpalPage } from './menu-ppal.page';

describe('MenuPpalPage', () => {
  let component: MenuPpalPage;
  let fixture: ComponentFixture<MenuPpalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPpalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
