import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchesComponent } from './searches.component';
import { SearchesService } from './searches.service';
import { SingleSearchComponent } from './single-search/single-search.component';

@NgModule({
  declarations: [SearchesComponent, SingleSearchComponent],
  imports: [CommonModule],
  providers: [SearchesService],
  exports: [SearchesComponent]
})
export class SearchesModule { }
