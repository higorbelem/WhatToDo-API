import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { PriorityType, ReminderNameType } from 'src/@types/task';

@ObjectType()
@Entity('task')
export class TaskEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Field()
  @Column('varchar', { length: 500 })
  deviceId: string;

  @Field()
  @Column('varchar', { length: 500 })
  name: string;

  @Field(() => String)
  @Column('date', { nullable: true })
  date: Date;

  @Field(() => String)
  @Column('timestamp', { nullable: true })
  time?: Date;

  @Field(() => Boolean, { nullable: true })
  @Column()
  done?: boolean;

  @Field(() => String)
  @Column('varchar', { nullable: true })
  priority?: PriorityType;

  @Field(() => [String])
  @Column('varchar', { array: true, nullable: true })
  reminders?: ReminderNameType[];
}
