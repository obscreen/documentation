# Standalone deployment

!!!include(includes/deployment-types-legend.md)!!!

## Single Standalone setup
::: info Topology
```
💁🏻‍♂️🎛️ → ▶️ → 📺
```
:::

In the **Single Standalone setup** setup, the **Studio** (server) and **Player** (client) are both installed on the same device (e.g., a Raspberry Pi) that is connected to a Screen. This is ideal for a simple, single-screen installation.

- **Management**: Managed through a single studio URL for server control.
- **Devices**: One all-in-one device (e.g., Raspberry Pi, PC) connected to the Screen.


## Repeated Single Standalone setup
::: info Topology
```
💁🏻‍♂️🎛️ → ▶️ → 📺
💁🏻‍♂️🎛️ → ▶️ → 📺
💁🏻‍♂️🎛️ → ▶️ → 📺
```
:::
Here, **Repeated Single Standalone setup** setups are running independently, each with their own URL. You have to reach each server URL individually to control them.

- **Management**: Individually managed through many different server web endpoint.
- **Devices**: Several devices (e.g., multiple Raspberry Pi or PCs) each connected to their own Screen.


## Managed Multiple Standalone setup
::: info Topology
Arbitrary choice of one Studio Server with `Studio Fleet Management` enabled.<br />
```
💁🏻‍♂️🎛️ → (▶️ → 📺)
  ↓
  🔗 → 🎛️ → ▶️ → 📺
  🔗 → 🎛️ → ▶️ → 📺
  🔗 → 🎛️ → ▶️ → 📺
```
:::
Here, **Managed Multiple Standalone setup** setups are running independently, each with their own URL. To enable this and simplify management, you have to activate **Studio Fleet Management** in settings for one server (choosen arbitrarily as the "main" one) to control all others from a single interface.

- **Management**: Centrally managed through a single web page that aggregates the server URLs.
- **Devices**: Several devices (e.g., multiple Raspberry Pi or PCs) each connected to their own Screen. Studio Fleet Management allows unified control of all setups.

---

!!!include(includes/deployment-smart-tv.md)!!!