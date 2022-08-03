const scrapeIt = require('scrape-it');

const MEETUP_URL = 'https://www.meetup.com/charmcityjs/events';
console.log('Scraping', MEETUP_URL);
scrapeIt(MEETUP_URL, {
  events: {
    listItem: '.eventList-list > li',
    data: {
      title: '.eventCardHead--title'
    }
  }
})
.then(({ data }) => {
  console.log(data);
  process.exit(0);
})
