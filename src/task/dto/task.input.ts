import { InputType, Field } from '@nestjs/graphql';

import { PriorityType, ReminderNameType } from 'src/@types/task';

@InputType()
export class TaskInput {
  @Field()
  readonly deviceId: string;

  @Field()
  readonly name: string;

  @Field(() => String, { nullable: true })
  readonly date: Date;

  @Field(() => String, { nullable: true })
  readonly time?: Date;

  @Field(() => Boolean, { nullable: true })
  readonly done?: boolean;

  @Field(() => String, { nullable: true })
  readonly priority?: PriorityType;

  @Field(() => [String], { nullable: true })
  readonly reminders?: ReminderNameType[];
}
