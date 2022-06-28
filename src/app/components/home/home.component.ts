import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist.service';
import { PlayList } from 'src/app/types/app.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: PlayList | undefined;
  playList: any;

  constructor(private playListService: PlaylistService, public router: Router) {}

  ngOnInit(): void {
    if(this.playListService.getPlaylist.featuredPlaylists.content.length === 0) {
      this.playListService.getData().subscribe((data: PlayList) => {
        this.data = { ...data }
        this.playListService.setPlayList = data;
        this.playList = data.featuredPlaylists.content;
      });
    } else {
      this.playList = this.playListService.getPlaylist.featuredPlaylists.content;
    }
  }

  goTo() {
    this.router.navigate(['/playlists']);
  }

}
