import Head from "next/head";
import styles from "@/styles/components/Home.module.css";
import axios from "axios";
import { BACKEND_URL } from "next.config";
import EventCard from "@/components/EventCard";

export default function Home({ events }) {
  // const { title, date, time, desc, category, location, link } = events;
  return (
    <>
      <Head>
        <title>Climate App</title>
        <meta name="description" content="Climate awareness app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>hello</h3>
        <div className={styles.eventsList}>
        {events.map(({ title, date, time, desc, category, location, link,pic }) => {
     return (    <EventCard
            title={title}
            date={date}
            time={time}
            desc={desc}
            link={link}
            pic={pic}
          />);
        })}
</div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const url = `${BACKEND_URL}/api/events/scrappedEvents`;
  const res = await axios.get(url);

  return {
    props: {
      events: res.data,
    },
  };
};
