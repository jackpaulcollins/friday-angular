import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PublicFeedComponent } from './public-feed/public-feed.component'

const appRoutes: Routes = [
  {
     path: '',
     component: HomepageComponent
   },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
