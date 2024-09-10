# Studio on Docker

::: warning Warning
These scripts are using docker on linux. Adapt them to your OS if needed.
:::

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

## > Run with docker compose

::: tip Info
This is the recommended way to run the studio server with Docker.
:::

```bash
curl https://raw.githubusercontent.com/jr-k/obscreen/master/docker-compose.yml > docker-compose.yml && docker compose up --detach --pull=always
```

## > Run with docker

```bash
docker run --restart=always --name obscreen --pull=always \
  -e DEBUG=false \
  -e PORT=5000 \
  -e SECRET_KEY=ANY_SECRET_KEY_HERE \
  -p 5000:5000 \
  -v ./data/db:/app/data/db \
  -v ./data/uploads:/app/data/uploads \
  jierka/obscreen:latest
```

## Configuration

Server configuration is editable through environment variables.

Application settings is available at `http://<your_studio_server_instance>:5000/settings/variable/list` page after run.

## Troubleshoot

Check logs with `docker compose logs -f` 

## Upgrade

```bash
cd ~/obscreen
docker compose down
docker compose pull
```

::: warning Restart!
**Using Command Line Interface**: `docker compose up --detach --pull=always`<br />
**Using Docker Desktop**: Manually restart the container from the dashboard
:::