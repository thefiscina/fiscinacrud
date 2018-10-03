import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaspageComponent } from './noticiaspage/noticiaspage.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TimerSectionComponent } from './timer-section/timer-section.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },   
  { path: 'noticias', component: NoticiasComponent },  
  { path: 'galeria', component: GaleriaComponent },  
  { path: '**', component: HomeComponent }
];

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
    TimeComponent,
    HomeComponent,
    NoticiasComponent,
    NoticiaspageComponent,
    GaleriaComponent,
    TimerSectionComponent      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    NgMasonryGridModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )    
  ],
  providers: [RequestService, SwiperDirective, {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
