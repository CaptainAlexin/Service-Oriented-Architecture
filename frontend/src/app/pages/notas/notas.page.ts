import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../services/notas.service';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Nota } from 'src/app/models/nota';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
  providers: [NotasService]
})

export class NotasPage implements OnInit {

  constructor(public authService: AuthService,
    public notasService: NotasService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.getNotas();
  }

  async agregarNota (form: NgForm) {
    if (form.value._id){
      this.notasService.putNota(form.value)
        .subscribe(res => {
        })
    }else{
      this.notasService.postNota(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getNotas();
      });
    }

    const toast = await this.toastController.create({
      color: "warning",
      message: 'Nota Agregrada/Editada',
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }

  getNotas (){
    this.notasService.getNotas()
    .subscribe (res => {
      this.notasService.notas = res as Nota[];
      this.getNotas();
    })
  }

  async editNota(nota: Nota){
    this.notasService.selectedNota = nota;
    const toast = await this.toastController.create({
      color: "warning",
      message: 'Editando Nota',
      duration: 5000,
      position: "bottom"
    });

    toast.present();
  }

  async deleteNota(_id: string){
    this.notasService.deleteNota(_id)
      .subscribe (res => {
        console.log(res)
      });
      const toast = await this.toastController.create({
        color: "warning",
        message: 'Nota Eliminada',
        duration: 2000,
        position: "bottom"
      });

      toast.present();
  }

  resetForm (form?: NgForm) {
    if (form){
      form.reset();
      this.notasService.selectedNota = new Nota();
    }
  }

}
