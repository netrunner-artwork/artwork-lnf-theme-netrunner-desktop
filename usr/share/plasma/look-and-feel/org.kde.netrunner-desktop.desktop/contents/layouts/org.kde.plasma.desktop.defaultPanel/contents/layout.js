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

panel.height = screenGeometry(panel.screen).height > 1024 ? 48 : 37

panel.addWidget("org.kde.plasma.kickerdash")

panel.addWidget("org.kde.plasma.taskmanager")

var yakuakeIcon = panel.addWidget("org.kde.plasma.icon")
yakuakeIcon.currentConfigGroup = ["General"]
yakuakeIcon.writeConfig("applicationName", "Yakuake")
yakuakeIcon.writeConfig("genericName", "Drop-down Terminal")
yakuakeIcon.writeConfig("iconName", "yakuake")
yakuakeIcon.writeConfig("url", "file:///usr/share/applications/org.kde.yakuake.desktop")

var spectacleIcon = panel.addWidget("org.kde.plasma.icon")
spectacleIcon.currentConfigGroup = ["General"]
spectacleIcon.writeConfig("applicationName", "Spectacle")
spectacleIcon.writeConfig("genericName", "Screenshot Capture Utility")
spectacleIcon.writeConfig("iconName", "spectacle")
spectacleIcon.writeConfig("url", "file:///usr/share/applications/org.kde.spectacle.desktop")

panel.addWidget('org.kde.plasma.volumewin7mixer')
panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.notifications")

