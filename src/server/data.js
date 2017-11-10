module.exports = {
  people: getPeople(),
  organizations: getOrganizations(),
  projects: getProjects()
};

function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
  ];
}

function getOrganizations() {
  return [
    {
      id: 1,
      slug: 'Test',
      billingEmail: 'titoarturoagudelo@gmail.com',
      website: 'test@test.com',
      imageUrl: 'https://s3.amazonaws.com/respondentinc-images/assets/organization_avatar_256.png',
      location: 'Bogotá, Colombia',
      plan: {
        id: 'free',
        maxUsers: 10,
        name: 'free',
        price: 0
      },
      projects: [
        { id: 1, name: 'financial', description: 'test', status: 'success' },
        { id: 2, name: 'software', description: 'test', status: 'paused' },
        { id: 3, name: 'hardware', description: 'test', status: 'noset' },
        { id: 4, name: 'HR', description: 'test', status: 'noset' },
        { id: 5, name: 'design', description: 'test', status: 'paused' }
      ]
    }
  ];
}

function getProjects() {
  return [
    {
      id: 1,
      name: 'financial',
      description: 'test',
      status: 'success',
      step: 3,
      views: 20,
      target: 1,
      scheduled: 0,
      attended: 0,
      paid: 0,
      respondent: 'Get Test',
      incentive: 125
    },
    {
      id: 2,
      name: 'software',
      description: 'test',
      status: 'noset',
      step: 1,
      views: 20,
      target: 1,
      scheduled: 0,
      attended: 0,
      paid: 0,
      respondent: 'Get Test',
      incentive: 125
    },
    {
      id: 3,
      name: 'hardware',
      description: 'test',
      status: 'paused',
      step: 1,
      views: 20,
      target: 1,
      scheduled: 0,
      attended: 0,
      paid: 0,
      respondent: 'Get Test',
      incentive: 125
    },
    { id: 4,
      name: 'HR',
      description: 'test',
      status: 'paused',
      step: 1,
      views: 20,
      target: 1,
      scheduled: 0,
      attended: 0,
      paid: 0,
      respondent: 'Get Test',
      incentive: 125
    },
    {
      id: 5,
      name: 'design',
      description: 'test',
      status: 'success',
      step: 1,
      views: 20,
      target: 1,
      scheduled: 0,
      attended: 0,
      paid: 0,
      respondent: 'Get Test',
      incentive: 125
    }
  ];
}
