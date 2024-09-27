!!!include(includes/header.md)!!!

# Frequently asked questions

Please <a href="javascript:document.querySelector('.DocSearch.DocSearch-Button').click()">search</a> for your question, or [open an issue](https://github.com/jr-k/obscreen/issues/new/choose) if you can't find an answer.

## Can I install both the server and the client on the same device?

Yes, you can install both the Studio and Player on a single device, such as a Raspberry Pi connected to a TV.
For more information, please refer to the [deployment types](/deployment-types) section of the documentation.

## Can I use a Smart TV without a Raspberry Pi?

Yes, you can use the native browser of the Smart TV to access the content from the Studio without needing a Raspberry Pi.
For more information, please refer to the [Smart TV](/install/player-client/smart-tv) section of the documentation.

## How do I install Obscreen on a Raspberry Pi?

First, check out [deployment section](/deployment-types) of the documentation.
After you chose the type of installation, you'll find the instructions to [install](/install) Obscreen on a Raspberry Pi

## Can I manage multiple screens with Obscreen?

Currently, Obscreen is designed to manage a single screen.

## How does the fleet screen management feature work?

The fleet screen management feature allows you to manage multiple screens from a central location. It is designed to work with the Obscreen Player installed on each screen. Check out the [fleet management feature](/features/fleet-screen-management) section of the documentation to learn more.

## Does Obscreen support video autoplay?

Yes, Obscreen supports video autoplay but be aware that it requires [some configuration](/faq#why-aren-t-the-video-starting-automatically).

## Why aren't the video starting automatically?

This is "normal" behavior. Videos do not play automatically in Chrome because it requires user interaction with the page (a simple click inside the webpage is enough). If you open the console, you'll see the error: [Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first...](https://goo.gl/xX8pDD)

To resolve this, you need to use the Chrome flag `--autoplay-policy=no-user-gesture-required`. 
If your player is a Raspberry Pi with Obscreen Player installed, this issue doesn't occur because the flag is inserted automatically for you, otherwise you need to add it manually by yourself.

## What kind of API does Obscreen offer for developers?

Obscreen offers a REST API to control contents, playlist and slides in Studio instance. You can find the documentation [here](/features/api).

## I'm locked out of the Studio because I forgot my password. How can I reset it?

You have to start Studio with `RESCUE_MODE=true` environment variable to bypass login and be able to reset the password.

!!!include(includes/footer.md)!!!