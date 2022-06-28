import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-cardplaylist',
  templateUrl: './cardplaylist.component.html',
  styleUrls: ['./cardplaylist.component.scss']
})
export class CardplaylistComponent implements OnInit {
  playList: any;
  constructor(private playListService: PlaylistService, private router: Router) { }

  ngOnInit(): void {
    if(this.router.url === '/home') {
      this.playList = this.playListService.getPlaylist.featuredPlaylists.content.slice(0,3);
    } else {
      this.playList = this.playListService.getPlaylist.featuredPlaylists.content;
    }
  }

}
