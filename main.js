const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    /* Dirección */
    const page = await browser.newPage();
    const url = 'https://reactjs.org/'
    await page.goto(url);

    // control de errores
    try {

        /* Acciones a realizar */
        const leerDatos = await page.evaluate(() => {
            const datosCapturados = document.querySelectorAll('.css-1s44ra');
            return datosCapturados[0].innerHTML
        })
        console.log(leerDatos)

        /* captura imagen de pantalla */
        await page.screenshot({
            path: 'antes.png'
        });
        /**/

        /* click */
        const button = await page.evaluateHandle(() => document.querySelector('.css-1ezwgyu'));
        await button.click();

        /* captura imagen de pantalla */
        await page.screenshot({
            path: 'despues.png'
        });
        /**/

    // Control de errores    
    } catch (error) {
        console.log(`failed to open the page: ${url} with the error: ${error}`);
    }
    /* siempre cerrar */
    await browser.close();
    process.exit()
})();