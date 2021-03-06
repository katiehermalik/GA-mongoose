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

// Vampire.find({ $or: [{ loves: 'frilly shirtsleeves' }, 
//   { loves: 'frilly collars' }]}, (err, frillyLovinVampires) => {
//     if (err) return console.log(err);
//     else console.log(frillyLovinVampires);
//     process.exit();
//   });

// Vampire.find({ loves: 'brooding' }, (err, broodingVampires) => {
//     if (err) return console.log(err);
//     else console.log(broodingVampires);
//     process.exit();
//   });

// Vampire.find({ $or: [{ loves: 'appearing innocent' }, 
//   { loves: 'trickery' }, { loves: 'lurking in rotting mansions' }, 
//   { loves: 'R&B music' }]}, 
//   (err, eclecticVampires) => {
//     if (err) return console.log(err);
//     else console.log(eclecticVampires);
//     process.exit();
//   });

// Vampire.find({ $and: [ { loves: 'fancy cloaks' }, 
// {loves: {$nin: ['top hats', 'virgin blood']}}]},
//    (err, particularVampires) => {
//     if (err) return console.log(err);
//     console.log(particularVampires);
//     process.exit();
//   });


/////////////////////////////////////////////////
//### Negative Selection

// Vampire.find({ $and: [{ loves: 'ribbons' }, 
// {eye_color: {$ne: 'brown'}}]},
//    (err, ribbonLovinNotBrownEyes) => {
//     if (err) return console.log(err);
//     console.log(ribbonLovinNotBrownEyes);
//     process.exit();
//   });

// Vampire.find({location: {$ne: 'Rome, Italy'}},
//    (err, notFromRomeVampires) => {
//     if (err) return console.log(err);
//     console.log(notFromRomeVampires);
//     process.exit();
//   });

// Vampire.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}, (err, loveLittleVampires) => {
//     if (err) return console.log(err);
//     console.log(loveLittleVampires);
//     process.exit();
//   });

// Vampire.find({victims: { $lte: 200 }}, (err, _200orFewerVictims) => {
//   if (err) return console.log(err);
//   else console.log(_200orFewerVictims);
//   process.exit();
// });


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// Vampire.findOneAndReplace(
//   { name: 'Claudia' }, 
//   {
//     name: 'Eve',
//     hair_color: 'purple',
//     eye_color: 'brown',
//     dob: new Date(1753, 5, 18, 20, 17),
//     loves: ['muffins', 'singing', 'swimming'],
//     location: 'Detroit, MI',
//     gender: 'f',
//     victims: 29
//   }, 
//   {new: true}, 
//   (err, replacementVampire) => {
//   if (err) return console.log(err);
//   else console.log(replacementVampire);
//   process.exit();
// });


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

// Vampire.findOneAndUpdate({name: 'Eve'}, { gender: 'm' }, {new: true}, 
// (err, updatedVampire) => {
//     if (err) return console.log(err);
//     else console.log(updatedVampire);
//     process.exit();
// });

// Vampire.findOneAndUpdate({name: 'Eve'}, {name: 'moniker'}, {new: true}, 
// (err, updatedVampire) => {
//     if (err) return console.log(err);
//     else console.log(updatedVampire);
//     process.exit();
// });

// Vampire.updateMany({gender: 'f'}, {gender: 'fems'}, (err, updatedVampires) => {
//     if (err) return console.log(err);
//     else console.log(updatedVampires);
//     process.exit();
// });


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// Vampire.findOneAndRemove({hair_color: 'brown'}, (err, removedVampire) => {
//     if (err) return console.log(err);
//     else console.log(removedVampire);
//     process.exit();
// });

// Vampire.deleteMany({eye_color: 'blue'}, (err, deletedVampires) => {
//     if (err) return console.log(err);
//     else console.log(deletedVampires);
//     process.exit();
// });


/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////


