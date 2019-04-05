import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { HomepageComponent } from './homepage/homepage.component'

const appRoutes: Routes = [
  {
     path: '',
     component: HomepageComponent
   } ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
