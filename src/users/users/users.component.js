import template from './users.tpl.html';

class controller {

	constructor(UsersService){
		UsersService.getAll().then((users) => {
			this.users = users;
		});
	}

}
controller.$inject = ['UsersService'];

export default {
	template,
	controller
};