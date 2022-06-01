import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//shift+alt+baixo copia a linha selecionada e cola embaixo
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './core/material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    //adicionando o componente de heroDetailComponent
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    FlexLayoutModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
