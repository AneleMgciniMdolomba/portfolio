import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponentsModule } from '@ui/ui.components.module';
import { ResourceNotFoundModule } from '@shared/resource-not-found/resource-not-found.module';
import { SharedComponentsModule } from '@shared/shared-components.module';
import { SocialModule } from '@shared/components/social/social.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiComponentsModule,
    ResourceNotFoundModule,
    SharedComponentsModule,
    SocialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
