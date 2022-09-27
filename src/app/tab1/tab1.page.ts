import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  valor1="";
  valor2="";
  resultado="";
  conta= "";

  constructor(private alertController: AlertController) {}

  async alertaSoma() {
    this.conta="Soma";
    this.resultado=(parseFloat(this.valor1) + parseFloat(this.valor2)).toString();
    const alert = await this.alertController.create({
      header: 'Resultado:',
      message: `<strong>Valor 1: ${this.valor1} </strong><br>
      <strong>Valor 2: ${this.valor2}</strong><br>
      <strong>Resultado: ${this.resultado}<br></strong>`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertaSubtracao() {

    this.resultado=(parseFloat(this.valor1) - parseFloat(this.valor2)).toString();
    this.conta="Subtração";
    const alert = await this.alertController.create({
      header: 'Resultado:',
      message: `<strong>Valor 1: ${this.valor1} </strong><br>
      <strong>Valor 2: ${this.valor2}</strong><br>
      <strong>Resultado: ${this.resultado}<br></strong>`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertaDivisao() {
    this.conta="Divisão";
    this.resultado=(parseFloat(this.valor1) / parseFloat(this.valor2)).toString();
    const alert = await this.alertController.create({
      header: 'Resultado:',
      message: `<strong>Valor 1: ${this.valor1} </strong><br>
      <strong>Valor 2: ${this.valor2}</strong><br>
      <strong>Resultado: ${this.resultado}<br></strong>`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertaMultiplicacao() {
    this.conta="Multiplicação";
    this.resultado=(parseFloat(this.valor1) * parseFloat(this.valor2)).toString();
    const alert = await this.alertController.create({
      header: 'Resultado:',
      message: `<strong>Valor 1: ${this.valor1} </strong><br>
      <strong>Valor 2: ${this.valor2}</strong><br>
      <strong>Resultado: ${this.resultado}<br></strong>`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  calcularMenor(){
    if (parseFloat(this.valor1) < (parseFloat(this.valor2))){
      this.resultado = `O menor número é ${this.valor1}`
    }else if (parseFloat(this.valor1) > (parseFloat(this.valor2))){
      this.resultado = `O maior número é ${this.valor2}`
    }else if (parseFloat(this.valor1) == (parseFloat(this.valor2))){
      this.resultado="Ambos são iguais!"
    };
  }

  calcularMaior(){
    if (parseFloat(this.valor1) > (parseFloat(this.valor2))){
      this.resultado = `O maior número é ${this.valor1}`
    }else if (parseFloat(this.valor1) < (parseFloat(this.valor2))){
      this.resultado = `O maior número é ${this.valor2}`
    }else if (parseFloat(this.valor1) == (parseFloat(this.valor2))){
      this.resultado="Ambos são iguais!"
    };
  }

  async alertaMaior() {
    this.calcularMaior();
    this.conta="Maior";
    const alert = await this.alertController.create({
      header: `${this.resultado}`
    });
    await alert.present();
  }

  async alertaMenor() {
    this.calcularMenor();
    this.conta="Menor";
    const alert = await this.alertController.create({
      header: `${this.resultado}`
    });
    await alert.present();
  }
  async limpar() {
    this.valor1="";
    this.valor2="";
    this.resultado="";
    this.conta="";
  }

}


