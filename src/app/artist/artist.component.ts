import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { ApiSpotifyService } from './../service/api-spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})


export class ArtistComponent implements OnInit {

  artist:any;
  album:any;
  bool:boolean=false;

  constructor(
      private route: ActivatedRoute,
      private _apiSpotify: ApiSpotifyService)
      {}

  getArtist(id){
    return this._apiSpotify.getArtist(id).subscribe(res => {
      this.artist = res;
    });
  }

  getAlbum(id){
    return this._apiSpotify.getAlbum(id).subscribe(res => {
      this.album = res.items;
    });
  }

  ngOnInit() {
    this.getArtist(this.route.snapshot.params['id'])
    this.getAlbum(this.route.snapshot.params['id'])
  }

  view(){
    this.ngOnInit();
    this.bool = true;
    console.log(this.artist);
    return false;
  }


}
