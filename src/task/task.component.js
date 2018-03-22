import template from './task.tpl.html';

const bindings = {
	taskId: '<',
	projectId: '<'
};

class controller {

	constructor($location, TasksService, UsersService, $state, $rootScope, ProjectsService){
		this._$location = $location;
		this._TasksService = TasksService;
		this._UsersService = UsersService;
		this._$state = $state;
		this._$rootScope = $rootScope;
		this._ProjectsService = ProjectsService;
	}
	
	$onInit() {
		this._ProjectsService.getProject(this.projectId).then((project) => {
			this.project = project;
		});
		
		this._$rootScope.$watch('user', (user) => {
			if (user) {
				this.user = this._$rootScope.user;
				
				this._TasksService.getTask(this.taskId).then((task) => {
					this.task = task;
					
					if(task.author_id === task.executor_id && task.author_id === this.user.id) {
						this.author = this.user;
						this.executor = this.user;
					} else if (task.author_id === task.executor_id) {
						this._UsersService.getUser(task.author_id).then((user) => {
							this.author = user;
							this.executor = user;
						});
					} else {
						this._UsersService.getUser(task.author_id).then((user) => {
							this.author = user;
						});
						
						this._UsersService.getUser(task.executor_id).then((user) => {
							this.executor = user;
						});
					}
					
					this.status = task.status;
					this.task.status = task.status === "1" ? 'in progress' : 'completed';
					this.disqusConfig = {
						disqus_shortname: '0e1fn0plhsul-000webhostapp-com',
						disqus_title: this.task.name
					};
				});
			}
		});
	}

	delete() {
		this._TasksService.deleteTask(this.task.id).then(() => {
			this._$state.go('project', {id: this.project.id});
		});
	}

	complete() {
		this.task.status = "2";

		this._TasksService.editTask(this.task).then(() => {
			this._$state.go('project', {id: this.project.id});
		});
	};

	reopen() {
		this.task.status = "1";

		this._TasksService.editTask(this.task).then(() => {
			this._$state.go('project', {id: this.project.id});
		});
	}

}
controller.$inject = ['$location', 'TasksService', 'UsersService', '$state', '$rootScope', 'ProjectsService'];

export default {
	bindings,
	template,
	controller
};