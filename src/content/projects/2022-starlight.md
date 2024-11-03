---
title: "Starlight"
date: 2022-01-01
tags: [ "C#", ".NET", "Windows", "Ghidra", "Reverse Engineering" ]
---

Starlight was a project that I developed in 2022. The project essentially was an alternative launcher for a popular
video game called [Roblox](https://corp.roblox.com/). The project was developed in C# and was
a great learning experience for me.

The main goal of this project was to offer a launcher that was faster and more efficient than the default Roblox
launcher. It could handle bootstrapping the game, updating the game, and applying quirks such as FPS unlocking.

This project required me to analyze the Roblox binaries using [Ghidra](https://ghidra-sre.org/)
to understand how the engine functioned. This reverse engineering process enabled me to develop a game mod that allowed
manipulation of the game's behavior, including unlocking the FPS.

The project is now defunct and will require significant updates to work with the latest Roblox versions. I lost interest
in the project shortly after Roblox made it difficult to modify the game, and I was busy with school and other projects.
Nobody else seemed to want to take over maintaining the project, so it was left to be archived. You can view the project
archive on [GitHub](https://github.com/substrant/starlight).
