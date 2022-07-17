import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatemodalPage } from '../datemodal/datemodal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {}

  async openModal(expandable = false) {
    const modal = await this.modalCtrl.create({
      component: DatemodalPage,
      // breakpoints: expandable ? [ 0.9, 1] : [0.9],
      initialBreakpoint: 0.9,
    });
    await modal.present();
  }

}
