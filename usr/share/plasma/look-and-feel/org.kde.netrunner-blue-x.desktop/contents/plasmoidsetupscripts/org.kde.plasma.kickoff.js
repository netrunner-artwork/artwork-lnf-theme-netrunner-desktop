applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("icon", "file:///usr/share/icons/hicolor/scalable/apps/homerun.svg")
applet.writeConfig("favorites", ["systemsettings.desktop","synaptic.desktop","org.kde.ksysguard.desktop"])

applet.reloadConfig();
