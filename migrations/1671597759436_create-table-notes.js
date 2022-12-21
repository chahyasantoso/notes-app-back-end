/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('notes', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    body: {
      type: 'TEXT',
      notNull: true,
    },
    tags: {
      type: 'TEXT[]',
      notNull: true,
    },
    /* perhatikan nama di dbase created_at dan bukannya createdAt,... jadi nanti musti di mapping */
    created_at: {
      type: 'TEXT',
      notNull: true,
    },
    /* perhatikan nama di dbase created_at dan bukannya createdAt,... jadi nanti musti di mapping */
    updated_at: {
      type: 'TEXT',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('notes');
};
