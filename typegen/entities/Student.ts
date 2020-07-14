import {Column,Entity,ManyToMany} from "typeorm";
import {Class} from './Class'


@Entity("student" ,{schema:"public" } )
export  class Student {

@Column("uuid",{ primary:true,name:"id",default: () => "uuid_generate_v4()", })
id:string;

@Column("character varying",{ name:"name" })
name:string;

@Column("integer",{ name:"key" })
key:number;

@Column("timestamp without time zone",{ name:"created_At",default: () => "now()", })
createdAt:Date;

@Column("timestamp without time zone",{ name:"updated_At",default: () => "now()", })
updatedAt:Date;

@Column("character varying",{ name:"email" })
email:string;

@ManyToMany(()=>Class,class=>class.students)


classes:Class[];

}
