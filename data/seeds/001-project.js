exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, projectName: "Create ClassSnap", completed: false },
        { id: 2, projectName: "Plan Big Bend Trip", completed: false },
        { id: 3, projectName: "Classroom Testing", completed: false },
      ]);
    });
};
