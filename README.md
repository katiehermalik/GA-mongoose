![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Mongoose Vampires

For this two part homework assignment, you will be using some  mongoose commands and you will be **reading documentation**  to find **new** queries/techniques to complete the following activities. Researching queries and implementing them is a big part of this homework!

![mongoose](https://s-media-cache-ak0.pinimg.com/564x/ee/b7/a9/eeb7a99383582d53e65ffcc0e4a225bd.jpg)

# Resources
Utilize the following resources to research the commands you will need:
- Your notes from today
- [MongoDB Manual](https://docs.mongodb.org/manual/reference/operator/query/#query-selectors)
- [Mongoose Docs](http://mongoosejs.com/docs/guide.html)
- Shahzad's cheatsheet 

## Setup
1. Start your mongo server with `mongod`

2. **Open a new terminal tab** and navigate to your homework folder for tonight which includes:

- A folder for your `vampire_app`
- A file for writing your app called `app.js`. You will write your code in here (even for the database).
**Comment out your database commands** as you get them working so that you're only running **one at a time**. This is where we will be looking for your work after you turn it in.
- A file called `populateVampires.js` that includes data on vampires that you will add (later).

3. `npm init`.  Install and require `mongoose`.

## What is a schema

A schema is a way to organize, ahead of time, what a group of data is going to look like. This can be at various levels of a database depending on what kind of databases you are using.

Mongo, is schema-less on the database level. It doesn't care what the data looks like and will take in virtually anything as long as it's syntactically correct.

## Why they are important

Even when you are using MongoDB, an inherently schema-less database, a schema can be very helpful. It helps control what is going into the database so that you can both know what is going into it, and to make validations. Note that with MongoDB, even if a piece of data is not a part of your original schema, you can still store it.

## Mongoose

This is where mongoose comes in. Instead of manually making sure everything we are putting into our database makes sense and conforms to some type of structure, Mongoose allows us to define schemas.

Mongoose, in the background, can enforce these schemas (as strictly as you like) in order to make sense of the data going into the database and to allow validation. It provides powerful and simple to use tools to do this.

# The Exercise

## Building a Schema

Lets design a schema using mongoose and then use it to create some documents and eventually query for those documents.

1. Create a folder inside your `vampire_app` called `models`.

2. Create a file inside your `models` folder called `vampire.js` (**singular**). You will create your schema and model in this file.

To start your schema:
```javascript
const vampireSchema = new Schema({
  //write your schema fields here

});
```

A typical object in our vampire collection will look something like this:

``` javascript
const vampire = {
  name: 'Count Chocula',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal','marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2,
}
```

3. Build a vampire **schema** and **model** that matches the object above. Export your model.

>Pause. Take a minute to do a little research and come up with an answer to this question: What's the difference between a _Schema_ and a _Model_?

4. Go to the Mongoose documentation to learn more about validations and defaults: http://mongoosejs.com/docs/api.html

5. The **name field is required**, so make sure that the schema accommodates for that.

6. Also, **no vampire will have less than 0 victims**, so add that into the schema as a validation.

7. Lastly, set the **default value of the hair color to blonde**.

8. Set up your `vampire_app.js` file to connect to your `vampires` database.

9. You may now test your schema with the automated tests by running ```npm test``` in your terminal.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 - made a schema"
<hr>

## Inserting using mongoose

Insert into the database using **create** method:

### Add the vampire data that we gave you

1. Using the js objects of vampires in `populateVampires.js`, add the vampires to a vampires collection.

You can do this simply by providing this array to the insert method and it will create a document for each object in the array.

- You have a choice to either paste the entire array into this insert command OR you could just export the array into a variable and insert it with the variable name.

```javascript
Vampire.collection.insertMany(vampireData,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });
```

# Part 1: 

### Add some new vampire data

1. Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - added data into vampire collection"
<hr>

## Querying
### Select by comparison

Write a different query for each of the following:

1. Find all the vampires that that are females
2. have greater than 500 victims
3. have fewer than or equal to 150 victims
4. have a victim count is not equal to 210234
5. have greater than 150 AND fewer than 500 victims

<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - queried for vampires"
<hr>

### Select by exists or does not exist
Select all the vampires that:

1. have a title property
2. do not have a victims property
3. have a title AND no victims
4. have victims AND the victims they have are greater than 1000

<hr>
&#x1F534; The commit message should read: <br>
"Commit 4 - selected vampires"
<hr>

### Select with OR
Select all the vampires that:

1. are from New York, New York, US or New Orleans, Louisiana, US
2. love brooding or being tragic
3. have more than 1000 victims or love marshmallows
4. have red hair or green eyes

<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - selected more vampires"
<hr>

# Part 2

### Before you continue on to part two: check it out/remember: Mongoose has some sweet helper functions that can make all this a little easier. See below

Mongoose's default find gives you an array of objects.  But what if you know you only want one object?  These convenience methods just give you one object without the usual array surrounding it.

```javascript
Article.findById('5757191bce5579b805705900', (err, article)=>{
  console.log(article);
});
```
```javascript
Article.findOne({ author : 'Matt' }, (err, article)=>{
  console.log(article);
});
```
```javascript
Article.findByIdAndUpdate(
  '5757191bce5579b805705900', // id of what to update
  { $set: { author: 'Matthew' } }, // how to update it
  { new : true }, // tells findOneAndUpdate to return modified article, not the original
  (err, article)=>{
    console.log(article);
  });
});
```
```javascript
Article.findOneAndUpdate(
  { author: 'Matt' }, // search criteria of what to update
  { $set: { author: 'Matthew' } }, // how to update it
  { new : true }, // tells findOneAndUpdate to return modified article, not the original
  (err, article)=>{
    console.log(article);
  });
});
```
```javascript
Article.findByIdAndRemove('5757191bce5579b805705900', (err, article)=>{
  console.log(article); // log article that was removed
});
```
```javascript

Article.findOneAndRemove({ author : 'Matt' }, (err, article)=>{
  console.log(article); // log article that was removed
});
```


### 6\. Select objects that match one of several values
Select all the vampires that:

1. love either frilly shirtsleeves or frilly collars
2. love brooding
3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - selected even more vampires"
<hr>

### 7\. Negative Selection
Select all vampires that:

1. love ribbons but do not have brown eyes
2. are not from Rome
3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
5. have not killed more than 200 people

<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - used negative selections on vampire data"
<hr>

## 8\. Replace

1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'

<hr>
&#x1F534; The commit message should read: <br>
"Commit 8 - replaced vampire data"
<hr>

## 9\. Update

1. Update 'Guy Man' to have a gender of 'f'
2. Update 'Eve' to have a gender of 'm'
3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
5. Rename 'Eve's' name field to 'moniker'
6. We now no longer want to categorize female gender as "f", but rather as **fems**. Update all females so that the they are of gender "fems".

<hr>
&#x1F534; The commit message should read: <br>
"Commit 9 - updated vampire data"
<hr>

## 10\. Remove

1. Remove a single document wherein the hair_color is 'brown'
2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
<hr>

<hr>
&#x1F534; The commit message should read: <br>
"Commit 10 - remove vampire data"
<hr>

# Hungry for more

1. Make an index route that will `res.send()` (or even better--`res.json()`--look it up!) the json of all the data in our database.

2. If number 1 was easy, try to connect your database to your application and show a proper index page that displays your vampire data. If this is also easy, create a show page as well where you are showing individual vampire data.

3. Have extra time? Try out a few more problems on [CodeWars](https://www.codewars.com/)

<hr>
&#x1F534; The commit message should read: <br>
"Commit 11 - tackled some Hungry for More"
<hr>
