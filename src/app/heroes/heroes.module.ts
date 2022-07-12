
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [HeroesComponent,HeroDetailComponent],
  imports: [CommonModule,FlexLayoutModule,MaterialModule,FormsModule,HeroesRoutingModule],
})
export class HeroesModule { }
