'use strict';

var projects = [];
//Builds the Projects - No append
function Project(name, language, site, description) {
  this.name = name;
  this.language = language;
  this.site = site;
  this.description = description;
  projects.push(this);
}


Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h1').html(this.name)
  $newProject.find('.language').html(this.language)
  $newProject.find('.site').attr('href', this.site)
  $newProject.find('.description').html(this.description)

}

}

// JS example
//
// var pastProjects = [];
//
// function PastProject(rawDataObj) {
//   this.thumbnailPath = rawDataObj.thumbnailPath;
//   this.title = rawDataObj.title;
//   this.description = rawDataObj.description;
//   this.url = rawDataObj.url;
// }
//
// PastProject.prototype.toHtml = function() {
//   // var $newPastProject = $('article.template').clone();
//   //
//   // $newPastProject.removeClass().addClass(this.title);
//   //
//   //
//   // $newPastProject.find('h1').html(this.title);
//   // $newPastProject.find('a').attr('href', this.url);
//   // $newPastProject.find('img').attr('src', this.thumbnailPath);
//   // $newPastProject.find('section').html(this.description);
//   // return $newPastProject;
//
//   var source = $('#article-template').html();
//   var comp = Handlebars.compile(source);
// //$('#articles').append(compile(this));
//   return comp(this);
//
// };
//
// rawData.forEach(function(projectObject) {
//   pastProjects.push(new PastProject(projectObject));
//
// });
//
// pastProjects.forEach(function(PastProject) {
//   $('#articles').append(PastProject.toHtml());
// });
//
// pastProjects.handleMainNav = function() {
//   $('.main-nav .tab').on('click', function () {
//     $('.tab-content').hide();
//     $('#' + $(this).data('content')).fadeIn('slow');
//
//
//   });
//   $('.main-nav .tab:first').click();
// };
//
// pastProjects.handleMainNav();

