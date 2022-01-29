import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagComponent } from 'src/shared/components/tag/tag.component';
import { Imagens, Palavras } from 'src/shared/interfaces/models';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss']
})
export class FamiliaComponent implements OnInit {
  palavra: string = '';
  imagemCorrente: string = '';
  palavraCorrente: string = '';
  @ViewChild('tag') tag!: TagComponent;
  indice: number = 0;
  rota = '';
  palavras: Palavras = { familia: ["YUNA",
              "MAMÃE", 
              "PAPAI", 
              "JOHN", 
              "LAILA", 
              "TIO OLIVER", 
              "VOVÓ NADIR", 
              "ZACK"],
              frutas: ["BANANA",
              "MAÇA", 
              "MAMÃO", 
              "MELANCIA", 
              "MELÃO", 
              "MORANGO", 
              "PESSEGO", 
              "UVA"],
              animais: ["BURRO",
              "CACHORRO", 
              "CAVALO", 
              "GALINHA", 
              "GATO", 
              "MACACO", 
              "PATO", 
              "PEIXE",
              "PORCO",
              "VACA"] 
            }


  imagens: Imagens = { familia: ["assets/img/familia/yuna.jpg",
                "assets/img/familia/mamae.jpg", 
                "assets/img/familia/papai.JPG", 
                "assets/img/familia/John.JPG",
                "assets/img/familia/laila.JPG",
                "assets/img/familia/tio oliver.jpg",
                "assets/img/familia/vovo nadir.jpg",
                "assets/img/familia/zack.jpg"],
              frutas: ["assets/img/frutas/banana.jpg",
                "assets/img/frutas/maca.jpg", 
                "assets/img/frutas/mamao.jpg", 
                "assets/img/frutas/melancia.jpg",
                "assets/img/frutas/melao.jpg",
                "assets/img/frutas/morango.jpg",
                "assets/img/frutas/pessego.webp",
                "assets/img/frutas/uva.jpg"],
                animais: ["assets/img/animais/burro.jpg",
                "assets/img/animais/cachorro.jpg", 
                "assets/img/animais/cavalo.jpg", 
                "assets/img/animais/galinha.jpg",
                "assets/img/animais/gato.jpg",
                "assets/img/animais/macaco.jfif",
                "assets/img/animais/pato.jpg",
                "assets/img/animais/peixe.jpg",
                "assets/img/animais/porco.jpg",
                "assets/img/animais/vaca.jpg"
              ]
                
              }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.rota = this.router.url.replace("/", "");
  }
  imagenAtual(): string{
  let rota = this.rota
    return this.imagens[`${this.rota}`][this.indice];
  }

  palavraAtual():string{
      return this.palavras[`${this.rota}`][this.indice];
  }

  setaAvancar(){
    let palavraArrumada = this.palavras[`${this.rota}`][this.indice].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "");
    if(this.palavra != palavraArrumada){
      alert("errou")
    }else if(this.indice == undefined){
      this.indice = 0;
    }else{
      this.indice++
      console.log(this.indice? true: false)
      this.tag.form.reset();
    }
  }

  palavraRecebida(valor: string){
    this.palavra = valor;
  }
}
