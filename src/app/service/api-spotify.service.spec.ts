/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiSpotifyService } from './api-spotify.service';

describe('ApiSpotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSpotifyService]
    });
  });

  it('should ...', inject([ApiSpotifyService], (service: ApiSpotifyService) => {
    expect(service).toBeTruthy();
  }));
});
