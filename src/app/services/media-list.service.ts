import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import mediaList from '../data/medias.json';
import { IMediaList } from '../model/IMediaList';


@Injectable()
export class MediaListService {
  constructor() {}

  public getMedias(): Observable<IMediaList> {
    return new Observable((obs) => {
      obs.next(mediaList);
    });
  }
}
