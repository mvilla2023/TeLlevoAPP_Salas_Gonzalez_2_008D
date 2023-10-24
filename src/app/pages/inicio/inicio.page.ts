import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
conductores: any;

  
  constructor(private menuController: MenuController,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first')
  }

  onlogout() {
    this.router.navigate(['/login'])
  }

}
