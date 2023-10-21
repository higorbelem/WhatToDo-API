import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

import { TaskInput } from './dto/task.input';
import { TaskEntity } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly TaskRepository: Repository<TaskEntity>,
  ) {}

  async createTask(data: TaskInput): Promise<TaskEntity> {
    const task = new TaskEntity();
    task.name = data.name;
    task.date = data.date;
    task.time = data.time;
    task.priority = data.priority;
    task.reminders = data.reminders;
    task.deviceId = data.deviceId;
    task.done = false;

    await this.TaskRepository.save(task);

    return task;
  }

  async getTasks(deviceId: string, startDate: Date, endDate: Date) {
    return await this.TaskRepository.find({
      where: {
        deviceId,
        date: Between(startDate, endDate),
      },
    });
  }

  async finishTask(deviceId: string, taskId: string) {
    await this.TaskRepository.update(
      {
        id: taskId,
        deviceId,
      },
      {
        done: true,
      },
    );
    return taskId;
  }

  async deleteTask(deviceId: string, taskId: string) {
    await this.TaskRepository.delete({
      id: taskId,
      deviceId,
    });
    return taskId;
  }
}
