const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    /* Dirección */
    const page = await browser.newPage();
    await page.goto("https://reactjs.org/");
    /* Acciones a realizar */
    const leerDatos = await page.evaluate(() => {
        const datosCapturados = document.querySelectorAll('.css-1s44ra')
        return datosCapturados[0].innerHTML
    })
    console.log(leerDatos)
    
    /* captura imagen de pantalla */
    await page.screenshot({
        path: 'example.png'
    });

    
    /* siempre cerrar */
    await browser.close();
})();
