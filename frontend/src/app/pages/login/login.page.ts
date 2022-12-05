import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {}

  constructor(
    private authService: AuthService,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user)
      .subscribe(
        res => {
          console.log(res);
          if (res.rol== "admin"){
            alert("Modo Admin")
            this.router.navigate(['/admin'])

          }else{

            this.router.navigate(['/inicio'])
          }

          localStorage.setItem('token', res.token);

        },
        err => {
          console.log(err)
        }
      )

  }



}
