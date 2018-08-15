import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent implements OnInit {
  Cabecalho:any;
  constructor(private _services : RequestService) { }

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    speed:2000,
    autoplay:true,    
    loop:true    
  };

  ngOnInit() {
    this.Obterdadoscabecalho();
  }

  Obterdadoscabecalho(){
    this._services.getDadoscabecalhoService().then((result) => {             
      this.Cabecalho = result["result"][0];
      console.log(this.Cabecalho); 
    }, (err) => {   
      console.log('erro ao solicitar');   
    });  
  }
}
