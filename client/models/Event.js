import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //   day_of_event: String,
  //   eventdate: Date,
  //   start_end_time: {
  //     type: String,
  //     required: true,
  //   },
  //   building_location: {
  //     type: String,
  //     required: true,
  //   },
  //   map_location: {
  //     type: String,
  //     required: true,
  //   },
  //   theme: String,
  //   description: String,
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
