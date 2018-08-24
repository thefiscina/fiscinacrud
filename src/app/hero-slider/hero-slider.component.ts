import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RequestService } from '../request.service';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent implements OnInit {
  Cabecalho: any;
  @ViewChild("swiper") swiper: SwiperComponent;
  constructor(private _services: RequestService) { }

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    observer: true,
    slidesPerView: 1,
    speed: 4000,
    autoplay: true,
    threshold: 90,
    centeredSlides: true
  };

  ngOnInit() {
    this.Obterdadoscabecalho();
  }

  Obterdadoscabecalho() {
    this._services.getDadoscabecalhoService().then((result) => {
      this.Cabecalho = result["result"][0];
    }, (err) => {
      console.log('erro ao solicitar');
    });
  }
  onIndexChange(evento) {    
    if(evento == 0){
      setTimeout(() => {  
        this.swiper.directiveRef.startAutoplay();        
      }, 5000);     
    }
    if (evento == 2) {
      setTimeout(() => {  
        this.swiper.directiveRef.stopAutoplay(true);        
      }, 5000);
    }        
  }

  resume(evento) {    
    this.swiper.directiveRef.startAutoplay();    
  }


}
