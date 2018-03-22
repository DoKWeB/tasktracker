import angular from 'angular';
import ProjectsService from './projects.service';
import addProjectComponent from './add-project/add-project.component';
import editProjectComponent from './edit-project/edit-project.component';
import projectComponent from './project/project.component';
import projectsComponent from './projects/projects.component';

let projects = angular.module('projects', [])
	.service('ProjectsService', ProjectsService)
	.component('addProject', addProjectComponent)
	.component('editProject', editProjectComponent)
	.component('project', projectComponent)
	.component('projects', projectsComponent)
	.name;

export default projects;