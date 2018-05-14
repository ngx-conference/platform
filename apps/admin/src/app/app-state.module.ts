import { NgModule } from '@angular/core'

import { UiState } from '@ngx-conference/admin-ui'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'

import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'

import { NgxsModule } from '@ngxs/store'
import { environment } from '../environments/environment'

@NgModule({
  imports: [
    NgxsModule.forRoot([UiState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsStoragePluginModule.forRoot(),
  ],
})
export class AppStateModule {}
