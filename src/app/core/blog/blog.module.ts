import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: BlogComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class BlogModule { }
