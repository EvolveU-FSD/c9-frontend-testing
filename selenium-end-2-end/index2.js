const selenium = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
// Create a new instance of the chrome driver with hidden window
const driver = new selenium.Builder()
  .forBrowser("chrome")
  .setChromeOptions(new chrome.Options().headless())
  .build();

const main = async () => {
  await driver.get("https://c9-superheroes-server-production.up.railway.app/");
  // wait until a button with text "Login" is found
  await driver.wait(
    selenium.until.elementLocated(selenium.By.xpath("//a[text()='Login']"))
  );
  // click the button
  await driver.findElement(selenium.By.xpath("//a[text()='Login']")).click();
  const email = "test@test.com";
  const password = "Password.123";
  // find input box with id username
  await driver.findElement(selenium.By.id("username")).sendKeys(email);
  // find input box with id password
  await driver.findElement(selenium.By.id("password")).sendKeys(password);
  // find the button with the name "action"
  await driver.findElement(selenium.By.name("action")).click();
};

main();
