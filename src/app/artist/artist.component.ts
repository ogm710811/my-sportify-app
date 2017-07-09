import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: any;
  albums: any;


  constructor( 
    private artistService: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.artistService.getArtist(id)
              .subscribe(artist => {
                console.log(artist);
                this.artist = artist;
              })
        })
  }

}
