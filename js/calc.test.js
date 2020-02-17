const { pyth } = require("./calc");
const puppeteer = require("puppeteer");

test("testa pyth 3, 4 ska bli 5", () => {
    expect(pyth(3, 4)).toBe(5); 
});
test("testa pyth 5, 12 ska bli 13", () => {
    expect(pyth(5, 12)).toBe(13); 
});
test("testa pyth 7, 24 ska bli 25", () => {
    expect(pyth(7, 24)).toBe(25); 
});

test("Vad som ska göras", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 70,
    args: ["--window-size=1920, 1080"]
  });
  const page = await browser.newPage();
  await page.goto(
  "file:///C:/Users/sebastian.samuelsso/Downloads/mattesidan/index.html"
  );
// vad som ska göras på sidan
await page.click("#a");
await page.type("#a", "3");
await page.click("#b");
await page.type("#b", "4");
await page.click("#submit");
const final_result = await page.$eval("#Svar", el => el.textContent);
await expect(final_result).toBe("5");


});
