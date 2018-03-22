import angular from 'angular';
import AuthService from './auth.service';
import AuthRejector from './auth.rejector.service';
import signin from './signin/signin.component';
import signup from './signup/signup.component';

let auth = angular.module('auth', [])
	.service('AuthService', AuthService)
	.service('AuthRejector', AuthRejector)
	.component('signin', signin)
	.component('signup', signup)
	.name;

export default auth;