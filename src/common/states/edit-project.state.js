const name = 'edit-project';
const url = '/edit-project/:projectId';
const template = '<edit-project project-id=projectId></edit-project>';

function controller($scope, $stateParams){
	$scope.projectId = $stateParams.projectId;
}
controller.$inject = ['$scope', '$stateParams'];

export const state = {
	url,
	template,
	controller
};

export default name;