/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      name: 'Felipe Giusti',
      email: 'felipe@email.com',
      password: '123456',
      admin: false,
    },
  ]);
};

/**
 * use:
 *  $ npx knex seed:run
 * para executar as seeds knex no banco de dados.
 */
