import angular from 'angular';
import component from './disqus.component';

let disqus = angular.module('disqus', [])
	.component('disqus', component)
	.name;

export default disqus;