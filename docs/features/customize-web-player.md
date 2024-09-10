# Customize Web Player

Obscreen provides an URL for each playlist.<br />
Player's playlist URL is configurable in two ways:

!!!include(includes/playlist-configuration.md)!!!

Playlist always starts with an introduction slide showing date & time ([customizable](#intro)). Then it plays the first content item and endlessly loops through the playlist items according to the schedule.

Every 5 seconds ([customizable](#polling)), the Player fetches the updated JSON to display the correct content. When this feature is disabled, the JSON file is written each time your playlist is updated which can reduce the server load. 

## Query parameters options

You can use the following query parameters to configure the player through url parameters (e.g. `http://your_player_url?intro=0&autoplay=0&animation=1`):

### `intro`

**Default value:** `1`<br />
**Description:** Show the introduction slide or not for all playlists<br />
**Available values:** `0` or `1`<br />

*Global settings available*

---

### `animation`

**Default value:** `0`<br />
**Description:** Enable/disable animation or not for all playlists<br />
**Available values:** `0` or `1`<br />

*Global settings available*

---

### `animation_speed`

**Default value:** `normal`<br />
**Description:** Set the animation speed for all playlists<br />
**Available values:** `slower`, `slow`, `normal`, `fast` or `faster`<br />    

*Global settings available*

---

### `animation_effect`

**Default value:** `fadeIn`<br />
**Description:** Set the animation effect for all playlists<br />
**Available values:** `backInDown`, `backInLeft`, `backInRight`, `backInUp`, `bounceIn`, `bounceInDown`, `bounceInLeft`, `bounceInRight`, `bounceInUp`, `fadeIn`, `fadeInDown`, `fadeInDownBig`, `fadeInLeft`, `fadeInLeftBig`, `fadeInRight`, `fadeInRightBig`, `fadeInUp`, `fadeInUpBig`, `fadeInTopLeft`, `fadeInTopRight`, `fadeInBottomLeft`, `fadeInBottomRight`, `flip`, `flipInX`, `flipInY`, `lightSpeedInRight`, `lightSpeedInLeft`, `rotateIn`, `rotateInDownLeft`, `rotateInDownRight`, `rotateInUpLeft`, `rotateInUpRight`, `rollIn`, `jackInTheBox`, `zoomIn`, `zoomInDown`, `zoomInLeft`, `zoomInRight`, `zoomInUp`, `slideInDown`, `slideInLeft`, `slideInRight` or `slideInUp` <br />

*Global settings available*

---

### `animation_exit_effect`

**Default value:** `none`<br />
**Description:** Set the animation effect for all playlists<br />
**Available values:** `none`, `backOutDown`, `backOutLeft`, `backOutRight`, `backOutUp`, `bounceOut`, `bounceOutDown`, `bounceOutLeft`, `bounceOutRight`, `bounceOutUp`, `fadeOut`, `fadeOutDown`, `fadeOutDownBig`, `fadeOutLeft`, `fadeOutLeftBig`, `fadeOutRight`, `fadeOutRightBig`, `fadeOutUp`, `fadeOutUpBig`, `fadeOutTopLeft`, `fadeOutTopRight`, `fadeOutBottomLeft`, `fadeOutBottomRight`, `flip`, `flipOutX`, `flipOutY`, `lightSpeedOutRight`, `lightSpeedOutLeft`, `rotateOut`, `rotateOutDownLeft`, `rotateOutDownRight`, `rotateOutUpLeft`, `rotateOutUpRight`, `rollOut`, `hinge`, `zoomOut`, `zoomOutDown`, `zoomOutLeft`, `zoomOutRight`, `zoomOutUp`, `slideOutDown`, `slideOutLeft`, `slideOutRight` or `slideOutUp`<br />

*Global settings available*

---

### `cover`

**Default value:** `0`<br />
**Description:** Force 100% width for pictures or videos content types<br />
**Available values:** `0` or `1`<br />

---

### `autoplay`

**Default value:** `0`<br />
**Description:** Enable/disable video autoplay or not<br />
**Available values:** `0` or `1`<br />

---

### `polling`

**Default value:** `5`<br />
**Description:** Playlist synchronization update polling interval in seconds<br />
**Available values:** Any positive integer value<br />

