import angular from 'angular';
import UsersService from './users.service';
import userComponent from './user/user.component';
import usersComponent from './users/users.component';

let users = angular.module('users', [])
	.service('UsersService', UsersService)
	.component('user', userComponent)
	.component('users', usersComponent)
	.name;

export default users;