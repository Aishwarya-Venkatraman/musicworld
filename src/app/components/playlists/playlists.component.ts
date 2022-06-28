import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { PlayList } from 'src/app/types/app.types';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  data: PlayList | undefined;
  playList: any;

  constructor(private playListService: PlaylistService) {}

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
    scrollTo(0,0);
  }

}
