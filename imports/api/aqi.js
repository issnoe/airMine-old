import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Aqi = new Mongo.Collection('Aqi');

Meteor.methods({
    'Aqi.addOne': ({ aqi }) => {
        return Aqi.insert({
            aqi
            ,createdAt: new Date(),
            
        });
    },
});

// ADD THIS
Meteor.publish('Aqi', () => {
    return Aqi.find();
});

export default Aqi;