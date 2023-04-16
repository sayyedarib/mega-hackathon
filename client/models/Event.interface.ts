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
