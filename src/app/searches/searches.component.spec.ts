import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchesComponent } from './searches.component';
import { SingleSearchComponent } from './single-search/single-search.component';

describe('SearchesComponent', () => {
  let component: SearchesComponent;
  let fixture: ComponentFixture<SearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchesComponent, SingleSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create single search', () => {
    expect(component).toBeTruthy();
  });
});
