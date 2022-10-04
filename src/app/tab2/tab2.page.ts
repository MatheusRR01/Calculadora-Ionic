import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  operacao='';
  resultado='';

  constructor() {}

  adicionarValor(valor: any){
    if(valor==0 || valor== 1 || valor==2 || valor==3 || valor==4 || valor==5 || valor==6 || valor==7 || valor==8 || valor==9){
      this.operacao += valor;
    }else if(this.operacao == '' || this.operacao != '*' || this.operacao != '/' || this.operacao != '+' || this.operacao != '-'){
      this.operacao += valor; 
    }
  }

  limparC(){
    this.operacao ='';
    this.resultado ='';
  }

  limparCE(){
    this.operacao ='';
  }

  apagarCaracter(){
    if(this.operacao.length > 0){
      this.operacao = this.operacao.substring(0, this.operacao.length -1);
    }
  }

}
