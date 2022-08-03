const fs = require('fs').promises
const scrapeIt = require('scrape-it');

const MEETUP_URL = 'https://www.meetup.com/charmcityjs/events';

(async () => {
  try {
    const { data } = await scrapeIt(MEETUP_URL, {
      name: 'h1.groupHomeHeader-groupName',
      events: {
        listItem: '.eventList-list > li',
        data: {
          title: '.eventCardHead--title',
          path: {
            selector: 'a.eventCard--link',
            attr: 'href'
          }
        }
      }
    })

    console.log('Writing to meetups.json:', data)
    await fs.writeFile('./data/meetups.json', JSON.stringify(data))

    process.exit(0)
  } catch(e) {
    console.error(e)
    process.exit(1)
  }
})()
