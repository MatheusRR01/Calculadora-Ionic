import { Component, OnInit } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  operacao='';
  resultado='';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '+', '-'];

  constructor() {}

  realizarOperacao(){
    try{
      this.resultado = evaluate(this.operacao);
    }catch (err) {
      this.resultado = 'Inválido!';
    }
    
  }

  adicionarValor(valor: string){
    this.caracter = this.caracteres.includes(valor); // 'includes' é uma função do javascript que determina se um array inclue um certo elemento, retornando true ou false

    if(!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero){
      this.operacao += valor;
      this.numero = false;
    }
  }

  limparC(){
    this.operacao ='';
    this.resultado ='';
    this.numero = false;
  }

  limparCE(){
    this.operacao ='';
    this.numero = false;
  }

  apagarCaracter(){
    if(this.operacao.length > 0){
      this.operacao = this.operacao.substring(0, this.operacao.length -1);
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1); 
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);

    if(!this.caracter){
      this.numero = true;
    } else {
      this.numero = false;
    }
  }

}
