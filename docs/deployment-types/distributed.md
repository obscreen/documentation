# Distributed deployment

!!!include(includes/deployment-types-legend.md)!!!

## Managed Multiple Distributed
::: info Topology
```
💁🏻‍♂️🎛️
  ↓
  🔗 → ▶️ → 📺
  🔗 → ▶️ → 📺
  🔗 → ▶️ → 📺
```
:::

In the **Managed Multiple Distributed** configuration, a **central Studio Server** distributes content to multiple **Players** (clients), each connected to a Screen and having its own IP address. 

The server determines the content to display based on IP address of each Player and finally retrieves the playlist assigned to Player's group.

- **Management**: Managed through one central Studio Server URL with each Player's IP configured, Player's group and finally the group's playlist.
- **Devices**: Multiple Players (e.g., Raspberry Pi, PCs) connected to their own Screens. Each Player has a unique IP address, allowing the server to display different content on each Screen.


---

!!!include(includes/deployment-smart-tv.md)!!!