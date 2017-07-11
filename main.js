var projects = [];

function Project(name, collaborator, language, library, mvpDate) {
  this.name = name;
  this.coll = collaborator;
  this.language = language;
  this.library = library;
  this.mvpDate = mvpDate;
  projects.push(this);

}
