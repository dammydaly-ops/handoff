# Handoff

Describe an automation in plain words. Handoff builds it and connects it to WhatsApp, Facebook and Instagram.

This is the front-end prototype as an installable app (PWA). All data is demo data. There is no backend, real login, payment or Meta connection yet.

## Run it

Open `www/index.html`, or serve it so the install button and offline mode work:

```bash
npx serve www
```

## Put it online (free) and install it on your phone

1. Create a new GitHub repository and push this folder to the `main` branch.
2. In the repo: Settings > Pages > Source: **GitHub Actions**.
3. Wait for the "Deploy to GitHub Pages" action to finish. Your app lives at `https://YOUR-NAME.github.io/REPO-NAME/`.
4. Open that link on your phone.
   - Android (Chrome): menu > **Install app**. Or Settings inside Handoff > Install app.
   - iPhone (Safari): Share > **Add to Home Screen**.

It opens full screen with its own icon and works offline after the first visit.

## Make an Android APK (optional)

Needs Node.js and Android Studio on your computer.

```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

In Android Studio: Build > Build Bundle(s) / APK(s) > Build APK(s).

## Structure

- `www/` the whole app (HTML, CSS, JS, fonts, icons, service worker)
- `www/manifest.webmanifest` app name, icons, start page
- `www/sw.js` offline cache. Bump `V` in this file after you change any file, so installed apps update.
- `capacitor.config.json` Android wrapper settings
