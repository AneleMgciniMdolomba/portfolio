import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavigationModule } from '@ui/navigation/navigation.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
