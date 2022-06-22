import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//shift+alt+baixo copia a linha selecionada e cola embaixo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module'




@NgModule({
  declarations: [AppComponent,],
  imports: [
    //@angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    //feature
    DashboardModule,
    HeroesModule,
  //app
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
