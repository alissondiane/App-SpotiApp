import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable()
export class SpotifyService {

 

  constructor(private http:HttpClient) {
    console.log('Spotify service listo');
   }

  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCwV9oeY91gaDZAw8cp2P5HDZ-0AbYWtbHRn8g_zQ2omfEPe45iO7SDq8uLRo0-qONdnf6L4mswEwgsfDg'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
            .pipe(map(data=>data['albums'].items));
  }

  getArtist(termino:string){
    return  this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe(map(data=>data['artists'].items));
  }
}
