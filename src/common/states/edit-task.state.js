const name = 'edit-task';
const url = '/project/:projectId/edit-task/:taskId';
const template = '<edit-task project-id=projectId task-id=taskId></edit-task>';

function controller($scope, $stateParams) {
	$scope.projectId = $stateParams.projectId;
	$scope.taskId = $stateParams.taskId;
}
controller.$inject = ['$scope', '$stateParams'];

export const state = {
	url,
	template,
	controller
};

export default name;