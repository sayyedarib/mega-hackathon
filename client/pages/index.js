import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/components/Home.module.css";
import axios from "axios";
import { BACKEND_URL } from "next.config";
import EventCard from "@/components/EventCard";
import NewsCard from "@/components/NewsCard";
import Navbar from "@/components/Navbar";
export default function Home({ events, news }) {
  const [category, setCategory] = useState("event");
  return (
    <>
      <Head>
        <title>Climate App</title>
        <meta name="description" content="Climate awareness app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </Head>

      <Navbar />
      <main className={styles.main}>
        <div className={styles.eventsList}>
          <div className={styles.category}>
            <span onClick={() => setCategory("event")}>Events</span>
            <span onClick={() => setCategory("news")}>News</span>
          </div>
          {category == "event" &&
            events.map(
              ({ title, date, time, desc, category, location, link, pic }) => {
                return (
                  <EventCard
                    title={title}
                    date={date}
                    time={time}
                    desc={desc}
                    link={link}
                    pic={pic}
                  />
                );
              }
            )}
          {category == "news" &&
            news.map((data) => {
              return (
                <NewsCard
                  title={data.title}
                  date={data.pubDate}
                  desc={data.description}
                  link={data.link}
                />
              );
            })}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const url = `${BACKEND_URL}/api/events/scrappedEvents`;
  const res = await axios.get(url);

  //max api free api request limit reached :)
  // const { data } = await axios.get(
  //   "https://newsdata.io/api/1/news?apikey=pub_200895c1c7a5ae5145cde32065bb47126c576&q=climate"
  // );

  return {
    props: {
      events: res.data,
      // news: data.results,
    },
  };
};
