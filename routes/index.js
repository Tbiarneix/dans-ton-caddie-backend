const usersRouter = require('./users');
const ingredientsRouter = require('./ingredients');
const listsRouter = require('./lists');

module.exports = (app) => {
  app.use('/api/users', usersRouter);
  app.use('/api/ingredients', ingredientsRouter);
  app.use('/api/users', listsRouter);
}