import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Persons = new Mongo.Collection('persons');

Meteor.methods({
  'Persons.addOne': ({ name }) => {
    console.log(this.userId)
    return Persons.insert(name );
  },
});

// ADD THIS
Meteor.publish('persons', ()=> {
    return Persons.find({
      $or: [
       
        { user: this.userId },
      ],
    });
  });

export default Persons;