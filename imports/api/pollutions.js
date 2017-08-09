import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Pollutions = new Mongo.Collection('pollutions');

Meteor.methods({
    'Pollutions.addOne': ({ geoLocation }) => {
        return Pollutions.insert({
            geoLocation
            ,createdAt: new Date(),
            owner: Meteor.userId(),
        });
    },
});

// ADD THIS
Meteor.publish('Pollutions', () => {
    return Pollutions.find();
});

export default Pollutions;