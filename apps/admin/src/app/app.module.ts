import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AdminApiModule } from '@ngx-conference/admin-api'
import { AdminAuthModule } from '@ngx-conference/admin-auth'
import { AdminCoreModule } from '@ngx-conference/admin-core'

import { AppStateModule } from './app-state.module'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppStateModule,

    AdminApiModule,
    AdminAuthModule,
    AdminCoreModule,

    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
