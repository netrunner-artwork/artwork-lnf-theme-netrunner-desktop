var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

panel.height = screenGeometry(panel.screen).height > 1024 ? 35 : 27

var simplemenu = panel.addWidget("org.kde.plasma.simplemenu")
simplemenu.currentConfigGroup = ["General"]
simplemenu.writeConfig("favoriteApps", "org.kde.ksysguard.desktop,systemsettings.desktop,org.kde.konsole.desktop,synaptic.desktop")
simplemenu.writeConfig("hiddenApplications", "org.kde.ksshaskpass.desktop")
simplemenu.writeConfig("useCustomButtonImage", true)
simplemenu.writeConfig("customButtonImage", "/usr/share/icons/hicolor/scalable/apps/homerun.svg")

var eitm = panel.addWidget("org.kde.plasma.taskmanager")
eitm.currentConfigGroup = ["General"]
eitm.writeConfig("launchers" ,"file:///usr/share/applications/org.kde.dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/firefox.desktop")
eitm.writeConfig("showOnlyCurrentDesktop", true)
eitm.writeConfig("separateLaunchers", false)
eitm.writeConfig("groupPopups", false)
eitm.writeConfig("sortingStrategy", 1)

var yakuakeIcon = panel.addWidget("org.kde.plasma.icon")
yakuakeIcon.currentConfigGroup = ["General"]
yakuakeIcon.writeConfig("applicationName", "Yakuake")
yakuakeIcon.writeConfig("genericName", "Drop-down Terminal")
yakuakeIcon.writeConfig("iconName", "yakuake")
yakuakeIcon.writeConfig("url", "/usr/share/applications/org.kde.yakuake.desktop")

var systray = panel.addWidget("org.kde.plasma.systemtray")
systray.currentConfigGroup = ["General"]
systray.writeConfig("extraItems","org.kde.plasma.devicenotifier,org.kde.plasma.networkmanagement,org.kde.plasma.clipboard,org.kde.plasma.volume,org.kde.discovernotifier,org.kde.plasma.diskquota")
systray.writeConfig("knownItems", "org.kde.plasma.volume,org.kde.plasma.networkmanagement,org.kde.plasma.bluetooth,org.kde.plasma.battery,org.kde.discovernotifier,org.kde.plasma.clipboard,org.kde.plasma.mediacontroller,org.kde.plasma.devicenotifier,org.kde.plasma.notifications,org.kde.plasma.printmanager,org.kde.plasma.notifications")


panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.notifications")
