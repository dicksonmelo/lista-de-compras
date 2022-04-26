import { IsNotEmpty, Length } from "class-validator"
import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm"
import { v4 as uuid } from "uuid"
import bcrypt from "bcryptjs"

@Entity("users")
@Unique(["email"])
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  @Length(4, 50)
  email: string

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
    }
  }
}
