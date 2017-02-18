import { Component, OnInit, Input } from '@angular/core';
import { ApiSpotifyService } from './../service/api-spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results:any;

  searchTerm:any;

  constructor(private _apiSpotify: ApiSpotifyService) {

  }

  search(){
    this._apiSpotify.search(this.searchTerm).subscribe(res=>{
      this.results = res.artists.items;
    })

  }

  ngOnInit() {
  }

}
