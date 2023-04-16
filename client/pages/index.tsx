import { GetServerSideProps } from "next";
import { Container, List, Text, Title } from "@mantine/core";
import { FC } from "react";
import { pick, omitBy, isUndefined } from "lodash-es";
import Event from "../models/Event.model";

type HomePageEvent = {
  readonly id: string;
  readonly name?: string;
  readonly day_of_event?: string;
  readonly eventdate?: string;
  readonly start_end_time?: string;
  readonly building_location?: string;
  readonly map_location?: string;
  readonly theme?: string;
  readonly description?: string;
};

type HomePageProps = {
  readonly events: HomePageEvent[];
};

const HomePage: FC<HomePageProps> = ({ events }) => {
  return (
    <Container size="xs" p="lg">
      <Title order={2} underline color="silver">
        Events
      </Title>
      <List size="lg" listStyleType="none" p="xl">
        {events.map((event) => {
          const {
            id,
            name,
            day_of_event,
            eventdate,
            start_end_time,
            building_location,
            map_location,
            theme,
            description,
          } = event;

          let formatDate: string;
          if (event.eventdate) {
            const dateObj = new Date(parseInt(event.eventdate));

            formatDate = dateObj.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              //second: 'numeric',
              hour12: true,
            });
          } else {
            formatDate = "No date announced yet, please check back later!";
          }

          return (
            <List.Item key={id}>
              {name}
              <br />
              {day_of_event}, {eventdate}
              <br />
              {start_end_time}
              <br />
              {building_location}
              <br />
              {map_location}
              <br />
              {theme}
              <br />
              {description}
            </List.Item>
          );
        })}
      </List>
    </Container>
  );
};
export default HomePage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  const events = await Event.find().exec();
  const eventObjects = events.map((event) => {
    const properties = pick(
      event,
      "name",
      "day_of_event",
      "start_end_time",
      "building_location",
      "map_location",
      "theme",
      "description"
    );
    return {
      id: event._id.toString(),
      eventdate: event.eventdate?.toString() ?? null,
      ...omitBy(properties, isUndefined),
    };
  });
  return {
    props: {
      events: eventObjects,
    },
  };
};
