import mongoose, { Model, Schema } from "mongoose";

export interface IEvent extends Document {
  readonly id: string;
  readonly name: string;
  readonly day_of_event: string;
  readonly eventdate: string;
  readonly start_end_time: string;
  readonly building_location: string;
  readonly map_location: string;
  readonly theme: string;
  readonly description: string;
}

const eventSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  day_of_event: String,
  eventdate: Date,
  start_end_time: {
    type: String,
    required: true,
  },
  building_location: {
    type: String,
    required: true,
  },
  map_location: {
    type: String,
    required: true,
  },
  theme: String,
  description: String,
});

let Event: Model<IEvent>;
try {
  Event = mongoose.model<IEvent>("Event");
} catch (error) {
  Event = mongoose.model<IEvent>("Event", eventSchema);
}
export default Event;
