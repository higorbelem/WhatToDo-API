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
  @Column('date')
  date: Date;

  @Field(() => String, { nullable: true })
  @Column('time', { nullable: true })
  time?: Date;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  done?: boolean;

  @Field(() => String, { nullable: true })
  @Column('varchar', { nullable: true })
  priority?: PriorityType;

  @Field(() => [String], { nullable: true })
  @Column('varchar', { array: true, nullable: true })
  reminders?: ReminderNameType[];
}
