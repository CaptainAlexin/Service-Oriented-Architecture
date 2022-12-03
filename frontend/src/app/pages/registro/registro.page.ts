import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user = {
    nombre: '',
    email: '',
    password: ''
  }

  constructor( private authService: AuthService,
    private router: Router,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  registro(){
    this.authService.registros(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',res.token);
          this.router.navigate(['/login']);
        },
        err => console.log(err)

    )
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      color: "warning",
      message: 'Registro Exitoso',
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }

}
