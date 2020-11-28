const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto("https://reactjs.org/");
    /*const title = await page.url();
    console.log(title, url);
    await page.type('#twotabsearchtextbox', 'naranjas');
    await page.click('.nav-input input');
    // #search
    */
   const leerDatos = await page.evaluate(()=>{
    const datosCapturados = document.querySelector('.css-1s44ra')
    return datosCapturados.innerHTML 
   })
   
    await page.screenshot({
        path: 'example.png'
    });

    console.log(leerDatos)

    await browser.close();
})();