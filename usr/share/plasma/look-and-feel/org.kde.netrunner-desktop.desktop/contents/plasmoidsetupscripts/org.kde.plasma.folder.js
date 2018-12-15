applet.wallpaperPlugin = 'org.kde.image'
applet.currentConfigGroup = ["Wallpaper", "org.kde.image", "General"]
applet.writeConfig("Image", "file:///usr/share/wallpapers/netrunner-desktop-19.01/blackbird.png")
applet.writeConfig("FillMode", "2")
applet.currentConfigGroup = new Array("General");
applet.writeConfig("positions","1,7,desktop:/mycomputer.desktop,0,0,desktop:/Network,0,1,desktop:/welcome.desktop,0,2,desktop:/calamares.desktop,0,3")
applet.writeConfig("pressToMove",true);
applet.writeConfig("showToolbox",false);
applet.writeConfig("popups",false);
applet.writeConfig("selectionMarkers",false);
applet.writeConfig("sortMode","-1");
applet.reloadConfig()

