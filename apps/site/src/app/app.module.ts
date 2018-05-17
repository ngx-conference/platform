import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { SiteApiModule } from '@ngx-conference/site-api'
import { SiteUiModule } from '@ngx-conference/site-ui'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule, AppRoutingModule, SiteApiModule, SiteUiModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
