import template from './edit-task.tpl.html';

const bindings = {
	projectId: '<',
	taskId: '<'
};

class controller {

	constructor(TasksService, $rootScope, $state, UsersService){
		this._TasksService = TasksService;
		this._$rootScope = $rootScope;
		this._$state = $state;
		this._UsersService = UsersService;

		this._UsersService.getAll().then((users) => {
			this.users = users;
		});
	}
	
	$onInit() {
		this._TasksService.getTask(this.taskId).then((task) => {
			this.task = task;
			this.task.date = new Date(+task.date);
		});
	}

	edit() {
		this.task.date = this.task.date.getTime();
		this._TasksService.editTask(this.task).then(() => {
			this._$state.go("task", {projectId: this.projectId, taskId: this.taskId});
		});
	}

}
controller.$inject = ['TasksService', '$rootScope', '$state', 'UsersService'];

export default {
	bindings,
	template,
	controller
};