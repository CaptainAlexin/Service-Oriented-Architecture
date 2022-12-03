import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor( private http: HttpClient,
    private router: Router,
    public toastController: ToastController) { }

  registros(user){
    return this.http.post<any>(this.URL + '/registro', user);
  }

  login(user){
    return this.http.post<any>(this.URL + '/login', user);
  }

  logeado(){
    return !!localStorage.getItem('token');

  }

  getToken(){
    return localStorage.getItem('token');
  }

  async logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    const toast = await this.toastController.create({
      color: "warning",
      message: 'Sesión Cerrada',
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }

}
