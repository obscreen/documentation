# Fleet screen management

Fleet screen management allows you to manage multiple Players from a single central Studio instance.

## How it works

### Example

When a player (e.g., `192.168.1.50`) connects to `http://<your_studio_instance>:5000/` via HTTP, the player's IP address is sent by the browser. Thanks to this, Obscreen Studio can identify the player and retrieve its associated group.

::: warning Warning
This can work only if you have enabled **Studio Fleet Management** in settings. Plus you need to configure players to use the central studio instance (Learn more about [how to configure players](./customize-web-player.md)).
:::

## Step by step setup

::: tip Check
Make sure you have at least one playlist available!
:::

### Steps to configure a Player

1. Go to `Devices` menu then `Players` submenu.
2. Click on `Add Player` button and choose a name for your player.
3. Select an operating system for your player.
4. Fill up the `Host` field with the player's IP address and click on `Save`


### Steps to create a group

1. Go to `Devices` menu then `Playgroups` submenu.
2. Click on `Add Playgroup` button and choose a name for your playgroup.
3. Select a playlist to a group and click on `Save`.
4. Now you can click on `Assign Player` button to assign the player you created before to this group.

Now, once a request is made by a player to your central Studio instance, it will:
- Identifies the player based on its IP address.
- Retrieves the player’s associated group.
- Automatically fetches the corresponding playlist.