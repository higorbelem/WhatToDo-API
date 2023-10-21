import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { TaskEntity } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
