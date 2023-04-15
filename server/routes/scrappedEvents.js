const router = require("express").Router();
const { load } = require("cheerio");
const puppeteer = require("puppeteer");

const url = "https://www.un.org/en/climatechange/events";

router.get("/", async (req, res) => {
  try {
   const events =await handler();
   res.status(200).json(events);
  } catch (err) {
    res.status(400).send("something wrong in scrapping events")
  }
});

const handler = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0");
    await page.goto(url);
    const html = await page.content();
    const $ = load(html);
    const events = [];
    $("div.views-field.views-field-nothing .event-container").each((i, el) => {
      const title = $(".event-content .content-wrapper h3 strong", el)
        .text()
        .trim();
      const date = $(".event-date", el).text().trim();
      const time = $(".event-time .date-display-single", el).text().trim();
      const desc = $(".event-content .content-wrapper p", el).text().trim();
      const link = $(".event-content .content-wrapper .pull-right a", el).attr(
        "href"
      );
      const pic =$(".event-container .event-image img", el).attr("src");
      const category = $(".event-container .event-category", el).text().trim();
      const location = $(".event-container .event-location", el).text().trim();
      events.push({ title, date, time, desc, category, location, link, pic });
    });
    return events;
};

module.exports=router;