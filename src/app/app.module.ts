import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { BoxesComponent } from './boxes/boxes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { TimeComponent } from './time/time.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';

import { SwiperModule, SwiperDirective } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SiteHeaderComponent,
    HeroSliderComponent,
    BoxesComponent,
    WelcomeComponent,
    HomeEventsComponent,
    ProjetosComponent,
    TimeComponent      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatProgressBarModule    
  ],
  providers: [RequestService, SwiperDirective, {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
