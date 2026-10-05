# FaysalAhmedAIERP Personal Website

This package is a completed static website designed for:
- Personal brand: FaysalAhmedAIERP
- Search-engine visibility
- AI/search discoverability
- Recruiters and professional networking
- Free static hosting with a GoDaddy-purchased custom domain

## Recommended setup
Buy only the domain `faysalahmedaierp.com` from GoDaddy, then host this website free on GitHub Pages.

### Why
GoDaddy domain registration and web hosting are separate products. You do not need paid GoDaddy hosting for this static website. GitHub Pages can host the site for free, and your GoDaddy domain can point to it.

## 1. Preview on your Windows PC
Install Python if needed, then double-click/run:

    python serve.py

Open:
    http://localhost:8000

## 2. Add your YouTube introduction video
Open `site-config.js`.

Replace:
    PASTE_YOUR_YOUTUBE_VIDEO_URL_HERE
with the full YouTube URL.

Replace:
    PASTE_YOUR_YOUTUBE_VIDEO_ID_HERE
with the video ID.

Example:
YouTube URL:
    https://www.youtube.com/watch?v=ABC123XYZ

Video ID:
    ABC123XYZ

## 3. Publish free with GitHub Pages
1. Sign in to GitHub.
2. Create a PUBLIC repository named:
       faysalahmedaierp
3. Upload all files and folders from this package to the repository root.
4. Open repository Settings -> Pages.
5. Under Build and deployment, select:
       Deploy from a branch
6. Select branch:
       main
   and folder:
       / (root)
7. Save.
8. Wait for GitHub Pages to publish.

## 4. Connect your GoDaddy domain
After buying `faysalahmedaierp.com`:
1. In GitHub repository -> Settings -> Pages -> Custom domain:
       faysalahmedaierp.com
2. GitHub will show the DNS records it expects.
3. In GoDaddy -> My Products -> Domains -> DNS:
   Add the exact DNS records GitHub displays.
4. After DNS validation, enable HTTPS in GitHub Pages.

Important: DNS values can change. Use the exact current records shown by GitHub Pages instead of copying old values from random tutorials.

## 5. Google and Bing indexing
After the domain is live:
1. Add the website to Google Search Console.
2. Verify domain ownership.
3. Submit:
       https://faysalahmedaierp.com/sitemap.xml
4. Add the site to Bing Webmaster Tools.
5. Submit the same sitemap.
6. Keep robots.txt, sitemap.xml, JSON-LD, ai-profile.json and llms.txt in the site root.

## 6. Universal branding
Use these consistently:
- Real name: Faysal Ahmed
- Universal digital brand: FaysalAhmedAIERP
- Website: https://faysalahmedaierp.com/
- GitHub: https://github.com/FaysalAhmedAIERP
- LinkedIn: https://www.linkedin.com/in/faysalahmedsanil/

## 7. Important accuracy note
Before publishing, review every public claim. Only publish titles, qualifications, projects and work details you can support. The Books & Software section currently lists selected titles visible in the screenshot you supplied and does not claim that they are commercially published.

## Files included
- index.html
- styles.css
- script.js
- site-config.js
- robots.txt
- sitemap.xml
- llms.txt
- ai-profile.json
- manifest.webmanifest
- 404.html
- serve.py
- assets/faysal-ahmed-profile.jpg
- assets/Faysal_Ahmed_CV.pdf
- assets/social-card.png
- assets/favicon.svg
