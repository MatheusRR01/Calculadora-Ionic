import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { evaluate, number } from 'mathjs';
import { IMemoria } from '../Models/IMemoria.model';
import { ModalController } from '@ionic/angular';
import { MemoriaModalPage } from '../utils/memoria-modal/memoria-modal.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '+', '-'];

  memoria: IMemoria[] = [];

  constructor(private alertController: AlertController, private modalCtrl: ModalController) { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MemoriaModalPage,
      componentProps:{
        memoria: this.memoria,
      },
    });
    modal.present();
  }

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  adicionarMemoria() {
    if (this.operacao != '' && this.resultado != '') {
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado)
      };
      this.memoria.push(memoria);
    } else if (this.operacao != '' && this.resultado == '') {
      this.realizarOperacao();

      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado)
      };
      this.memoria.push(memoria);
    } else {
      this.presentAlert('Atenção!', 'Não há nada para salvar!');
    }
    console.log(this.memoria)
  }

  realizarOperacao() {
    try {
      this.resultado = evaluate(this.operacao);
    } catch (err) {
      this.resultado = 'Inválido!';
    }

  }

  adicionarValor(valor: string) {
    this.caracter = this.caracteres.includes(valor); // 'includes' é uma função do javascript que determina se um array inclue um certo elemento, retornando true ou false

    if (!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }
  }

  limparC() {
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  limparCE() {
    this.operacao = '';
    this.numero = false;
  }

  apagarCaracter() {
    if (this.operacao.length > 0) {
      this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1);
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);

    if (!this.caracter) {
      this.numero = true;
    } else {
      this.numero = false;
    }
  }

  limpaMemoria() {
    this.memoria = [];
  }

  mostrarMemoria() {
    const memoria: IMemoria = this.memoria[this.memoria.length - 1];
    this.operacao = memoria.operacao;
    this.resultado = memoria.resultado.toString();
    console.log('Mostrou: ', this.memoria);
  }

  somaMemoria() {
    if (this.operacao != '') {
      this.realizarOperacao();
      const memoria: IMemoria = this.memoria[this.memoria.length - 1];
      const novaMemoria: IMemoria = {
        operacao: ` ${memoria.resultado} + ${this.resultado}`,
        resultado: memoria.resultado + Number(this.resultado),
      };
      this.memoria.push(novaMemoria);
    }
  }

  subtrairMemoria() {
    if (this.operacao != '') {
      this.realizarOperacao();
      const memoria: IMemoria = this.memoria[this.memoria.length - 1];
      const novaMemoria: IMemoria = {
        operacao: ` ${memoria.resultado} - ${this.resultado}`,
        resultado: memoria.resultado - Number(this.resultado),
      };
      this.memoria.push(novaMemoria);
    }
  }

  

}
