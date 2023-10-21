import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { TaskEntity } from './entities/task.entity';
import { TaskService } from './task.service';
import { TaskInput } from './dto/task.input';

@Resolver(() => TaskEntity)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskEntity])
  async tasks(
    @Args('deviceId') deviceId: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.taskService.getTasks(
      deviceId,
      new Date(startDate),
      new Date(endDate),
    );
  }

  @Mutation(() => TaskEntity)
  async createTask(@Args('data') data: TaskInput) {
    return this.taskService.createTask(data);
  }

  @Mutation(() => String)
  async finishTask(
    @Args('deviceId') deviceId: string,
    @Args('taskId') taskId: string,
  ) {
    return this.taskService.finishTask(deviceId, taskId);
  }

  @Mutation(() => String)
  async deleteTask(
    @Args('deviceId') deviceId: string,
    @Args('taskId') taskId: string,
  ) {
    return this.taskService.deleteTask(deviceId, taskId);
  }
}
