const selenium = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// Create a new instance of the chrome driver with hidden window
const driver = new selenium.Builder()
  .forBrowser("chrome")
  .setChromeOptions(new chrome.Options().headless())
  .build();

const doStuff = async () => {
  // go to google.com
  await driver.get("https://google.com");
  // find the search input
  const searchInput = await driver.findElement(selenium.By.name("q"));
  // type "inceptionum" into the search input
  await searchInput.sendKeys("inceptionu\n");
  // click the first search result
  const firstResult = await driver.findElement(selenium.By.css("h3"));
  await firstResult.click();
  // wait for the page to load
  await driver.wait(
    selenium.until.elementLocated(selenium.By.css("main")),
    10000
  );
  // get the page title
  const title = await driver.getTitle();
  console.log("The title of the page is", title);
  // close the browser
  await driver.quit();
};

doStuff();
