import template from './projects.tpl.html';

class controller {

	constructor(ProjectsService){
		ProjectsService.getAll().then((projects) => {
			this.projects = projects;
		});
	}

}
controller.$inject = ['ProjectsService'];

export default {
	template,
	controller
};