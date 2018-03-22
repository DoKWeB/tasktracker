class ProjectsService {

    constructor($http, $rootScope){
        this._$http = $http;
        this._$rootScope = $rootScope;
        this.link = '/api.php/task_projects';
    }

	getAll() {
		return this._$http.get(this.link + '?transform=1').then((response) => response.data.task_projects);
	}

	getProject(id) {
	    return this._$http.get(this.link + '/' + id).then(response => response.data)
    }

    addProject(name) {
        return this._$http.post(this.link, {
            "name": name,
            "author_id": this._$rootScope.user.id
        }).then(response => response.data);
    };

    editProject(project) {
        return this._$http.put(this.link + '/' + project.id, project).then(response => response);
    }

}
ProjectsService.$inject = ['$http', '$rootScope'];

export default ProjectsService;