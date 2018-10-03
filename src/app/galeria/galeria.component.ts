import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['../../../node_modules/ng-masonry-grid/ng-masonry-grid.css', 
  './galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  Img:any;
  masonryItems =[
  {url:'/src/assets/img/original/5.jpg', img:1}, {url:'/src/assets/img/original/6.jpg', img:1}, {url:'/src/assets/img/original/1.jpg', img:1}, 
  {url:'/src/assets/img/original/7.jpg', img:1}, {url:'/src/assets/img/original/5.jpg', img:1}, {url:'/src/assets/img/original/7.jpg', img:1}, 
  {url:'/src/assets/img/original/5.jpg', img:1}, {url:'/src/assets/img/original/6.jpg', img:1}, {url:'/src/assets/img/original/1.jpg', img:1}, 
  {url:'/src/assets/img/original/7.jpg', img:1}, {url:'/src/assets/img/original/5.jpg', img:1}, {url:'/src/assets/img/original/7.jpg', img:1},
  {url:'/src/assets/img/original/5.jpg', img:1}, {url:'/src/assets/img/original/6.jpg', img:1}, {url:'/src/assets/img/original/1.jpg', img:1}, 
  {url:'/src/assets/img/original/7.jpg', img:1}, {url:'/src/assets/img/original/5.jpg', img:1}, {url:'/src/assets/img/original/7.jpg', img:1},
  {url:'/src/assets/img/original/5.jpg', img:1}, {url:'/src/assets/img/original/6.jpg', img:1}, {url:'/src/assets/img/original/1.jpg', img:1}, 
  {url:'/src/assets/img/original/7.jpg', img:1}, {url:'/src/assets/img/original/5.jpg', img:1}, {url:'/src/assets/img/original/7.jpg', img:1}
];

  constructor() { }

  ngOnInit() {
  }
  AbrirImagem(evento){    
      console.log(evento.currentTarget.childNodes[0].src);
      this.Img = evento.currentTarget.childNodes[0].src;
      document.getElementById('myModal').style.display = "block";
      document.getElementById('menuHeader').style.display = "none";
  }

  closeModal(){
        this.Img = "";
        document.getElementById('menuHeader').style.display = "block";
      document.getElementById('myModal').style.display = "none";
  }
}
