import angular from 'angular';
import loaderComponent from './loader.component';

let loader = angular.module('loader', [])
	.component('loader', loaderComponent)
	.name;

export default loader;