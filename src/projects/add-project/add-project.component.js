import template from './add-project.tpl.html';

class controller {
	
	constructor(ProjectsService, $state){
		this._ProjectsService = ProjectsService;
		this._$state = $state;
	}

	add(name) {
		this._ProjectsService.addProject(name).then((data) => {
			this._$state.go('project', {id: data});
		});
	}

}
controller.$inject = ['ProjectsService', '$state'];

export default {
	template,
	controller
};