import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService {
  
  constructor( private http : Http) { }

  getTracks(){
    const spotifyApiUrl = 'https://api.spotify.com/v1/me/tracks';
    const params: string = 
    'access_token=BQCIm0C8Emo1e9eM-uCYeyAWjKmsBUb-tUh2eZcpubemcOmrt01s5kAqgMsOwANr5knd9Yfu2uZZe2hdkOfpNMn21jCE3tQWW_pwoOwEpU_Q9RK0rbC7kHQgv6Es-bITpnF3bjvDL6KWj81Va4skPKtKzGYZS7Oj5xRK6KmsFOq5Tfizqqv4O94MUie6BUf2MaRmFHq3UCmc2Xhz0QSRRgUFPNmirTEivhixcpQ';

    const queryUrl = `${ spotifyApiUrl }?${ params }`

    return this.http.get(queryUrl)
        .map((res) => res.json());
  }


  searchTrack( query : string ){
    let params: string = [
      `q=${ query }`,
      `type=track`
    ].join('&')
    
    const accessToken: string = 
    'access_token=BQBUNI-Np-2B1F9zIU_NJ8IqD18gzerbPrUaBSEb2DuIjJt_rjfIYogZKJEV1DVTM2hFmMasHJycgQrJvPzOxA4DJTZ0hSg5EJrwl-zdwWfn43YB1vV9ZWPayizQ1qqMp7LjJx2kM-kA8nHC3UUWyWH-jJC7GmfEqPiDJwXMkF26-sC_QST_9aLObpeZHoMM0jSmmclcNdQizxz-to1U1puiHvU4kuTd5p0ItFA';

    const spotifyApiUrl: string = `https://api.spotify.com/v1/search?${ params }&${ accessToken }`;

    return this.http.get( spotifyApiUrl )
      .map((res: Response) => res.json());
  }

}
