import template from './project.tpl.html';

const bindings = {
	projectId: '<'
};

class controller {

	constructor($rootScope, ProjectsService, TasksService){
		this._$rootScope = $rootScope;
		this._ProjectsService = ProjectsService;
		this._TasksService = TasksService;
		this.user = this._$rootScope.user;
	}
	
	$onInit() {
		this._ProjectsService.getProject(this.projectId).then((project) => {
			this.project = project;
		});
		
		this._TasksService.getAll(this.projectId).then((tasks) => {
			this.tasks = tasks;
			
			this.progress = this.tasks.filter((item) => item.status === "1");
			this.progressLength = this.progress.length;
			
			this.completed = this.tasks.filter((item) => item.status === "2");
			this.completedLength = this.completed.length;
		});
	}

	onInserted(item) {
		let index;

		if(item.status === "1"){
			for(index = 0; index < this.progress.length; index++){
				if(item.id === this.progress[index].id){
					break;
				}
			}

			this.progress.splice(index, 1);
		}else{
			for(index = 0; index < this.completed.length; index++){
				if(item.id === this.completed[index].id){
					break;
				}
			}

			this.completed.splice(index, 1);
		}

		if(this.progressLength < this.progress.length && this.completedLength > this.completed.length){
			item.status = 1;
			this.progressLength = this.progress.length;
			this.completedLength = this.completed.length;

			this._TasksService.editTask(item);
		}else if(this.completedLength < this.completed.length && this.progressLength > this.progress.length){
			item.status = 2;
			this.completedLength = this.completed.length;
			this.progressLength = this.progress.length;

			this._TasksService.editTask(item);
		}

		return item;
	}

}
controller.$inject = ['$rootScope', 'ProjectsService', 'TasksService'];

export default {
	bindings,
	template,
	controller
};