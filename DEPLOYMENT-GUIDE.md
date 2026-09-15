# 🚀 How to Deploy Your Portfolio For FREE

You have a beautiful colorful portfolio ready to go! Here are **4 free ways** to put it online.

## Option 1: GitHub Pages (Recommended — Easiest)

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com) and sign up (free)
2. Verify your email

### Step 2: Create a Repository
1. Click the **"+"** icon (top right) → **New repository**
2. Name it: `yourusername.github.io` (replace with your username)
   - Example: if your username is `amirmahdi`, the repo is `amirmahdi.github.io`
3. Make it **Public**
4. Click **Create repository**

### Step 3: Upload Your Files
1. You'll see an upload page. Click **"uploading an existing file"**
2. Drag and drop ALL these files into the browser:
   - `index.html`
   - `case-study.html`
   - `main.js`
   - `styles-colorful.css`
   - `styles.css` (keep as backup)
   - `assets/` folder (with all images)
3. Scroll down and click **Commit changes**

### Step 4: Go Live! 🎉
- Wait 2-3 minutes
- Visit: `https://yourusername.github.io`
- **Your site is now LIVE on the internet FOR FREE!**

---

## Option 2: Netlify (Drag & Drop — Easiest for Beginners)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **"Sites"** in the top navigation
3. Drag and drop your **entire project folder** onto the page
4. Wait 30 seconds
5. Your site is live at a random URL like: `https://random-name.netlify.app`
6. You can rename it by clicking **Site settings → Change site name** → `amirmahdi.netlify.app`

---

## Option 3: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click **"New Project"**
3. If you don't have GitHub connected, use:
   - Click **"Deploy without Git"** or
   - Or simply drag your folder into the Vercel dashboard
4. Your site goes live instantly: `https://your-site.vercel.app`

---

## Option 4: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign up (free)
2. Connect your GitHub account
3. Create a new Pages project
4. Select your repository (use the same GitHub repo from Option 1)
5. Framework preset: **None** (just static files)
6. Build command: **leave empty**
7. Output directory: **leave empty** (or `/`)
8. Click **Deploy**

---

## Optional: Free Custom Domain-Style URL

Don't have money for a domain? No problem:

- **Netlify:** yоurname.netlify.app
- **Vercel:** yourname.vercel.app
- **GitHub Pages:** yourname.github.io
- **Cloudflare:** yourname.pages.dev

All are **100% FREE** and look professional!

---

## Config files you should add

Create a `netlify.toml` file in your project folder for Netlify:
```toml
[build]
  command = ""
  publish = "/"
```

For GitHub Pages, add a file called `.nojekyll` (empty file) in your folder to avoid issues with your underscore-prefixed files.

---

## Need a domain later? (Free options)

- **freenom.com** — free `.tk`, `.ml`, `.ga` domains
- **Netlify/Vercel** give you free subdomains to start
- Most free hosts let you connect a custom domain later when you're ready

---

## 🚀 Step 5: Get Google to Show Your Site in Search Results (FREE)

Once your site is live (any URL from the options above), this is how
you make it appear on Google when people search your name. All free.

### 5.1 — Google Search Console (the "talk to Google" dashboard)

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in with any Google account (free)
2. Click **"Add property"** → choose **URL prefix**
3. Paste your live URL:
   - Netlify       → `https://yourname.netlify.app`
   - GitHub Pages  → `https://yourname.github.io`
   - Vercel        → `https://yourname.vercel.app`
   - Cloudflare    → `https://yourname.pages.dev`
4. **Verify ownership.** Two easy free methods (pick ONE):
   - **HTML tag:** copy the `<meta name="google-site-verification" ...>`
     tag Google shows you, paste it into the `<head>` of your
     `index.html`, re-upload, then click **Verify**.
   - **HTML file:** download the `google*.html` file Google gives you,
     drop it in your project folder, re-upload, click **Verify**.
5. Click **Verify** — you now own the property in Search Console. ✅

### 5.2 — Tell Google to crawl your site

1. In Search Console, go to the **Sitemaps** page (left menu)
2. Paste: `sitemap.xml`
3. Click **Submit** — you should see **"Success"** within a minute.

### 5.3 — Manually request indexing (fastest first alert)

1. Use the **URL Inspection** tool (search bar at the top)
2. Paste your homepage URL (e.g. `https://yourname.netlify.app/`)
3. Click **Request Indexing** ("Request public indexing")
4. Do the same for each page you want found (case-study.html, etc.)

### 5.4 — After the first crawl (a few days to ~3 weeks)

- Your pages switch from **"Discovered – currently not indexed"** to
  **"Indexed"** and **"Page indexing" → Success** in the inspection tool.
- Each time you update the site, Search Console re-crawls automatically.
- Do NOT re-submit or spam — let Google work; it self-corrects.

> 💡 **Your site will show up for searches like `amirmahdi` and
> `amirmahdi developer portfolio` once indexed.** It's 100% free and
> no domain purchase is ever needed.

---

## Quick Summary

| Host | URL Format | Easiest Way | Perfect For |
|------|-----------|-------------|-------------|
| GitHub Pages | `user.github.io` | Upload to GitHub | Developers |
| Netlify | `site.netlify.app` | Drag & Drop | Beginners |
| Vercel | `site.vercel.app` | Drag & Drop | Frontend lovers |
| Cloudflare | `site.pages.dev` | GitHub Connect | Speed lovers |

**You have $$$0 budget but a full-featured portfolio. Go share it!** 🎉