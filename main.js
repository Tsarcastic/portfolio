'use strict';

var projects = [];
//Builds the Projects - No append
function Project(name, language, site, github) {
  this.name = name;
  this.language = language;
  this.site = site;
  this.github = github;
  projects.push(this);
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h1').html(this.name)
  $newProject.find('#language').html(this.language)
  $

}

}
