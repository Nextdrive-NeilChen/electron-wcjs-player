# electron-wcjs-player
only meant to try out wcjs-player

steps I have tried so far:

# NOTE THAT THE ORDER of STEPS MATTERS 

* npm install

* fix ref path to wcjs-prebuilt/bin/plugins in main.js

```
if (process.platform == 'win32')
    process.env['VLC_PLUGIN_PATH'] = require('path').join(__dirname, '../../wcjs-prebuilt/bin/plugins'); // make sure ../../ is there
```

* fix ref path to wcjs-prebuilt/bin/plugins in index.html

```
<script>

console.log("path to webchimera bin/plugins ==> " + process.env['VLC_PLUGIN_PATH'] )

var pathToWebChimera = require('path').join(__dirname, '../../wcjs-prebuilt/bin') // make sure ../../ is there
console.log("path to webchimera bin ==> " + pathToWebChimera)

var wjs = require("wcjs-player");
var player = new wjs("#player").addPlayer({
    autoplay: true,
    //wcjs: require('wcjs-prebuilt')
    wcjs: require(pathToWebChimera)
});

//player.addPlaylist("http://archive.org/download/CartoonClassics/Krazy_Kat_-_Keeping_Up_With_Krazy.mp4");
player.addPlaylist("rtsp://192.168.0.16:8554/nextcam");
</script>
```

* **COPY** node_modules/wcjs-prebuilt to **OUTSIDE** of project root

* npm run pack-win

* fix node_modules/electron-winstaller/template.nuspectemplate so that:

```
  <files>
    <file src="locales\**" target="lib\net45\locales" />
    <file src="resources\**" target="lib\net45\resources" />
  **  <file src="wcjs-prebuilt\**" target="lib\net45\wcjs-prebuilt" /> ** // add one line here
    <file src="*.bin" target="lib\net45" />
    <file src="*.dll" target="lib\net45" />
    <file src="*.pak" target="lib\net45" />
    <file src="Update.exe" target="lib\net45\squirrel.exe" />
    <file src="icudtl.dat" target="lib\net45\icudtl.dat" />
    <file src="LICENSE" target="lib\net45\LICENSE" />
    <file src="<%- exe %>" target="lib\net45\<%- exe %>" />
  </files>
```

* **Copy** wcjs-prebuilt/* to out/electron-wcjs-player-win32-ia32/

* npm run installer

p.s. this app does not quit well from task-manager's view; will come back and figure out
for now, turn on task manager, looking for **'Test (32 bit)(s)** and end task it (them)