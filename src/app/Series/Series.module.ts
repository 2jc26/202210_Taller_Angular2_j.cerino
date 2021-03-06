import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListarComponent } from './Series-listar/Series-listar.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesListarComponent, SeriesDetailComponent],
  exports: [SeriesListarComponent]
})
export class SeriesModule { }
