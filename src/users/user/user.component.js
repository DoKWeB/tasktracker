import template from './user.tpl.html';

const bindings = {
	userId: '<'
};

class controller {

	constructor(UsersService){
		this._UsersService = UsersService;
	}
	
	$onInit() {
		this._UsersService.getUser(this.userId).then((user) => {
			this.user = user;
		});
	}

}
controller.$inject = ['UsersService'];

export default {
	bindings,
	template,
	controller
};