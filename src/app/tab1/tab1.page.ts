import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  valor1=" ";
  valor2=" ";
  Resultado=" ";

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Resultado:',
      message: `<strong>Valor 1: ${this.valor1} </strong><br>
      <strong>Valor 2: ${this.valor2}</strong><br>
      <strong>Resultado: ${this.Resultado}<br></strong>`,
      buttons: ['OK'],
    });
    await alert.present();
  }
  async Limpar() {

  }
}
