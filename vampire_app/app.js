// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/vampire');
// 3. Require your extra data source
const vampireData = require('./populateVampires');
// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/mongoose-vampires';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected...');
});
mongoose.connection.on('error', (error) => {
  console.log(error);
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Updated Schema with 'title' property and now updating the 2 documents that actually had title properties -------------------------------------------------------------
// Vampire.updateOne({name: 'Barnabas Spenser'}, 
// {title: 'Osiris of Sewer Rats'}, (err, updatedVampire) => {
//     if (err) return console.log(err);
//     else console.log(updatedVampire);
//     process.exit();
// });
// Vampire.updateOne({name: 'Akasha'}, 
// {title: 'Queen of the Damned'}, (err, updatedVampire) => {
//     if (err) return console.log(err);
//     else console.log(updatedVampire);
//     process.exit();
// });
//----------------------------------------------------------------------------------

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.insertMany(vampireData, (err, data) => {
//   console.log("added provided vampire data");
//   process.exit();
// });
// ### Add some new vampire data

// const newVampire01 = {
//   name: 'Mr. Vampire',
//   hair_color: 'black',
//   eye_color: 'red',
//   dob: new Date(1956, 5, 18, 20, 17),
//   loves: ['long walks on the beach', 'puppies', 'merlot'],
//   location: 'Venice Beach, CA',
//   gender: 'm',
//   victims: 23
// };

// const newVampire02 = {
//   name: 'Cindy Williams',
//   hair_color: 'red',
//   eye_color: 'black',
//   dob: new Date(1902, 5, 18, 20, 17),
//   loves: ['reading', 'cats', 'bike rides'],
//   location: 'Martinez, GA',
//   gender: 'f',
//   victims: 5
// };

// const newVampire03 = {
//   name: 'Shirley Upton',
//   hair_color: 'black',
//   eye_color: 'green',
//   dob: new Date(1845, 5, 18, 20, 17),
//   loves: ['sunsets', 'birds', 'public speaking'],
//   location: 'Tucson, AZ',
//   gender: 'f',
//   victims: 150
// };

// const newVampire04 = {
//   name: 'Peter Schultz',
//   hair_color: 'blonde',
//   eye_color: 'black',
//   dob: new Date(1703, 5, 18, 20, 17),
//   loves: ['cake', 'knitting', 'hot chocolate'],
//   location: 'Chicago, IL',
//   gender: 'm',
//   victims: 204
// };
// const newVampires = [newVampire01, newVampire02, newVampire03, newVampire04,]

// Vampire.create(newVampires, (err, createdVampire) => {
//   if (err) console.log(err);
//   else console.log(createdVampire)
//   process.exit();
// });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Vampire.find({gender: 'f'}, (err, allFemaleVampires) => {
//   if (err) return console.log(err);
//   else console.log(allFemaleVampires);
//   process.exit();
// });

// Vampire.find({victims: { $gt: 500 }}, (err, _500plusVictims) => {
//   if (err) return console.log(err);
//   else console.log(_500plusVictims);
//   process.exit();
// });

// Vampire.find({victims: { $lte: 150 }}, (err, _150orFewerVictims) => {
//   if (err) return console.log(err);
//   else console.log(_150orFewerVictims);
//   process.exit();
// });

// Vampire.find({victims: { $ne: 210234 }}, (err, victimsNE210234) => {
//   if (err) return console.log(err);
//   else console.log(victimsNE210234);
//   process.exit();
// });

// Vampire.find({ $and: [{victims: { $gt: 150 }}, { victims: { $lt: 500 }}]}, 
//   (err, victimsBetween150_500) => {
//   if (err) return console.log(err);
//   else console.log(victimsBetween150_500);
//   process.exit();
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find( { title: { $exists: true } }, (err, hasTitleVampires) => {
//   if (err) return console.log(err);
//   else console.log(hasTitleVampires);
//   process.exit();
// });

// Vampire.find( { victims: { $exists: false } }, (err, noVictimsVampires) => {
//   if (err) return console.log(err);
//   else console.log(noVictimsVampires);
//   process.exit();
// });

// Vampire.find({ $and: [{ title: { $exists: true }}, 
//   { victims: { $exists: false }}]}, (err, hasTitleNoVictims) => {
//     if (err) return console.log(err);
//     else console.log(hasTitleNoVictims);
//     process.exit();
//   });

// Vampire.find({ $and: [{ victims: { $exists: true }}, 
//   { victims: { $gt: 1000 }}]}, (err, _1000plusVictims) => {
//     if (err) return console.log(err);
//     else console.log(_1000plusVictims);
//     process.exit();
//   });

/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({ $or: [{ location: 'New York, New York, US'}, 
//   { location: 'New Orleans, Louisiana, US'}]}, (err, specificLocationVampires) => {
//     if (err) return console.log(err);
//     else console.log(specificLocationVampires);
//     process.exit();
//   });

// Vampire.find({ $or: [{ loves: 'brooding'}, 
//   { loves: 'being tragic'}]}, (err, specificLovesVampires) => {
//     if (err) return console.log(err);
//     else console.log(specificLovesVampires);
//     process.exit();
//   });

// Vampire.find({ $or: [{ victims: { $gt : 1000}}, 
//   { loves: 'marshmallows'}]}, (err, specificVampires) => {
//     if (err) return console.log(err);
//     else console.log(specificVampires);
//     process.exit();
//   });

// Vampire.find({ $or: [{ hair_color: 'red' }, 
//   { eye_color: 'green'}]}, (err, specificFeaturesVampires) => {
//     if (err) return console.log(err);
//     else console.log(specificFeaturesVampires);
//     process.exit();
//   });

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////


