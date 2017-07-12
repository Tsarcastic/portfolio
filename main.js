var projects = [];
//Builds the Projects - No append
function Project(name, language, site, github, firstPublish) {
  this.name = name;
  this.language = language;
  this.firstPublish = firstPublish;
  this.site = site;
  this.github = github;
  projects.push(this);

}
