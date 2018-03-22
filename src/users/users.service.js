class UsersService {

	constructor($http){
		this._$http = $http;
		this.link = '/api.php/task_users';
	}

	getAll() {
		return this._$http.get(this.link + '?transform=1').then((response) => response.data.task_users);
	}

	getUser(id) {
		return this._$http.get(this.link + '/' + id).then((response) => response.data);
	}

}
UsersService.$inject = ['$http'];

export default UsersService;