import { Component, OnInit } from '@angular/core';
import { RecuerdosService } from '../../services/recuerdos.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Recuerdo } from 'src/app/models/recuerdo';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-recuerdos',
  templateUrl: './recuerdos.page.html',
  styleUrls: ['./recuerdos.page.scss'],
})
export class RecuerdosPage implements OnInit {

  constructor(public authService: AuthService,
    public recuerdosService: RecuerdosService,
    public toastController: ToastController) {
  }

  ngOnInit() {
    this.getRecuerdos();
  }

  getRecuerdos (){
    this.recuerdosService.getRecuerdos()
    .subscribe (res => {
      this.recuerdosService.recuerdos = res as Recuerdo[];
      this.getRecuerdos();
    })
  }

  async agregarRecuerdo (form: NgForm) {
    if (form.value._id){
      this.recuerdosService.putRecuerdo(form.value)
        .subscribe(res => {
        })

    }else{
      this.recuerdosService.postRecuerdo(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getRecuerdos();
      });
    }
    const toast = await this.toastController.create({
      color: "warning",
      message: 'Recuerdo Agregrado/Editado',
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }

  async editRecuerdo(recuerdo: Recuerdo){
    this.recuerdosService.selectedRecuerdo = recuerdo;
    const toast = await this.toastController.create({
      color: "warning",
      message: 'Editando Recuerdo',
      duration: 5000,
      position: "bottom"
    });

    toast.present();
  }

  async deleteRecuerdo(_id: string){
    this.recuerdosService.deleteRecuerdo(_id)
      .subscribe (res => {
        console.log(res)
      })
      const toast = await this.toastController.create({
        color: "warning",
        message: 'Recuerdo Eliminado',
        duration: 2000,
        position: "bottom"
      });

      toast.present();
  }

  resetForm (form?: NgForm) {
    if (form){
      form.reset();
      this.recuerdosService.selectedRecuerdo = new Recuerdo();
    }
  }

  async presentToast1(){

  }
}
