import signin, {state as signinState} from './states/signin.state';
import signup, {state as signupState} from './states/signup.state';
import projects, {state as projectsState} from './states/projects.state';
import user, {state as userState} from './states/user.state';
import users, {state as usersState} from './states/users.state';
import project, {state as projectState} from './states/project.state';
import addProject, {state as addProjectState} from './states/add-project.state';
import editProject, {state as editProjectState} from './states/edit-project.state';
import task, {state as taskState} from './states/task.state';
import signout, {state as signoutState} from './states/signout.state';
import addTask, {state as addTaskState} from './states/add-task.state';
import editTask, {state as editTaskState} from './states/edit-task.state';

function state($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider
		.state(signin, signinState)
		.state(signup, signupState)
		.state(projects, projectsState)
		.state(user, userState)
		.state(users, usersState)
		.state(project, projectState)
		.state(addProject, addProjectState)
		.state(editProject, editProjectState)
		.state(task, taskState)
		.state(signout, signoutState)
		.state(addTask, addTaskState)
		.state(editTask, editTaskState);

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}
state.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default state;