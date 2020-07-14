import { Column, Entity } from "typeorm";

@Entity("university", { schema: "public" })
export class University {
  @Column("character varying", { name: "graduations" })
  graduations: string;

  @Column("character varying", { name: "doctors" })
  doctors: string;

  @Column("character varying", { name: "masters" })
  masters: string;

  @Column("uuid", {
    primary: true,
    name: "indentificationId",
    default: () => "uuid_generate_v4()",
  })
  indentificationId: string;

  @Column("character varying", { name: "indentificationName" })
  indentificationName: string;

  @Column("character varying", { name: "indentificationCnpj" })
  indentificationCnpj: string;

  @Column("timestamp without time zone", {
    name: "indentificationCreated_at",
    default: () => "now()",
  })
  indentificationCreatedAt: Date;

  @Column("timestamp without time zone", {
    name: "indentificationUpdated_at",
    default: () => "now()",
  })
  indentificationUpdatedAt: Date;
}
