import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSearchComponent } from './single-search.component';
import { UserSettingsService } from 'src/app/services/UserSettings.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SingleSearchComponent', () => {
  let component: SingleSearchComponent;
  let fixture: ComponentFixture<SingleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSearchComponent],
      providers: [UserSettingsService, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create single search component', () => {
    expect(component).toBeTruthy();
  });
});
