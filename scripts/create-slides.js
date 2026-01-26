import puppeteer from 'puppeteer';
import fs from 'fs';
import {fileURLToPath} from 'node:url';
import path, {dirname} from 'path';

const resourceId = process.argv[2];
const baseUrl = process.argv[3] || 'http://localhost';

if (!resourceId) {
    console.error('Usage: node create-slides.js <resource_id> [base_url]');
    process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = path.join(__dirname, '..', 'slides-output', resourceId);

async function createSlides() {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });

    for (let pageNum = 1; pageNum <= 3; pageNum++) {
        const url = `${baseUrl}/resource/${resourceId}/slide/${pageNum}`;
        console.log(`Capturing: ${url}`);

        await page.goto(url, { waitUntil: 'networkidle0' });

        const outputPath = path.join(outputDir, `slide-${pageNum}.png`);
        await page.screenshot({ path: outputPath, type: 'png' });

        console.log(`Saved: ${outputPath}`);
    }

    await browser.close();
    console.log('Done!');
}

createSlides().catch(err => {
    console.error(err);
    process.exit(1);
});
