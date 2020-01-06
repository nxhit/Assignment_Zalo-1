import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.page.html',
  styleUrls: ['./detail-film.page.scss'],
})
export class DetailFilmPage implements OnInit {
  film;
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.film=this.ds.selectedFilm;
  }

}
