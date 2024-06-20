const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file:///C:/xampp/htdocs/pdfdrive/fish.html", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });
  await page.pdf({
    path: "file:///C:/Users/Fisher/Downloads/your.pdf",
    format: "A4",
  });

  await browser.close();
})();
