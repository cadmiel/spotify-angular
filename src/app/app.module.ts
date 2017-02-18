import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApiSpotifyService } from './service/api-spotify.service';
import { RouterModule }   from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    ArtistComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'artist/:id',
        component: ArtistComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [ApiSpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
