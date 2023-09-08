// BACKUP SEED......

const connection = require('../config/connection');
const { Thought, Reaction, User } = require('../models');
const {
  getRandomUser,
  getRandomEmail,
  getRandomReactions,
  getRandomThought,
  genRandomIndex,
} = require('./data');

console.time('seeding');

connection.once('open', async () => {
  let thoughtCheck = await connection.db.listCollections({ username: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let reactionCheck = await connection.db.listCollections({ username: 'reactions' }).toArray();
  if (reactionCheck.length) {
    await connection.dropCollection('reactions');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  // empty arrays for randomly generated thoughts and reactions
  const reactions = [...getRandomReactions(10)];
  const thoughts = [];
  const users = [];

  // reactions array
  const makeThought = (text) => {
    thoughts.push({
      text,
      username: getRandomUser().split(' ')[0],
      reactions: [reactions[genRandomIndex(reactions)]._id],
    });
  };

  // wait... reaction database insertion
  await Reaction.collection.insertMany(reactions);

  // random thought of 12 words >:)
  reactions.forEach(() => makeThought(getRandomThought(12)));

  await Thought.collection.insertMany(thoughts);

  // ------
  for (let i = 0; i < 20; i++) {
    const username = getRandomUser();
    const thoughts = getRandomThought();
    const email = getRandomEmail();

    users.push({
      username,
      email,
      thoughts,
    //   age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  await User.collection.insertMany(users);

  // logged table for reactions and thoughts
  console.table(reactions);
  console.table(thoughts);
  console.table(users);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});

