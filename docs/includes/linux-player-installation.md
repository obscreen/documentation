Install player autorun by executing following script (will install chromium, x11, pulseaudio and obscreen-player systemd service)

```bash
curl -fsSL https://raw.githubusercontent.com/obscreen/obscreen/master/system/client/install-client-player.sh -o /tmp/install-client-player.sh && chmod +x /tmp/install-client-player.sh && sudo /bin/bash /tmp/install-client-player.sh $USER $HOME
sudo reboot
```