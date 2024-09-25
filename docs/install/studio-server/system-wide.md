# Studio System-wide

::: danger
Obscreen studio is under development, it is not available for now...
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
curl -fsSL https://raw.githubusercontent.com/jr-k/obscreen/master/system/install-studio.sh -o /tmp/install-server-studio.sh && chmod +x /tmp/install-server-studio.sh && sudo /bin/bash /tmp/install-server-studio.sh $USER $HOME
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
# Download source files
git clone https://github.com/jr-k/obscreen.git

# Go to the project folder
cd obscreen

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
# Download source files
git clone https://github.com/jr-k/obscreen.git

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

Application settings is available at `http://<your_studio_server_instance>:5000/settings/variable/list` page after run.


## Troubleshoot

Check logs with `sudo journalctl -u obscreen-studio -f` 

## Upgrade


#### > Using Git Updater plugin

Go to `Settings` > `Plugins` and enable `Core Updater Button` plugin.

Then go to `Settings` > `System infos` and click `Restart` button in top right corner.

#### > Manually
```bash
cd ~/obscreen
git checkout -f HEAD master
git pull
source ./venv/bin/activate
pip install -r requirements.txt
deactivate
```
::: warning Restart!
**Linux:** `sudo systemctl restart obscreen-studio.service`<br />
**Windows:** Restart your server manually<br />
**MacOS:** Restart your server manually<br />
:::