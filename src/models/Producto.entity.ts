import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductoModel {
  @PrimaryGeneratedColumn()
  id:number

  
  @Column()
  name:string
  
  @Column()
  description:string
  
  @Column()
  quantity:number
  
}