!!!include(includes/header.md)!!!

# Linux

## Hardware

Anything with enough RAM (cause chromium is not so lightweight) will be ok.

## Software installation

We're about to install obscreen-player on your Linux device. It consists of a long running systemd service and a script that will install chromium, x11, pulseaudio on your device.

Log into your Linux device locally or via ssh (by default it's `ssh your_user_name@your_host_name`)

!!!include(includes/linux-player-installation.md)!!!

## How to restart

Just use systemctl by executing `sudo systemctl restart obscreen-player.service`

## Screen Resolution configuration

!!!include(includes/set-screen-resolution.md)!!!

## Playlist configuration

Playlist URL is set in file `var/run/play` under variable `STUDIO_URL`.
You can change it by editing the file and fill it with either:

!!!include(includes/playlist-configuration.md)!!!

!!!include(includes/footer.md)!!!