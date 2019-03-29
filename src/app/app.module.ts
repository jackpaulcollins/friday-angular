import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageProfileTileComponent } from './home-page-profile-tile/home-page-profile-tile.component';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageProfileTileComponent,
    ProfileFeedComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
