import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity({name:'user'})
export class Todo{
     @PrimaryGeneratedColumn()
     id:number;
     @Column()
     name:string;
     @Column()
     email:string
     @Column()
     age:number
}
