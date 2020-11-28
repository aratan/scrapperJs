const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://amazon.es');
  const title = await page.url();
  console.log(title, url);
  await page.type('#twotabsearchtextbox', 'naranjas');
  await page.click('.nav-search-submit input');
  // #search
  //await page.screenshot({path: 'example.png'});

  await browser.close();
})();

