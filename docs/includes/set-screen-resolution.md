Screen resolution is set in file `var/run/play` under variable `TARGET_RESOLUTION`.
You can change it by editing the file and fill it with a supported resolution

To get the list of supported resolutions just run: `DISPLAY=:0 xrandr`
Then replace `TARGET_RESOLUTION=auto` with your preferred resolution. (e.g. `TARGET_RESOLUTION=1920x1080`)