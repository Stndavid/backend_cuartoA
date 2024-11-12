import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string

    @Column()
    descripciom: string

    @ManyToMany(()=>User)
    @JoinTable({name:'role_user'})
    users:User
}
