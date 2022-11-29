import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IMediaList } from './model/IMediaList';
import { MediaListService } from './services/media-list.service';


@Component({
  selector: 'my-app',
  template: `<div *ngIf="medialist$ | async as medialist">
  <app-media *ngFor="let item of medialist.data" [media]="item"></app-media>
</div>

`,
  styleUrls: []
})
export class AppComponent {
  readonly medialist$: Observable<IMediaList>;
  constructor(private mediaListService: MediaListService) {
    this.medialist$ = this.mediaListService.getMedias();
  }

}
