import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AdminApiModule } from '@ngx-conference/admin-api'
import { AdminAuthModule } from '@ngx-conference/admin-auth'
import { AdminSharedModule } from '@ngx-conference/admin-shared'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AdminApiModule,
    AdminAuthModule,
    AdminSharedModule,

    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
