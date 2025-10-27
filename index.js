const express = require('express');
const app = express();

const { initializeDatabase } = require('./db/db.connect');
const Event = require('./model/event.model');

const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

initializeDatabase();

app.get('/', (req, res) => {
  res.send('Welcome to the Meetup App Backend');
});

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    if (events.length != 0) {
      res.send(events);
    } else {
      res.status(404).json({ error: 'No events found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the data.', error });
  }
});

const addEvents = async (event) => {
  try {
    const newEvent = new Event(event);
    const savedEvent = await newEvent.save();
    return savedEvent;
  } catch (error) {
    console.log(error);
  }
};

app.post('/events', async (req, res) => {
  try {
    const addEvent = await addEvents(req.body);
    if (addEvent) {
      res
        .status(200)
        .json({ message: 'Event added successfully', event: addEvent });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to add the event.' });
  }
});

PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
