import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceNotFoundComponent } from '@shared/resource-not-found/resource-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home', loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about', loadChildren: () => import('./core/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'blog', loadChildren: () => import('./core/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'skills', loadChildren: () => import('./core/skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: 'projects', loadChildren: () => import('./core/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'contact', loadChildren: () => import('./core/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**', component: ResourceNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
