# The Enigma Project
This project transforms your Razer Chroma keyboard into an Enigma machine from WW2 
### Please Note:
This program will **NOT** work on any other keyboard apart from chroma keyboard (any chroma keyboard will do I believe)
# How-to Install from source:
### Dependencies:
- Razer Chroma SDK From: [http://developer.razerzone.com/chroma/download/]
- Node.js From: [https://nodejs.org/en/]  Use Reccomended Version (4.5.0)
- Microsoft Visual C++ Build Tools 2015 From: [http://landinghub.visualstudio.com/visual-cpp-build-tools] (The purple button)
- Python 2.7 From: [https://www.python.org/downloads/] Version 2.7.12
- Chrode From: [https://github.com/WolfspiritM/Chrode]

### Please also Note:
This program **ONLY** works on Microsoft Windows 10

# How To Use/Customise/Customize The program

## Rotors:
Rotors were a big part of theEnigma machine, so I **HAD** to include it into my program
If you open it up in your favorite edit (mine is Sublime), jump to line 78 - 80 you will find the rotors. Default set is A A A, but make sure you remember your settings! as you might not be able to understand your own messages!
## Colour configuration:
On line 107 you will find the famous RGB setting (Red, Green and Blue) the maximum of each colour number is 255, so what I like to do is mess around with the different colour options.
## How long the keys stay illuminated
I didn't want to get confused with the program so I gave a time limit on how long the key light remains on so i can notice it and write it down on paper. You can change the time of how long it stays illuminated on line 113, the time is measured in milliseconds (in other words 1000 milliseconds = 1 second)

## No need to worry!
The program never translates a key to itself so you'll never have to worry that your finger is hiding the Enigma output light. Also if you press the same key twice it will have different outputs (eg. I press E twice on my keyboard and F and Y lights up on my keyboard)

## How to launch
Now that I've taught you to install and customise your Enigma machine, you need to launch it. 
- Open the windows command prompt and do cd to the project directory, (eg. cd Documents\Enigma\Enigma-Razer-Chroma)
- To launch type into the command prompt "node rotor1.js" and your keyboard should turn black ready for some Enigma communication!
 
# Binary.exe 
I am working on uploading a binary version (.exe) so you don't need to install from source.

Hope you enjoy your new Enigma machine, I bet your friends will be amazed.

Exxocraft
(translates into FSRN UTJY G)
