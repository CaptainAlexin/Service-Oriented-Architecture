export class Recuerdo {

  constructor (_id = '', titulo = '',descrp = '', img = ''){
    this._id = _id;
    this.tituloRecu = titulo;
    this.descRecu = descrp;
    this.imgRecu = img;
  }

  _id: String;
  tituloRecu: String;
  descRecu: String;
  imgRecu: String;
}
