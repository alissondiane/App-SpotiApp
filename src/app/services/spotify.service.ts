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
      'Authorization':'Bearer BQBQ-6CSPVqcIKQWvV4PsN11yfpfYOQgccQGikDzgDdAZg6-UNSws3guVHjF51XKRg446ELtJqyoYPp1ogc'
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
