import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessagesComponent } from './components/messages/messages.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { PageNotFoundComponent } from './components/page-not-found.component';

const COMPONENTS = [MessagesComponent, ToolbarComponent, PageNotFoundComponent];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS, PageNotFoundComponent],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
})
//Criação de uma variavel chamada parentmodel uma chamada Optional e outra chamada SkipSelf
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule.'
      );
    }
  }

}
