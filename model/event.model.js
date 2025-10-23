const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
      enum: ['Offline Event', 'Online Event'],
    },
    date: {
      type: Date,
      required: true,
    },
    host: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    dressCode: {
      type: String,
    },
    ageLimit: {
      type: Number,
    },
    eventTags: [
      {
        type: String,
      },
    ],
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    speakerNames: [
      {
        type: String,
      },
    ],
    speakerDesignation: [
      {
        type: String,
      },
    ],
    eventPhotoUrl: {
      type: String,
      required: true,
    },
    speakerPhotoUrl: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
