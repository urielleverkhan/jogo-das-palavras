import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() image: string = ""; 
  @Input() texto: string = "";
  @Output() palavraEscrita = new EventEmitter();
  palavra: string = "";
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.form = new FormGroup({
      palavra: new FormControl('', Validators.required)
    })
  }

  avaliarPalavraDigitada(){
    this.palavra = this.form.value.palavra;
  }

  situacaoPalavra(): string{
    let arr = this.texto.toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "").split('');
    let inputArr = this.palavra.split('');
    let letraAtualInput = '';
    let letraAtualTexto = '';
    let palavraAtualInput = this.palavra.toString();
    let palavraAtualTexto = [];
    for(let i=0; i<inputArr.length; i++){
      palavraAtualTexto.push(arr[i]).toString();
    }
    for(let i=0; i<inputArr.length; i++){
      letraAtualInput = inputArr[i];
    }
    for(let i=0; i<arr.length; i++){
      letraAtualTexto = arr[inputArr.length-1];
    }
    this.palavraEscrita.emit(palavraAtualInput);
    if(letraAtualTexto === letraAtualInput && palavraAtualTexto.toString().replace(/[,]/g, '') === palavraAtualInput || letraAtualInput === ''){
      return "correto"
    }else{
      return "errado"
    }
    
  }
}
