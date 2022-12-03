export class Nota {

  constructor (_id = '', titulo = '', img = ''){
    this._id = _id;
    this.titulo = titulo;
    this.img = img;
  }

  _id: String;
  titulo: String;
  desc: String;
  img: String;
}
