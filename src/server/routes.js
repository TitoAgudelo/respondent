var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/organizations', getOrganizations);
router.get('/organizations/:id', getOrganization);
router.get('/project/:id', getproject);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}

function getOrganizations(req, res, next) {
  res.status(200).send(data.organizations);
}

function getOrganization(req, res, next) {
  var id = +req.params.id;
  var org = data.organizations.filter(function(p) {
    return p.id === id;
  })[0];

  if (org) {
    res.status(200).send(org);
  } else {
    four0four.send404(req, res, 'organization ' + id + ' not found');
  }
}

function getproject(req, res, next) {
  var id = +req.params.id;
  var project = data.projects.filter(function(p) {
    return p.id === id;
  })[0];

  if (project) {
    res.status(200).send(project);
  } else {
    four0four.send404(req, res, 'project ' + id + ' not found');
  }
}
