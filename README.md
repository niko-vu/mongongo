GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

# Mongongo

## Description

An API for a social network web app where users can share, react to others' shared posts, and create a friend list using Express.js, a MongoDB database, and the Mongoose ODM.

...

## Usage

The deployed application should look something like this:

![Screenshot of the application.](https://github.com/niko-vu/logo-skimping/blob/main/assets/screenrecordingGIF.gif?raw=true)

[Click this for the screenrecording of the application as a video.](https://github.com/niko-vu/logo-skimping/blob/main/assets/screenrecording.webm)

## Credits

* ...

## License

N/a