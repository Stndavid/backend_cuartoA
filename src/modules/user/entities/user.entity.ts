import { Persona } from "../../persona/entities/persona.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    mail:string;

    @Column()
    password: string;

    @Column()
    contacto: number;
    @OneToOne(()=>Persona, persona=>persona.user, {cascade:true})
    persona: any;
    
}
