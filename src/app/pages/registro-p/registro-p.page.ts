import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.page.html',
  styleUrls: ['./registro-p.page.scss'],
})
export class RegistroPPage implements OnInit {

  pasajero={
    nombre:'',
    sede:'',
    jornada:'',
    email:'',
    password:''
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first')
  }


  async Enviar() {
    const alert = await this.alertController.create({
      header: 'Bienvenido a la comunidad!',
      message: 'Sus datos han sido guardados!',
      buttons: ['OK'],
    });

    await alert.present();

    await new Promise(resolve => setTimeout(resolve, 1000));

    this.router.navigate(['/login']);


  }
}
