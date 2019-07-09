const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const faker = require('faker');
const times = require('lodash.times');
const random = require('lodash.random');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const db = require('./models');
const cors = require('cors');

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

//allow cross origin requests
app.use(cors());

db.sequelize.sync().then(() => {
  //populate author table with dummy data
  db.author.bulkCreate(
    times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }))
  );

  // populate post table with dummy data
  db.post.bulkCreate(
    times(10, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      authorId: random(1, 10)
    }))
  );

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
