import { IsNotEmpty, Length } from "class-validator"
import {
  Column,
  Entity,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm"
import { v4 as uuid } from "uuid"
import bcrypt from "bcryptjs"

@Entity("user")
@Unique(["username"])
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  @Length(4, 50)
  username: string

  @Column()
  @Length(4, 40)
  password: string

  @Column()
  @IsNotEmpty()
  role: string

  @Column()
  created_at: Date

  @Column()
  @UpdateDateColumn()
  updated_at: Date

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }

  checkIfUnencruptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password)
  }

  constructor() {
    if (!this.id) {
      this.id = uuid()
      this.created_at = new Date()
    }
  }
}
