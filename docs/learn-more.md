# Learn more

[Obscreen](https://obscreen.io) is a tool designed to broadcast content from a server (Studio) to a client (Player). The Studio can be installed on Linux, Windows, or macOS and manages the content. 

## How it works

It provides the Player with a playlist page containing media that the Player reads. The Player is a simple web page running in Chromium, launched via an X11 process. 
Every 5 seconds (customizable), the Player fetches the updated JSON to display the correct content. When this feature is disabled, the JSON file is written each time your playlist is updated which can reduce the server load. 

## Deployment

Initially, this project was intended to be installed as an all-in-one solution on a Raspberry Pi connected to a TV (or monitor). However, it is possible to install the server elsewhere and have the Player run on the Raspberry Pi attached to the TV. Alternatively, you can install the server and use the native browser of a Smart TV as the Player, eliminating the need for a Raspberry Pi. 

A cloud version is in preparation, which will allow you to no longer worry about running a server. You will be able to create an account on obscreen.io and
manage your content from anywhere. You will benefit from playlist URLs ready to be loaded in the browser of your choice, regardless of the device (TV, monitor, etc.). Internet connection on player side will be obviously required.

Learn more about [deployment types](/deployment-types) and how to choose the right one for you.

## Get started

To get started with Obscreen, you need to install the Studio (server) and Player (client). Below are the available installation options.

- **Studio Installation:** You can install the Studio on Linux, macOS, or Windows. Detailed instructions for each platform are provided in the [Installation section](/install).
- **Player Setup:** The Player can run on a Raspberry Pi or a Smart TV. Instructions for both setups are provided in the Player section of the [Installation section](/install).
