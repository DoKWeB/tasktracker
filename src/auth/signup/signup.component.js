import template from './signup.tpl.html';
import stateName from '../../common/states/projects.state';

class controller {

	constructor($rootScope, $state, AuthService){
		this._$rootScope = $rootScope;
		this._$state = $state;
		this._AuthService = AuthService;

		if(this._$rootScope.user){
			this._$state.go(stateName);
		}
	}

	signup() {
		this._AuthService.signup(this.email, this.name, new Date(this.date).getTime(), this.password).then(() => {
			this._$state.go(stateName);
		}).catch(() => {
			this.formError = 'Such email is already registered!';
		});
	}

}
controller.$inject = ['$rootScope', '$state', 'AuthService'];

export default {
	template,
	controller
};