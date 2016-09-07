# electron-wcjs-player
only meant to try out wcjs-player

The steps I have tried so far:

* npm install
* fix ref path to wcjs-prebuilt/bin/plugins in main.js
* **move** node_modules/wcjs-prebuilt to project root
* fix node_modules/electron-winstaller/template.nuspectemplate
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
* npm run pack-win
* npm run installer
