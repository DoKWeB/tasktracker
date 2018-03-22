import angular from 'angular';
import state from './common/common.state.config';
import run from './common/common.run';
import interceptor from './common/common.interceptor.config';
import 'angular-ui-router';
import dndLists from 'angular-drag-and-drop-lists';
import auth from './auth/auth.module';
import projects from './projects/projects.module';
import task from './task/task.module';
import loader from './loader/loader.module';
import users from './users/users.module';
import LoadingInterceptor, {name as LoadingInterceptorName} from './common/loading.interceptor';
import 'jquery/dist/jquery.min';
import 'bootstrap3/dist/js/bootstrap.min';
import 'bootstrap3/dist/css/bootstrap.min.css';
import './index.scss';

// for tests only! remove when env === production
import 'angular-mocks';

export default angular
	.module('tasktracker', ['ui.router', auth, 'dndLists', projects, task, loader, users])
	.service(LoadingInterceptorName, LoadingInterceptor)
	.config(state)
	.config(interceptor)
	.run(run);