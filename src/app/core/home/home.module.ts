import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageModule } from '@shared/components/image/image.module';

const routes: Routes = [
  {path: '', component: HomeComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ImageModule
  ],
  exports: [ RouterModule ]
})
export class HomeModule { }
