import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public valor1: number;
  public valor2: number;
  public resultado: number;

  constructor(private alertController: AlertController) {}

  async alertaSoma() {
    this.resultado= this.valor1 + this.valor2;
    const alert = await this.alertController.create({
      header: 'Resultado:',
      message: `<strong>Valor 1: ${this.valor1} </strong><br>
      <strong>Valor 2: ${this.valor2}</strong><br>
      <strong>Resultado: ${this.resultado}<br></strong>`,
      buttons: ['OK'],
    });
    await alert.present();
  }
  async limpar() {

  }
}
