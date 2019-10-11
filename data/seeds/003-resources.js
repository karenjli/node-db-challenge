exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, resourceName: "computer" },
        { id: 2, resourceName: "paper" },
        { id: 3, resourceName: "phone" },
        { id: 4, resourceName: "whiteboard" },
      ]);
    });
};
