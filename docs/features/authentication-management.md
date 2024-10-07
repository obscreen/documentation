!!!include(includes/header.md)!!!

# Authentication Management

Obscreen provides a very simple way to manage authentication for your Studio instance.

## Enable Authentication
1. Go to `Settings` menu then `General` submenu.
2. Under `Security` section, you can enable **Auth management**.
3. Now a new `Security` will appear in menu, click on it.

::: warning
You'll be logged out from the current session. Default credentials are `admin` for both username and password.
:::

## Manage Users

You can simply add, edit or delete users.


## I'm locked out of the Studio because I forgot my password. How can I reset it?

You have to start Studio with `RESCUE_MODE=true` environment variable to bypass login and be able to reset the password.

!!!include(includes/footer.md)!!!