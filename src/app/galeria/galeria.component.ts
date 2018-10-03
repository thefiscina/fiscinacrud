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
  {url:'data:image/jpeg;base64,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', img:1}, {url:'/src/assets/img/original/6.jpg', img:1}, {url:'/src/assets/img/original/1.jpg', img:1}, 
  {url:'http://4.bp.blogspot.com/_dedcXqzPdxo/TOwmmiz7ZZI/AAAAAAAABI8/4v5kfZ-dog0/s1600/cute_funny_animals_2.jpg', img:1}, {url:'http://1.bp.blogspot.com/-HdU303R22Wg/T-IINeiUs_I/AAAAAAAAA5E/5K82-b0PJbs/s1600/12914451T0J50-H4a.jpg', img:1}, {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFx2QbrEPfAPEiz1BF1r9o8R_69Rzw1LNobGId7ott_pEFvk2', img:1}, 
  {url:'http://www.rantlifestyle.com/wp-content/uploads/2014/07/011.jpg', img:1}, {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoOcsyGpTr30zhUT2ksxr9Bm4mSCmL5Ot13Ft7b8k2GM2zzU1', img:1}, {url:'https://suburp.files.wordpress.com/2011/01/capt-fb62a2aed99147aaaecc0aa62ebc1568-fb62a2aed99147aaaecc0aa62ebc1568-0.jpg', img:1}, 
  {url:'https://www.randomlists.com/img/animals/ferret.jpg', img:1}, {url:'http://4.bp.blogspot.com/_dedcXqzPdxo/TOwmmiz7ZZI/AAAAAAAABI8/4v5kfZ-dog0/s1600/cute_funny_animals_2.jpg', img:1}, {url:'http://4.bp.blogspot.com/_dedcXqzPdxo/TOwmmiz7ZZI/AAAAAAAABI8/4v5kfZ-dog0/s1600/cute_funny_animals_2.jpg', img:1},
  {url:'https://cdn.images.express.co.uk/img/dynamic/11/590x/ferret-379389.jpg', img:1}, {url:'http://4.bp.blogspot.com/_dedcXqzPdxo/TOwmmiz7ZZI/AAAAAAAABI8/4v5kfZ-dog0/s1600/cute_funny_animals_2.jpg', img:1}, {url:'http://4.bp.blogspot.com/_dedcXqzPdxo/TOwmmiz7ZZI/AAAAAAAABI8/4v5kfZ-dog0/s1600/cute_funny_animals_2.jpg', img:1}, 
  {url:'http://4.bp.blogspot.com/_dedcXqzPdxo/TOwmmiz7ZZI/AAAAAAAABI8/4v5kfZ-dog0/s1600/cute_funny_animals_2.jpg', img:1}, {url:'http://1.bp.blogspot.com/-HdU303R22Wg/T-IINeiUs_I/AAAAAAAAA5E/5K82-b0PJbs/s1600/12914451T0J50-H4a.jpg', img:1}, {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFx2QbrEPfAPEiz1BF1r9o8R_69Rzw1LNobGId7ott_pEFvk2', img:1}, 
  {url:'https://www.randomlists.com/img/animals/ferret.jpg', img:1}, {url:'http://4.bp.blogspot.com/_dedcXqzPdxo/TOwmmiz7ZZI/AAAAAAAABI8/4v5kfZ-dog0/s1600/cute_funny_animals_2.jpg', img:1}, {url:'http://4.bp.blogspot.com/_dedcXqzPdxo/TOwmmiz7ZZI/AAAAAAAABI8/4v5kfZ-dog0/s1600/cute_funny_animals_2.jpg', img:1},
  {url:'http://www.rantlifestyle.com/wp-content/uploads/2014/07/011.jpg', img:1}, {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoOcsyGpTr30zhUT2ksxr9Bm4mSCmL5Ot13Ft7b8k2GM2zzU1', img:1}, {url:'https://suburp.files.wordpress.com/2011/01/capt-fb62a2aed99147aaaecc0aa62ebc1568-fb62a2aed99147aaaecc0aa62ebc1568-0.jpg', img:1}, 
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
