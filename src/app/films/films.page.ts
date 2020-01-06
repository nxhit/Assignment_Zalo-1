import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films:Observable<any>;
  constructor(private http:HttpClient,
    private router:Router,
    private ds:DataService,
    public loadingCtrl: LoadingController) { }
  listFilm:any;
  ngOnInit() {
    this.films=this.http.get('https://swapi.co/api/films/');
    this.films.subscribe(data=>{
      this.listFilm=data['results'];

    })

  }
  goToDetailPage(film){
    this.ds.selectedFilm=film;
    this.router.navigate(['/detail-film'])
  }


} 

