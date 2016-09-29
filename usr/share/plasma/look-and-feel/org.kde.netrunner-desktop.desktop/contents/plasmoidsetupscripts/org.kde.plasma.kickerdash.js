applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("customButtonImage", "file:///usr/share/icons/hicolor/scalable/apps/homerun.svg")
applet.writeConfig("favoriteApps", ["org.kde.ksysguard.desktop", "systemsettings.desktop", "synaptic.desktop"])
applet.writeConfig("limitDepth", true)
applet.writeConfig("useCustomButtonImage", true)
applet.writeConfig("hiddenApplications", "org.kde.ksshaskpass.desktop")

applet.reloadConfig();
