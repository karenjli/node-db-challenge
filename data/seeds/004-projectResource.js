exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projectResource")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projectResource").insert([
        { projectId: 1, resourceId: 1 },
        { projectId: 1, resourceId: 4 },
        { projectId: 2, resourceId: 1 },
        { projectId: 2, resourceId: 3 },
        { projectId: 3, resourceId: 2 },
      ]);
    });
};
