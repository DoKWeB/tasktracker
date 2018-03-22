import template from './add-task.tpl.html';

const bindings = {
	projectId: '<'
};

class controller {

	constructor(TasksService, $rootScope, $state, $filter, UsersService){
		this._TasksService = TasksService;
		this._$rootScope = $rootScope;
		this._$state = $state;
		this._UsersService = UsersService;
		this._$filter = $filter;

		this._UsersService.getAll().then((users) => {
			this.users = users;
		});
	}

	add() {
		this._TasksService.addTask(this.name, this.description, new Date(this.date).getTime(), this.priority, this._$rootScope.user.id, this.executor, this.projectId).then((id) => {
			this._$state.go("task", {projectId: this.projectId, taskId: id});
		});
	}

}
controller.$inject = ['TasksService', '$rootScope', '$state', '$filter', 'UsersService'];

export default {
	bindings,
	template,
	controller
};