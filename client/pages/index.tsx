import { GetServerSideProps } from "next";
import { Container, List, Text, Title } from "@mantine/core";
import { FC } from "react";

type HomePageEvent = {
  readonly id: number;
  readonly name: string;
  // readonly description: string;
};

//Home
type HomePageProps = {
  readonly events: HomePageEvent[];
};

const HomePage: FC<HomePageProps> = ({ events }) => {
  return (
    <Container size="xs">
      <Title order={2} underline>
        Events
      </Title>
      <List size="lg" listStyleType="none" p="sm">
        {events.map((event) => {
          const { id, name } = event;
          return <List.Item key={id}>{name}</List.Item>;
        })}
      </List>
    </Container>
  );
};
export default HomePage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  return {
    props: {
      events: [
        {
          id: 1,
          name: "World Children's Day",
        },
        {
          id: 2,
          name: "International Day of Democracy",
        },
      ],
    },
  };
};
