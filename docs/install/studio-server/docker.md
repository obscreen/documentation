!!!include(includes/header.md)!!!

# Studio on Docker

These scripts are using docker on linux. Adapt them to your OS if needed.

## Prerequisites

##### 1. Having docker installed
```bash
curl -sSL get.docker.com | sh && sudo usermod -aG docker $(whoami) && logout 
#... then login again
```

##### 2. Prepare application data
```bash
cd ~ && mkdir -p obscreen/data/db obscreen/data/uploads && cd obscreen
```

##### 3. Having license file
Place the license file `obscreen.lic` in the root of the application files (next to data folder).

::: warning License file
You need to have a valid license file to use the studio server. Learn more about [how to get one](https://obscreen.io/pricing).
:::

## > Run with docker

```bash
docker run -d --restart=always --name obscreen --pull=always \
  -p 5000:5000 \
  -v ./obscreen.lic:/app/obscreen.lic \
  -v ./data:/app/data \
  -e DEBUG=false \
  -e PORT=5000 \
  -e SECRET_KEY=ANY_SECRET_KEY_HERE \
  obscreen/obscreen:latest
```


## > Run with docker compose

```bash
curl https://raw.githubusercontent.com/obscreen/obscreen/master/docker-compose.yml > docker-compose.yml && docker compose up --detach --pull=always
```


## Configuration

Server configuration is editable through environment variables.

Application settings is available at `http://<your_studio_server_instance>:5000/settings` page after run.

## Troubleshoot

Check logs with `docker compose logs -f` 

## Upgrade

Make sure `--pull=always` is set in the docker run command or in the docker compose file.
For docker compose, you can also use `docker compose pull` to pull the latest image and `docker compose restart` to restart the container.


<!-- 1. Pull latest image
```bash
# Go next to the project folder
cd ~/obscreen

# Stop the container
docker compose down

# Pull the latest image
docker compose pull
```
2. Restart the container

- Using Command Line Interface: `docker compose up --detach --pull=always`<br />
- Using Docker Desktop: Manually restart the container from the dashboard -->


!!!include(includes/footer.md)!!!