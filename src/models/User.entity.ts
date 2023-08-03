import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id:number

  
  @Column()
  nombre:string
  
  @Column()
  apellido:string
  
  @Column()
  edad:number
  
  @Column()
  correo:string
  
  @Column()
  celular:string
  
  @Column()
  carrera:string
  
  @Column()
  password:string
}