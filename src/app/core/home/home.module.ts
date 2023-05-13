import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from '@ui/ui.components.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiComponentsModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
