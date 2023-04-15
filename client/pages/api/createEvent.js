import connection from "../../utils/connection";
import Event from "../../models/Event";

export default async function createEventHandler(req, res) {
  console.log("CONNECTED TO MONGO");
  await connection();
  console.log("CONNECTED TO MONGO");

  const { method, body } = req;
  switch (method) {
    case "POST":
      const event = await Event.create(body);

      res.json({ event });

      res.status(201).json({
        id: number,
        name: string,
        // day_of_event: string,
        // eventdate: Date,
        // start_end_time: string,
        // building_location: string,
        // map_location: string,
        // theme: string,
        // description: string,
      });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
