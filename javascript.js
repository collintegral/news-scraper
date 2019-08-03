import axios from 'axios';
import cheerio from 'cheerio';

const gatherArticles = () => {
    axios.get('www.nytimes.com').then(result => {
        const articles = [];

        // input the code here that will reference the various divs on the website and parse out the needed information using Cheerio
        // Needs the headline, a summary, and the url
        // Add it as an object to the articles array
        return articles;
    })
}

module.exports = gatherArticles;