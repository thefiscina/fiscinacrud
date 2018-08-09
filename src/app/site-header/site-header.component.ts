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
