const name = 'add-task';
const url = '/project/:projectId/add-task';
const template = '<add-task project-id=projectId></add-task>';

function controller($scope, $stateParams) {
	$scope.projectId = $stateParams.projectId;
}
controller.$inject = ['$scope', '$stateParams'];

export const state = {
	url,
	template,
	controller
};

export default name;