import angular from 'angular';
import TasksService from './task.service';
import taskComponent from './task.component';
import addTaskComponent from './add-task/add-task.component';
import editTaskComponent from './edit-task/edit-task.component';
import disqus from '../disqus/disqus.module';

let task = angular.module('task', [disqus])
	.service('TasksService', TasksService)
	.component('task', taskComponent)
	.component('addTask', addTaskComponent)
	.component('editTask', editTaskComponent)
	.name;

export default task;