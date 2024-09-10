# Browser

Browser is the core of any Obscreen Player and you only need a web browser to run it.
Be aware that some browser doesn't support all HTML5 features, so you may experience some issues with video playback.


## Chromium browser

When you run the browser yourself, don't forget to use these flags for chromium browser:

::: warning Important
Sometimes chromium command is named `chromium` or `chromium-browser`.<br />
Don't forget to replace **`<YOUR_STUDIO_URL>`** with your central Server Studio instance url.
:::

```bash
chromium \
  --disk-cache-size=2147483648 \
  --disable-features=Translate \
  --ignore-certificate-errors \
  --disable-web-security \
  --disable-restore-session-state \
  --autoplay-policy=no-user-gesture-required \
  --start-maximized \
  --allow-running-insecure-content \
  --remember-cert-error-decisions \
  --noerrdialogs \
  --single-process \
  --kiosk \
  --incognito \
  --window-position=0,0 \
  --window-size=1920,1080 \
  --display=:0 \
  <YOUR_STUDIO_URL>
```


## Playlist configuration

Just open your web browser and either go to:

!!!include(includes/playlist-configuration.md)!!!

