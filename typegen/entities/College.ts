import { Column, Entity } from "typeorm";

@Entity("college", { schema: "public" })
export class College {
  @Column("character varying", { name: "graduations" })
  graduations: string;

  @Column("integer", { name: "year" })
  year: number;

  @Column("uuid", {
    primary: true,
    name: "identificationId",
    default: () => "uuid_generate_v4()",
  })
  identificationId: string;

  @Column("character varying", { name: "identificationName" })
  identificationName: string;

  @Column("character varying", { name: "identificationCnpj" })
  identificationCnpj: string;

  @Column("timestamp without time zone", {
    name: "identificationCreated_at",
    default: () => "now()",
  })
  identificationCreatedAt: Date;

  @Column("timestamp without time zone", {
    name: "identificationUpdated_at",
    default: () => "now()",
  })
  identificationUpdatedAt: Date;
}
