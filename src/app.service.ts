import { Injectable } from '@nestjs/common';
import { UserModel } from './models/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoModel } from './models/Producto.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserModel)
    private user:Repository<UserModel>,
    @InjectRepository(ProductoModel)
    private producto:Repository<ProductoModel>,
    // private readonly bcryptService: BcryptService,
  ) {}
  // Base de datos
  private listEstudiante = [
    {
      "nombre": "ANGEL FERNANDO",
      "apellido": "AREVALOS GUZMAN",
      "edad": 20,
      "correo": 'angel@gmail.com',
      "celular": "70000777",
      "carrera": "LICENCIATURA EN BIOQUIMICA"
    }
  ];

  public index() {
    return this.user.find();
  }

  public create (data:UserModel):Promise<UserModel> {
    // const mivar = this.user.create(data);
    const { nombre,apellido,celular,edad,correo, password, carrera } = data;
    
      const user = new UserModel();
      user.correo = correo;
      user.nombre = nombre;
      user.apellido = apellido;
      user.celular = celular;
      user.edad = edad;
      user.carrera = carrera;

      const bcrypt = require('bcrypt');
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      user.password = bcrypt.hashSync(password, salt);
      // this.user.save(user);
    return this.user.save(user);
  }

  public findOne(id:number):Promise<UserModel|null> {
    return this.user.findOneBy({id});
  }

  // public edit(id, json) {
  //   this.listEstudiante[id - 1].nombre = json.nombre;
  //   this.listEstudiante[id - 1].apellido = json.apellido;
  //   this.listEstudiante[id - 1].edad = json.edad;
  //   this.listEstudiante[id - 1].correo = json.correo;
  //   this.listEstudiante[id - 1].celular = json.celular;
  //   this.listEstudiante[id - 1].carrera = json.carrera;
  //   return this.listEstudiante[id - 1];
  // }
  public crearProducto(data) {
    return this.producto.save(data);
  }
  public verProductos() {
    return this.producto.find();
  }
  public verProducto(id:number) {
    return this.producto.findOneBy({id});
  }
  public actualizarProducto(id:number,data) {
    return this.producto.update(id, data)
    // return "Producto actualizado";
  }
  public eliminarProducto(id:number) {
    return this.producto.delete(id);
  }
}
