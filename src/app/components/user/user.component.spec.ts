import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent); // tworzy component, dodaje go do DOM, zwraca Component fixture
    component = fixture.componentInstance; // z fixture korzystać przy teście
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have proper value from input', () => {
    component.name = 'Hermiona';

    fixture.detectChanges();

    expect(fixture.nativeElement.innerHTML).toContain('Your name is selected.');
    expect(fixture.nativeElement.textContent).toContain('Your name is selected.');

    const elemDe = fixture.debugElement;
    const elemHTML = elemDe.nativeElement;
    const span = elemHTML.querySelector('span');
    expect(span.textContent).toEqual('Your name is selected.');

    component.name = '';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Please set your name');

  });

});
