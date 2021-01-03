var edge = require('selenium-webdriver/edge');
const web = require("selenium-webdriver");


async function example(address) {
    let options = new edge.Options();
    options.setEdgeChromium(true);
    let driver = edge.Driver.createSession(options);
    driver.get('https://opportunityatlas.org/');
    await new Promise(r => setTimeout(r, 15000));
    await driver.findElement(web.By.xpath(`/html/body/div[3]/div[2]/div[1]/p[5]/button`)).click();
    await new Promise(r => setTimeout(r, 5000));
    let element = await driver.findElement(web.By.xpath(`/html/body/div[2]/div[1]/div[14]`));
    await driver.executeScript(`var element = arguments[0]; element.parentNode.removeChild(element);`, element)    
    await driver.findElement(web.By.xpath(`/html/body/div[2]/div[1]/div[2]/div[3]/div[2]/input`)).sendKeys(address);
    await new Promise(r => setTimeout(r, 5000));
    await driver.findElement(web.By.xpath(`/html/body/div[2]/div[1]/div[2]/div[3]/div[2]/input`)).sendKeys(web.Key.ENTER);
    await new Promise(r => setTimeout(r, 5000));

}


example("2234 167th Avenue SouthEast, Bellevue, WA, 98008"); 