projects = []

//Builds the Projects - No append
function Project(name, language, site, description) {
  this.name = name;
  this.language = language;
  this.site = site;
  this.description = description;
  projects.push(this);
}

new Project('Codographic Memory', 'HTML/CSS/Javascript', 'www.placeholder.com', 'A quick and challenging memory game');
new Project('This', 'HTML/CSS/Javascript', 'www.placeholder.com', 'This project is currently in process' );
new Project('Fake', 'HTML/CSS/Javascript', 'www.placeholder.com', 'Helped put a man on the moon');

//Creates the template
// Project.prototype.toHtml = function() {
//   console.log(this)
//   var $newProject = $('#template').clone();
//   $newProject.removeClass('template');
//   $newProject.find('h1').html(this.name);
//   $newProject.find('.language').html(this.language);
//   $newProject.find('.site a').attr('href', this.site);
//   $newProject.find('.description').html(this.description);
//   console.log($newProject)
//   return $newProject;
// };

Project.prototype.toHtml = function() {
  
  var myProjects = $('#theTemplate-template').html();
  console.log(myProjects);
  var compiled = Handlebars.compile(myProjects);
  console.log(compiled(this));
  $('#projects').append(compiled(this))
};


projects.forEach(function(Project) {  
  $('#projects').append(Project.toHtml(this));
});


 $('.projects').hide();

 

