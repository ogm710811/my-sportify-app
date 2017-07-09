import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService {
  private accessToken: string = 
    'access_token=BQAC1mzaQ40WwpB4n7e4YpG7-DabpwFNXpJoeFmrR8WSxAabFcmy-ZU5B7lwZX2s9iT48mBdOKYcCwbxxmi2GbiV0GaDu_Jamtqfqr36LsCPvp1mbWNrOnkab9Nv2hrP5KQ6UtZto7NR9o6D7ycbkPif3J73W1vT5Xfq1DCSGNzfnrrCrh6VZ4ntPVQzaCRxYTE1TVvguEiEhokbppVFgGTCFim8deSZL-ofFX34aZ8_wKM';
    private searchUrl: string;
    private artistUrl: string;
  
  constructor( private http : Http) { }

  searchTrack( query : string ){
    let params: string = [
      `q=${ query }`,
      `type=track`
    ].join('&');    

    this.searchUrl = `https://api.spotify.com/v1/search?${ params }&${ this.accessToken }`;

    return this.http.get( this.searchUrl )
      .map((res: Response) => res.json());
  }

  getArtist( id : string ){
    this.artistUrl = `https://api.spotify.com/v1/artists/${ id }?${ this.accessToken }`;

    return this.http.get( this.artistUrl )
      .map((res: Response) => res.json());
  }

}// end class SpotifyService

