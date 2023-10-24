import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { Iconductor } from '../interfaces/interfaces';

@Component({
  selector: 'app-registro-c',
  templateUrl: './registro-c.page.html',
  styleUrls: ['./registro-c.page.scss'],
})
export class RegistroCPage implements OnInit {

  newConductor: Iconductor={
    nombre:'',
    password:'',
    patente:'',
    sede:'',
    jornada:'',
    email:'',
  }


  constructor(private apiService: ApiService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  crearConductor(){
    this.apiService.CrearConductor(this.newConductor).subscribe();
    this.router.navigateByUrl("/listar");
  }




    
    

  }

