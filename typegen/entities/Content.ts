import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Lesson } from "./Lesson";

@Index("UQ_0b349f6b8ca7f05eed39ffb956d", ["lessonId"], { unique: true })
@Entity("content", { schema: "public" })
export class Content {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "description" })
  description: string;

  @Column("character varying", { name: "linkContent" })
  linkContent: string;

  @Column("uuid", { name: "lessonId", nullable: true, unique: true })
  lessonId: string | null;

  @OneToOne(() => Lesson, (lesson) => lesson.content)
  @JoinColumn([{ name: "lessonId", referencedColumnName: "id" }])
  lesson: Lesson;
}
