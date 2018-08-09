import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    HttpClientModule    
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
