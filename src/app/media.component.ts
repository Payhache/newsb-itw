import { Component, Input } from '@angular/core';
import { IMedia } from './model/IMedia';

@Component({
  selector: 'app-media',
  template: `
    <h1> {{media.basename}} </h1>
    <p> Date du média : {{media.created_at | date: 'M/d/yy'}} </p>
    <p *ngIf="media.type === 'video'"> Durée : {{media.duration || "n/c" | number: '3.0-2'}} min</p>
    <p *ngIf="media.type !== 'video'"> Type de média : {{media.type}}</p>
  `,
  styles: [
    ` host: {
        margin-top: 2rem;
      }
    `
  ]
})
export class MediaComponent {
 @Input() media!: IMedia;
}
