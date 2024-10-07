!!!include(includes/header.md)!!!

# Studio System-wide

## Prerequisites

##### 1. Download a version

Find the latest version [here](https://github.com/obscreen/obscreen/releases).

##### 2. Prepare application files
```bash
cd ~ && mkdir -p obscreen && cd obscreen
tar -vxf [downloaded_file]
```

##### 3. Having license file
Place the license file `obscreen.lic` in the root of the application files.

::: warning License file
You need to have a valid license file to use the studio server. Learn more about [how to get one](https://obscreen.io/pricing).
:::

## System dependencies

Obscreen relies on a few dependencies that you need to install before starting the installation.

- git 
- build-essential
- gcc
- python3-dev 
- python3-pip 
- python3-venv 
- libsqlite3-dev 
- ntfs-3g `(optional)`
- ffmpeg `(optional)`

## > 🐧 Install on Linux

For Linux users, you can install all the dependencies and the studio with the following script:

```bash
curl -fsSL https://raw.githubusercontent.com/obscreen/obscreen/master/system/server/install-server-studio.sh -o /tmp/install-server-studio.sh && chmod +x /tmp/install-server-studio.sh && sudo /bin/bash /tmp/install-server-studio.sh $USER $HOME
sudo reboot
```

## > 🪟 Install on Windows

For Windows, you have to install the dependencies and the studio manually.

### Dependencies installation

- Install [python 3.9 or higher](https://www.python.org/downloads/windows/)
- Install [git](https://git-scm.com/download/win)
- Optionally install [ffmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip) and put it on your `PATH` environment variable


### Studio installation

```bash
# Go to the project folder
# cd ....

# Create a python virtual environment and activate it
python3 -m venv venv
source .\venv\bin\activate

# Install python dependencies
pip install .

# Deploy your custom configuration file
copy .env.dist .env
```

## > 🍏 Install on MacOS

For MacOS, you have to install the dependencies and the studio manually.

### Dependencies installation

- Install [brew](https://brew.sh/)
- Optionally install ffmpeg with `brew install ffmpeg`

### Studio installation

```bash
# Go to the project folder
cd obscreen

# Create a python virtual environment and activate it
python3 -m venv venv
source ./venv/bin/activate

# Install python dependencies
pip install .

# Deploy your custom configuration file
cp .env.dist .env
```

## Configuration

Server configuration is editable in `.env` file.

Application settings is available at `http://<your_studio_server_instance>:5000/settings` page after run.


## Troubleshoot

Check logs with `sudo journalctl -u obscreen-studio -f` 

## Upgrade

There is no automatic upgrade for system-wide installation yet. You'll have to do download the latest version manually and install.

1. Re-install from section above
- [Linux installation](#🐧-install-on-linux)
- [Windows installation](#🪟-install-on-windows)
- [MacOS installation](#🍏-install-on-macos)
2. Copy old files
- `data` folder
- `.env` file
- `obscreen.lic` license file
from previous installation.
3. Restart the server
- Linux: `sudo systemctl restart obscreen-studio.service`
- Windows: Restart your server manually
- MacOS: Restart your server manually
    
!!!include(includes/footer.md)!!!