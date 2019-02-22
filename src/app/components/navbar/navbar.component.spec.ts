import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title weather app', () => {
    expect(component.title).toEqual('Weather app');
  });

  it('should have a report an issue element', () => {
    const navbarElement: HTMLElement = fixture.nativeElement;
    expect(navbarElement.textContent).toContain('Report an issue');
  });

  it('should have a report an about element', () => {
    const navbarElement: HTMLElement = fixture.nativeElement;
    expect(navbarElement.textContent).toContain('About');
  });

  it('should have a report an contact element', () => {
    const navbarElement: HTMLElement = fixture.nativeElement;
    expect(navbarElement.textContent).toContain('Contact');
  });

});
