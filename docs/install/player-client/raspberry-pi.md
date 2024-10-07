!!!include(includes/header.md)!!!

# Raspberry Pi


## Hardware

First, grab a Raspberry Pi. Version 4 or later is ideal, but it should run fine on any version with enough RAM, as Chromium can be a bit heavy.

::: info Info
Make sure you have a power supply with at least 2A of current to avoid any issue.<br />
:::

You'll need an SD card with at least 8GB of storage. Then Download [RaspberryPi Imager](https://www.raspberrypi.com/software/)
When you start the Imager, choose `Raspberry Pi OS Lite` under category `Raspberry PI OS (other)`. 

::: danger Warning! 🚨
Download `Lite` version of Raspberry Pi OS only! If your OS boots with a desktop environment, you **`WILL NOT`** be able to use it as a player.
:::

## Software installation

Log into your RaspberryPi locally or via ssh (by default it's `ssh pi@raspberrypi.local`)

### How to install

!!!include(includes/linux-player-installation.md)!!!

## How to restart

Just use systemctl by executing `sudo systemctl restart obscreen-player.service`

## Sound activation
::: warning
First you have to reboot your device if you never did after obscreen player installation with command `sudo reboot` or by unplugging and plugging the device again.
:::

You have to set audio channel to HDMI `sudo raspi-config nonint do_audio 1` (0 is for jack 3.5 output)

If you have more than one audio device, you can precisely select which one to use by executing `sudo raspi-config` and follow these steps:
- Select `1 System Options`
- Select `S2 Audio`
- Select your audio output
- Select `Ok`
- Select `Finish`

## Screen Resolution configuration

!!!include(includes/set-screen-resolution.md)!!!

## Playlist configuration

Playlist URL is set in file `var/run/play` under variable `STUDIO_URL`.
You can change it by editing the file and fill it with either:

!!!include(includes/playlist-configuration.md)!!!

!!!include(includes/footer.md)!!!