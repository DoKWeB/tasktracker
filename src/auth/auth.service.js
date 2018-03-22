class AuthService {

	constructor($http, $rootScope){
		this._$http = $http;
		this._$rootScope = $rootScope;
		this.link = '/api.php';
	}

	signin(email, password) {
		return this._$http.post(this.link, {"email": email, "password": password}).then((response) => {
			this._$rootScope.user = response.data;
			return response.data;
		});
	}

	signup(email, name, date, password) {
		return this._$http.post(this.link + '/task_users', {
			"email": email,
			"name": name,
			"date": date,
			"img": "http://vebmastak.ru/Fail/Veb/noavatar.gif",
			"password": password
		}).then(() => this.signin(email, password));
	}

	signout() {
		return this._$http.post(this.link, {"logout": "logout"}).then((response) => {
			this._$rootScope.user = null;
			return response;
		});
	}

	getUser() {
	    return this._$http.post(this.link, {"get_user": "user"}).then((response) => {
			this._$rootScope.user = response.data;
	        return response.data;
	    });
  }

}
AuthService.$inject = ['$http', '$rootScope'];

export default AuthService;