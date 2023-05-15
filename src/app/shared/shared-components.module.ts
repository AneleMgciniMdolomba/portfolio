import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from './components/image/image.module';
import { ResourceNotFoundModule } from './resource-not-found/resource-not-found.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ ImageModule, ResourceNotFoundModule ]
})
export class SharedComponentsModule { }
