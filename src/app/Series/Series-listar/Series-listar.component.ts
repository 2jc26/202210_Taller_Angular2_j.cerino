import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../Series.service';

@Component({
  selector: 'app-Series-listar',
  templateUrl: './Series-listar.component.html',
  styleUrls: ['./Series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {

  select: boolean = false;
  selectSerie!: Series;
  series: Array<Series> = [];
  promedioTemporadas: number=0;
  constructor(private service: SeriesService) { }

  getEventos():void {
    this.service.getSeries().subscribe((series) => {
      this.series = series;
      this.series.forEach(series => {
        this.promedioTemporadas += series.seasons;
      });
      this.promedioTemporadas /= this.series.length;
    });
  }

  onSelect(serie:Series){
    this.select = true;
    this.selectSerie = serie;
  }

  ngOnInit() {
    this.getEventos();
  }

}
