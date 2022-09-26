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
      this.resultado = this.valor1
    }else if (parseFloat(this.valor1) > (parseFloat(this.valor2))){
      this.resultado = this.valor2
    }else if (parseFloat(this.valor1) == (parseFloat(this.valor2))){
      this.resultado="Ambos são iguais!"
    };

  }

  calcularMaior(){
    if (parseFloat(this.valor1) > (parseFloat(this.valor2))){
      this.resultado = this.valor1
    }else if (parseFloat(this.valor1) < (parseFloat(this.valor2))){
      this.resultado = this.valor2
    }else if (parseFloat(this.valor1) == (parseFloat(this.valor2))){
      this.resultado="Ambos são iguais!"
    };

  }

  async alertaMaior() {
    this.calcularMaior();
    const alert = await this.alertController.create({
      header: `${this.resultado}`
    });
    await alert.present();
    
  }

  async alertaMenor() {
    this.calcularMenor();
    const alert = await this.alertController.create({
      header: `${this.resultado}`
    });
    await alert.present();
    
  }
  
}


