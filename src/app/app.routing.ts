import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';

const appRoutes: Routes = [
  {
     path: '',
     component: ProfileFeedComponent
   } ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
