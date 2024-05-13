const{crawlPage} = require('./crawl.js')
const{printReport} = require('./report.js')


async function main(baseURL) {
    
console.log(`starting crowl of ${baseURL}`)

try {
    const pages = await crawlPage(baseURL, baseURL, {});
    console.log('Crawling completed:', pages);
    printReport(pages);
    return pages;
} catch (error) {
    console.error('Error during crawling:', error);
    throw error; // Propagate the error to the caller
}
// const pages = await crawlPage(baseURL, baseURL, {})

// let dataArray = Object.entries(pages)

// const newDataArray = dataArray.map(([url, number]) => ({ url, number }))
// const data = { urls: newDataArray };


// printReport(pages)
// console.log(data);
// return data
};


main()
