import { Column, Entity, PrimaryColumn, Unique } from "typeorm"

@Entity("users")
@Unique(["email"])
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  created_at: Date
}
