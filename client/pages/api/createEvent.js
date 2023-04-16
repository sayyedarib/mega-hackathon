import connection from "../../utils/connection";
import Event from "../../models/Event.model";

export default async function createEventHandler(req, res) {
  await connection();

  const { method, body } = req;
  switch (method) {
    case "POST":
      const event = await Event.create(body);

      res.status(201).json({
        id: event._id,
        name: event.name,
        day_of_event: event.day_of_event,
        eventdate: event.eventdate,
        start_end_time: event.start_end_time,
        building_location: event.building_location,
        map_location: event.building_location,
        theme: event.building_location,
        description: event.building_location,
      });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
