import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  Projetos: any;
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  timer;
  end: any;
  now: any;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 2000,
    autoplay: true,
    loop: true,

  };

  constructor(private _services: RequestService) { }

  ngOnInit() {
    this.ObterdadosProjetos();
  }

  ObterdadosProjetos() {
    this._services.getProjetosService().then((result) => {
      this.contarDiasrestantes(result["result"])
      console.log(this.Projetos);
    }, (err) => {
      console.log('erro ao solicitar');
    });
  }

  contarDiasrestantes(Projetos) {
    this.Projetos = [];
    Projetos.forEach(value => {
      this.end = new Date(value.data_hora);
      value = this.showRemaining(value);
      this.Projetos.push(value);
    })
    
  }

  showRemaining(Projeto) {
    this.now = new Date();
    var distance = (this.end - this.now);
    if (distance < 0) {
      Projeto.tempoRestante = 0 + " Dias";    
      Projeto.porcentagem = 100;
      return Projeto;
    }
    var days = Math.floor(distance / this._day);
    var hours = Math.floor((distance % this._day) / this._hour);
    var minutes = Math.floor((distance % this._hour) / this._minute);
    var seconds = Math.floor((distance % this._minute) / this._second);
    Projeto.tempoRestante = days + " Dias";       
    Projeto.porcentagem = 100 - days;
    return Projeto;
  }

}
