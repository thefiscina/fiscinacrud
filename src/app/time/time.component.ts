import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    speed:2000,    
    loop:true    
  };
  constructor() { }

  ngOnInit() {
  }

}
