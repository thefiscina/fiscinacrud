import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  Sobre:any;
  Cabecalho:any;

  constructor(private _services : RequestService) { }

  ngOnInit() {    
    this.ObterdadosSobre();
    this.ObterdadosSobre();
  }

  ObterdadosSobre(){
    this._services.getDadosSobreService().then((result) => {             
      this.Sobre = result["result"][0];
      console.log(this.Sobre); 
    }, (err) => {   
      console.log('erro ao solicitar');   
    });  
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
