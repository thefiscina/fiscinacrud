import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.css']
})
export class HomeEventsComponent implements OnInit {
  Eventos:any;
  Cabecalho:any;
  EventosFuturos=[];
  EventoAtual:any;
  constructor(private _services : RequestService) { }

  ngOnInit() {    
    this.ObterdadosSobre();    
  }

  ObterdadosSobre(){
    this._services.getEventosService().then((result) => {             
      this.Eventos = result["result"];
      console.log(this.Eventos); 
      this.separarEventoAtual(this.Eventos);
    }, (err) => {   
      console.log('erro ao solicitar');   
    });  
  }
  
  separarEventoAtual(eventos){    
    eventos.forEach(value => {
      console.log(value);
      var d = new Date(value.data_hora)
      var hora = parseInt(value.hora.split(':')[0]);
      var min = parseInt(value.hora.split(':')[1]);
      d.setHours(hora,min)
      value.datacerta = d;
      this.EventosFuturos.push(value);
    });        
    console.log(this.EventosFuturos);
    this.EventoAtual =  this.EventosFuturos.sort((a,b) => a.datacerta - b.datacerta)[0];
     this.EventosFuturos.sort((a,b) => a.datacerta - b.datacerta).shift();
    this.Eventos =  this.EventosFuturos.sort((a,b) => a.datacerta - b.datacerta);

  }

}
