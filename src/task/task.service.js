class TasksService {

	constructor($http){
		this._$http = $http;
		this.link = '/api.php/task_tasks';
	}

	getAll(projectId) {
		return this._$http.get(this.link + '?filter=project_id,cs,' + projectId + '&transform=1').then((response) => response.data.task_tasks);
	}

	getTask(id) {
		return this._$http.get(this.link + '/' + id).then((response) => response.data);
	}

	addTask(name, description, date, priority, author_id, executor_id, project_id) {
		return this._$http.post(this.link, {
			"name": name,
			"description": description,
			"status": "1",
			"date": date,
			"priority": priority,
			"author_id": author_id,
			"executor_id": executor_id,
			"project_id": project_id
		}).then((response) => response.data);
	}

	deleteTask(id) {
		return this._$http.delete(this.link + '/' + id).then((response) => response);
	}

	editTask(task) {
		return this._$http.put(this.link + '/' + task.id, task).then((response) => response);
	}

}
TasksService.$inject = ['$http'];

export default TasksService;