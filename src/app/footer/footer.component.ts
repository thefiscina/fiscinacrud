import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Servico:any;
  constructor(private _services : RequestService) { }

  ngOnInit() {    
    this.ObterdadosSobre();    
  }
  ObterdadosSobre(){
    this._services.getService().then((result) => {             
      this.Servico = result["result"];      
    }, (err) => {   
      console.log('erro ao solicitar');   
    });  
  }
}
