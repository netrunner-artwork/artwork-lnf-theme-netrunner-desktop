loadTemplate("org.kde.plasma.desktop.defaultPanel")

var desktopsArray = desktopsForActivity(currentActivity());

for (var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image'
    desktopsArray[j].currentConfigGroup = new Array ("Wallpaper", "org.kde.image", "General")
    desktopsArray[j].writeConfig("Image", "file:///usr/share/wallpapers/netrunner-desktop-17.01/netrunner-desktop-wallpaper-1701.png")
    desktopsArray[j].writeConfig("FillMode", "2")

    desktopsArray[j].currentConfigGroup = new Array("General");
    desktopsArray[j].writeConfig("positions","1,7,desktop:/mycomputer.desktop,0,0,desktop:/Network,0,1,desktop:/welcome.desktop,0,2,desktop:/calamares.desktop,0,3")
    desktopsArray[j].writeConfig("pressToMove",true);
    desktopsArray[j].writeConfig("showToolbox",false);
    desktopsArray[j].writeConfig("popups",false);
    desktopsArray[j].writeConfig("selectionMarkers",false);
    desktopsArray[j].writeConfig("sortMode","-1");
}
