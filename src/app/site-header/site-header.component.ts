import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  
  Servico:any;
  Cabecalho:any;
  constructor(private _services : RequestService) { }

  ngOnInit() {    
    this.ObterdadosSobre();
    this.Obterdadoscabecalho();
  }
  ObterdadosSobre(){
    this._services.getService().then((result) => {             
      this.Servico = result["result"];
    
    }, (err) => {   
      console.log('erro ao solicitar');   
    });  
  }


  Obterdadoscabecalho(){
    this._services.getDadoscabecalhoService().then((result) => {             
      this.Cabecalho = result["result"][0];
      
    }, (err) => {   
      console.log('erro ao solicitar');   
    });  
  }
}
