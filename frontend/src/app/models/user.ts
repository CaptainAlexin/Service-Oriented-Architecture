export class User {

  constructor (_id = '', nombre = '', email = '',password = '', rol = '' ){
    this._id = _id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.rol = rol;

  }

  _id: String;
  nombre: String;
  email: String;
  password: String;
  rol: String;

}
