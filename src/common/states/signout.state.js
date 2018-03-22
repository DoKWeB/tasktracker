const name = 'signout';
const url = '/signout';

function controller($state, AuthService){
	AuthService.signout().then(function() {
		$state.go('signin');
	});
}
controller.$inject = ['$state', 'AuthService'];

export const state = {
	url,
	controller
};

export default name;