import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiSpotifyService {

  constructor(private http: Http) {

  }

  search(search){
    return this.http.get('https://api.spotify.com/v1/search?q='+search+'&type=artist&market=US')
        .map(res => res.json()  );
  }

  getArtist(id){
    return this.http.get('https://api.spotify.com/v1/artists/'+id)
        .map(res => res.json()  );
  }

  getAlbum(id){
    return this.http.get('https://api.spotify.com/v1/artists/'+id+'/albums?album_type=single,album&market=ES')
        .map(res => res.json()  );
  }

}
