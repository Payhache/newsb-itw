import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaComponent } from './media.component';
import { MediaListService } from './services/media-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MediaListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
