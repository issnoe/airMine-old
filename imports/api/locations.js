import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Locations = new Mongo.Collection('Locations');

Meteor.methods({
    'Locations.addOne': ({ geoLocation }) => {
        return Locations.insert({
            geoLocation
            ,createdAt: new Date(),
            owner: Meteor.userId(),
        });
    },
});

// ADD THIS
Meteor.publish('Locations', () => {
    return Locations.find();
});

export default Locations;