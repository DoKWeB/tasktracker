import template from './signin.tpl.html';

class controller {

    constructor($rootScope, $state, AuthService){
        this._$rootScope = $rootScope;
        this._$state = $state;
        this._AuthService = AuthService;

		if(this._$rootScope.user){
			this._$state.go('projects');
		}
    }

	signin() {
		this._AuthService.signin(this.email, this.password).then(() => {
			this._$state.go('projects');
		}).catch(() => {
			this.error = 'Incorrectly entered email and/or password!';
		});
	}

}
controller.$inject = ['$rootScope', '$state', 'AuthService'];

export default {
  template,
  controller
};