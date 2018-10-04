import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['../../../node_modules/ng-masonry-grid/ng-masonry-grid.css', 
  './galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  Img:any;
  Titulo:any;
  descricao:any;
  masonryItems =[];

  constructor(private _services: RequestService) { }

  ngOnInit() {
    this.ObterdadosGaleria();
  }

  ObterdadosGaleria() {
    this._services.getGaleriaService().then((result) => {
      this.masonryItems = result["result"];      
    }, (err) => {
      console.log('erro ao solicitar');
    });
  }


  AbrirImagem(item){          
      this.Img = item.foto64;
      this.Titulo = item.titulo;
      this.descricao = item.descricao;
      document.getElementById('myModal').style.display = "block";
      document.getElementById('menuHeader').style.display = "none";
  }

  closeModal(){
        this.Img = "";
        this.Titulo = "";
      this.descricao = "";
        document.getElementById('menuHeader').style.display = "block";
      document.getElementById('myModal').style.display = "none";
  }
}
