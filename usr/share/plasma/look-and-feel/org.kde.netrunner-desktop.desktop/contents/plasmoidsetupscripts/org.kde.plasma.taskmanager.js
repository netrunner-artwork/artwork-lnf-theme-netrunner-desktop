applet.currentConfigGroup = ["General"]
applet.writeConfig("maxStripes", 1)
applet.writeConfig("maxTextLines", 1)
applet.writeConfig("launchers" ,"file:///usr/share/applications/org.kde.dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/firefox-esr.desktop")
applet.writeConfig("showOnlyCurrentDesktop", true)
applet.writeConfig("separateLaunchers", false)
applet.writeConfig("groupPopups", false)
applet.writeConfig("sortingStrategy", 1)
applet.reloadConfig()
