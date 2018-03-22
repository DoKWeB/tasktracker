const name = 'project';
const url = '/project/:id';
const template = '<project project-id="projectId"></project>';

function controller($scope, $stateParams){
	$scope.projectId = $stateParams.id;
}
controller.$inject = ['$scope', '$stateParams'];

export const state = {
	url,
	template,
	controller
};

export default name;