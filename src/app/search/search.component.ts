import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

// SERVICES here ..
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  myTracks: any;
  query: string;
  trackResults: any = '';
  

  constructor( private tracks : SpotifyService ) { }

  ngOnInit() {
  }

  searchTrack( search ) : void {
    this.query = search.value;

    if (!this.query) {
      return;
    }
    console.log( this.query );
    
    this.tracks.searchTrack( this.query )
      //.subscribe(( track ) => this.trackResults = track);
      .subscribe(res => {
        console.log(res.tracks.items);
        this.trackResults = res.tracks.items;
      })
  }


} 
