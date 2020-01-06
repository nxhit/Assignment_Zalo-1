import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  song;
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit() {
    if(!this.ds.selectedSong){
      this.router.navigate(['/tabs/tab1'])
    }
    else{
      this.song=this.ds.selectedSong;
      console.log(this.ds.selectedSong)
    }

  }

}
