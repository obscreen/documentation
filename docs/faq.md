# Frequently asked questions

Please <a href="javascript:document.querySelector('.DocSearch.DocSearch-Button').click()">search</a> for your question, or [open an issue](https://github.com/jr-k/obscreen/issues/new/choose) if you can't find an answer.

## Can I install both the server and the client on the same device?

Yes, you can install both the Studio and Player on a single device, such as a Raspberry Pi connected to a TV.

## Can I use a Smart TV without a Raspberry Pi?

Yes, you can use the native browser of the Smart TV to access the content from the Studio without needing a Raspberry Pi.

## Why aren't the video starting automatically?

This is "normal" behavior. Videos do not play automatically in Chrome because it requires user interaction with the page (a simple click inside the webpage is enough). If you open the console, you'll see the error: [Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first...](https://goo.gl/xX8pDD)

To resolve this, you need to use the Chrome flag `--autoplay-policy=no-user-gesture-required`. 
If your player is a Raspberry Pi with Obscreen Player installed, this issue doesn't occur because the flag is inserted automatically for you, otherwise you need to add it manually by yourself.
