import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IConductores } from '../interfaces/interfaces';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  conductores:IConductores[]=[];

  constructor(private conductorService: ApiService,
              private loadingCtrl : LoadingController) { }

  
  ionViewWillEnter(){
  this.loadConductores();
  }

  async loadConductores(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.conductorService.listarConductores().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.conductores=JSON.parse(listString)
          event?.target.complete();
          console.log(this.conductores);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }
 
}
