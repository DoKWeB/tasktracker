const name = 'task';
const url = '/project/:projectId/task/:taskId';
const template = '<task task-id=taskId project-id="projectId"></task>';

function controller($scope, $stateParams){
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