Install player autorun by executing following script (will install chromium, x11, pulseaudio and obscreen-player systemd service)

```bash
curl -fsSL https://raw.githubusercontent.com/jr-k/obscreen/master/system/install-player-rpi.sh -o /tmp/install-client-player.sh && chmod +x /tmp/install-client-player.sh && sudo /bin/bash /tmp/install-client-player.sh $USER $HOME
sudo reboot
```