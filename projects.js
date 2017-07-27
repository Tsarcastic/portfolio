var projects = []

//Builds the Projects - No append
function Project(name, language, site, description) {
  this.name = name;
  this.language = language;
  this.site = site;
  this.description = description;
  projects.push(this);
}


projects.forEach(function(Project) {
  $('#projects').append(Project.toHtml());
});

projects.loadAll = function(rawData) {
  rawData.sort(function(a, b) {
    return (new String(b.name)) - (new String(a.name))
  });

  rawData.forEach(function(Project) {
    // $('#projects').append(Project.toHtml());
    var myProjects = $('#theTemplate-template').html();
    var compiled = Handlebars.compile(myProjects);
    $('#projects').append(compiled(Project))
  });
}

projects.fetchAll = function() {
  if (localStorage.rawData) {
    projects.loadAll(JSON.parse(localStorage.rawData));
  } else {
    console.log('getJSON is firing')
    $.getJSON('projects.json')
    .then(function(rawData) {
      localStorage.rawData = JSON.stringify(rawData);
      projects.loadAll(rawData);
    }, function(err) {
      console.error(err);
    })
  }
}

projects.forEach(function(Project) {
  $('#projects').append(Project.toHtml());
});


$('.projects').hide();
projects.fetchAll();

// new Project('Codographic Memory', 'HTML/CSS/Javascript', 'www.placeholder.com', 'A quick and challenging memory game');
// new Project('This', 'HTML/CSS/Javascript', 'www.placeholder.com', 'This project is currently in process' );
// new Project('Fake', 'HTML/CSS/Javascript', 'www.placeholder.com', 'Helped put a man on the moon');

// Creates the template
// var makeHtml = function() {
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
//
// Project.prototype.toHtml = function() {
//
//   var myProjects = $('#theTemplate-template').html();
//   var compiled = Handlebars.compile(myProjects);
//   $('#projects').append(compiled(this))
// };

// Project.prototype.toHtml(function() {
//   var myProjects = $('#theTemplate-template').html();
//   var compiled = Handlebars.compile(myProjects);
//   $('#projects').append(compiled(this))
// });


