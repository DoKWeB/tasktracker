const name = 'user';
const url = '/user/:id';
const template = '<user user-id=userId></user>';

function controller($scope, $stateParams){
	$scope.userId = $stateParams.id;
}
controller.$inject = ['$scope', '$stateParams'];

export const state = {
	url,
	template,
	controller
};

export default name;