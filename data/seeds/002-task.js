exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          taskName: "Work on Backend/Database",
          taskDescription: "create database with sqlite3",
          projectId: 1,
          completed: false,
        },
        {
          id: 2,
          taskName: "Work on frontend",
          taskDescription: "design pages for parents and teachers",
          projectId: 1,
          completed: false,
        },
        {
          id: 3,
          taskName: "Booked campsites",
          taskDescription: "go online and book Rio Grande Village campsite",
          projectId: 2,
          completed: false,
        },
        {
          id: 4,
          taskName: "Contact Teachers",
          taskDescription: "Contact 5 teachers interested in joining",
          projectId: 3,
          completed: false,
        },
        {
          id: 5,
          taskName: "Meetup with Teachers",
          taskDescription: "Meet at Starbucks or TFA",
          projectId: 3,
          completed: false,
        },
        {
          id: 6,
          taskName: "Material preparation",
          taskDescription: "Look for places to do mass printing",
          projectId: 3,
          completed: false,
        },
      ]);
    });
};
