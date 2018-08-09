import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  Servico:any;
  constructor(private _services : RequestService) { }

  ngOnInit() {    
    this._services.getService().then((result) => {             
      this.Servico = result["result"];
      console.log(this.Servico); 
    }, (err) => {   
      console.log('erro ao solicitar');   
    });   
  }
}
