import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Sobre Nosotros',
      icon: 'help-outline',
      redirecTo:'/info'
    },
    {
      name:'Cerrar sesión',
      icon: 'exit-outline',
      redirecTo:'/login'
    }
  ]
conductores: any;

  constructor() {}
}
