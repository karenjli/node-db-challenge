exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("projectName", 255)
        .unique()
        .notNullable();
      tbl.text("projectDescription");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .text("taskName", 255)
        .unique()
        .notNullable();
      tbl
        .text("taskDescription")
        .unique()
        .notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("projectId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .text("resourceName", 255)
        .unique()
        .notNullable();
      tbl.text("resourceDescription");
    })
    .createTable("projectResource", tbl => {
      tbl
        .integer("projectId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl
        .integer("resourceId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
      tbl.primary(["projectId", "resourceId"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projectRosource")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
