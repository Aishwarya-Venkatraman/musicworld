import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlaylistService } from './playlist.service';
import { PlayList } from '../types/app.types';

describe('PlaylistService', () => {
  let httpTestingController: HttpTestingController;
  let baseUrl = "https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json";
  let playList: PlayList;
  let service: PlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    playList = {
      featuredPlaylists: {
        name: 'Featured Playlists',
        content: []
      }
    };
    service = TestBed.inject(PlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('set playlist', () => {
    service.setPlayList = {
      featuredPlaylists: {
        name: '',
        content: []
      }
    };
    expect(service.playlists.featuredPlaylists.content.length).toBe(0);
  });

  it('get playlist', () => {
    service.setPlayList = {
      featuredPlaylists: {
        name: 'Featured Playlists',
        content: []
      }
    };
    expect(service.getPlaylist.featuredPlaylists.name).toBe('Featured Playlists');
  });

  it("should return data", () => {
    let result: PlayList;
    service.getData().subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });
   
    req.flush(playList);
    // expect(result).toEqual(playList);
  });
});
