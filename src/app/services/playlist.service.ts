import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayList } from '../types/app.types';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  public playlists: PlayList;
  playListUrl = 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json';

  constructor(private http: HttpClient) { 
    this.playlists = {
      featuredPlaylists: {
        name: '',
        content: []
      }
    };
  }

  getData() {
    return this.http.get<PlayList>(this.playListUrl);
  }

  set setPlayList(val: PlayList){
    this.playlists = val;
  }

  get getPlaylist():PlayList{
    return this.playlists;
  }
}
