import template from './edit-project.tpl.html';

const bindings = {
	projectId: '<'
};

class controller {

	constructor(ProjectsService, $state){
		this._ProjectsService = ProjectsService;
		this._$state = $state;
	}
	
	$onInit() {
		this._ProjectsService.getProject(this.projectId).then((project) => {
			this.project = project;
		});
	}

	edit() {
		this._ProjectsService.editProject(this.project).then(() => {
			this._$state.go('project', {id: this.project.id});
		});
	}

}
controller.$inject = ['ProjectsService', '$state'];

export default {
	bindings,
	template,
	controller
};