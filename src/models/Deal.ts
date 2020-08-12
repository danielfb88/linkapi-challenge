import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Deal {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  amount!: number;

  @Column()
  date!: string;

  @Column()
  title!: string;

  @Column()
  clientName!: string;

  @Column()
  userName!: string;
}
