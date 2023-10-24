import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata: any;

  usuario={
    id: 1,
    username:"",
    password:"",
    role: "",
    isactive: true,
  }

  loginForm: FormGroup;

  constructor(private authservice: AuthService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private builder: FormBuilder) {
      this.loginForm = this.builder.group({
        'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
        'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
      })
     }


  ngOnInit() {
  }

  login(){
    if (this.loginForm.valid){
      this.authservice.GetConductorById(this.loginForm.value.username).subscribe(resp=>{
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){ 
          this.usuario={            
            id : this.userdata[0].id,
            username: this.userdata[0].username,
            password: this.userdata[0].password,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive,
          }
          if (this.usuario.password===this.loginForm.value.password){
            if (this.usuario.isactive){
              sessionStorage.setItem('username', this.usuario.username);
              sessionStorage.setItem('userrole', this.usuario.role);
              sessionStorage.setItem('Ingresado', 'true');
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/inicio");
            }
            else{
              this.UserInactivo();
              this.loginForm.reset();
            }
          }
          else{
            this.DatoError();
            this.loginForm.reset();
          }
        }
        else{
          this.NoExiste();
          this.loginForm.reset();
        }
      })
    }
    }
  async showToast(msg: any){
    const toast= await this.toastController.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  async UserInactivo(){
    const alerta = await this.alertController.create({
      header: "Error..",
      message: 'Usuario inactivo, contactar a admin@admin.cl',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }

  async DatoError(){
    const alerta = await this.alertController.create({
      header: "Error..",
      message: 'Revise sus credenciales',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }

  async NoExiste(){
    const alerta = await this.alertController.create({
      header: "Debe registrarse..",
      message: 'El usuario no existe',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }


  goToRegistroCPage() {
  this.router.navigate(['/registro-c']);
  }

  goToRegistroPPage() {
  this.router.navigate(['/registro-p']);
  }

}
