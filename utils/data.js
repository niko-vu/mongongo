// BACKUP DATA......

const username = [
    'runeytunes',
    'talons888',
    'francy',
    'parsnipper',
    'fearoffun',
    'snibsnobs',
    'krayelk',
    'juicyshrimp',
    'aabbcc',
    'w933s',
    'stink',
    'stinkyp',
    'lalala',
    'halp',
    'woahmama',
    'ummm',
    'coolguy69',
    'bluntrotated',
    'awesomesauce11',
    'leeksRcool',
    'frickYou',
    'gotohellplz',
  ];
  
  const email = [
    'idgafwtf666shutup@gmail.com',
    'britneyspearsstan@pol.com',
    'suckasock1@gmail.com',
    'fishmen@gmail.com',
    'catsanddogsandcats@gmail.com',
    'bearingo@yahoo.com',
    'flamingo@pol.com',
    'shrimpingo@gmail.com',
    'iloldlol@yahoo.com',
    'singalong8@gmail.com',
    'birchandbirds@pol.com',
    'ohhhhhwow@gmail.com',
    'spamemail222@gmail.com',
    'ababa22@pol.com',
    'laokao1@yahoo.com',
    '97sohauw@yahoo.com',
    'jjjalwl@gmail.com',
    'ammooajwkaw@yahoo.com',
    '2999ajello@gmail.com',
    'capybaradonuts@yahoo.com',
    'albatrosspride@gmail.com',
    'frickmylife11@pol.com',
  ];
  
  const thoughts = [
    'i am going to Explode',
    'i wish oomf would go to hell',
    'wow ur being very toxic rn',
    'the new minecraft update is so beautiful i kant',
    'stan p00na',
    'wtf just happened 2 me',
    'yawl seeing the FNAF movie tho?',
    'wish twitter woould shut down lol',
    'just blew up my microwave',
    'do Not microwave food with the foil on',
    'add me on the 3ds guys',
    'i just got so scared',
    'bambi was boring asl',
    'um',
  ];
  
  const reaction = [
    'bleh',
    'lol',
    'whatever',
    'yay',
    'xD',
    'hmm',
    'curious',
    'lmao',
    'eee',
    'ugh',
    '...',
  ];
  
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  
  const getRandomThought = () => `${thoughts[genRandomIndex(thoughts)]}`;
  
  const getRandomReaction = (words) => {
    let reaction = '';
    for (let i = 0; i < words; i++) {
        reaction += ` ${getRandomReaction()}`;
    }
    return thought;
  };
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // random username
  const getRandomUser = () =>
    `${getRandomArrItem(username)}`;
  
  // random email
  const getRandomEmail = () =>
    `${getRandomArrItem(email)}`;
  
  // Function to generate random comments given a number (ex. 10 comments === getRandomComments(10))
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            text: getRandomArrItem(reaction),
            username: getRandomUser().split(' ')[0],
        });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = {
    getRandomUser,
    getRandomEmail,
    getRandomReactions,
    getRandomThought,
    genRandomIndex,
  };
  