import type { Question } from "@shared/schema";

export const lightRadiometryQuestions: Question[] = [
  {
    id: 1,
    text: "What does radiometry measure?",
    options: [
      "Apparent brightness to the human eye",
      "Radiant energy at all wavelengths, visible and invisible",
      "Only the visible spectrum of light"
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "What is the peak wavelength of the human eye's response in daylight (photopic)?",
    options: [
      "512 nm",
      "700 nm",
      "555 nm"
    ],
    correctOptionIndex: 2
  },
  {
    id: 3,
    text: "Which organization formalized the standards for measuring light and the response of the human eye?",
    options: [
      "The International Telecommunications Union (ITU)",
      "The Commission Internationale de l'Eclairage (CIE)",
      "The Federal Aviation Administration (FAA)"
    ],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "What is the unit of measurement for radiant light intensity of all wavelengths?",
    options: [
      "Candela",
      "Lux",
      "Lumens"
    ],
    correctOptionIndex: 2
  },
  {
    id: 5,
    text: "How many lumens are provided by 1 watt of monochromatic radiation at a wavelength of 555 nm?",
    options: [
      "683",
      "540",
      "400"
    ],
    correctOptionIndex: 0
  },
  {
    id: 6,
    text: "The scotopic (night-adapted) curve peaks at approximately what wavelength?",
    options: [
      "555 nm",
      "435.8 nm",
      "512 nm"
    ],
    correctOptionIndex: 2
  },
  {
    id: 7,
    text: "The standard unit for measuring the intensity of light is the:",
    options: [
      "Lumen",
      "Candela",
      "Lux"
    ],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "What does the unit 'Lux' indicate?",
    options: [
      "The strength of the light emission",
      "The total flux of light emitted",
      "The illumination of an area (lumens per square meter)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 9,
    text: "One candlepower is approximately equal to how many candelas?",
    options: [
      "0.981",
      "1.000",
      "1.050"
    ],
    correctOptionIndex: 0
  },
  {
    id: 10,
    text: "The steradian (sr) is the SI unit for what?",
    options: [
      "Luminous flux",
      "Illumination",
      "Solid angle"
    ],
    correctOptionIndex: 2
  },
  {
    id: 11,
    text: "One lumen is defined as the total flux of light emitted, equal to the intensity in candelas multiplied by the:",
    options: [
      "Area in square meters",
      "Solid angle in steradians",
      "Wavelength in nanometers"
    ],
    correctOptionIndex: 1
  },
  {
    id: 12,
    text: "LEDs emit light due to the recombination of electrical charges in a process called:",
    options: [
      "Thermionic emission",
      "Electroluminescence",
      "Electro-phosphorescence"
    ],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "In an LED, recombination of electrons and holes occurs in which layer?",
    options: [
      "The n layer",
      "The p layer",
      "The active layer (junction)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 14,
    text: "LEDs only operate on DC because they:",
    options: [
      "Are a cold light generation technology",
      "Only work with one voltage sense, like a typical diode",
      "Require a 50% duty cycle square wave"
    ],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "The colour of light emitted by an LED depends on:",
    options: [
      "The colour of the epoxy lens",
      "The semiconductor material",
      "The voltage applied"
    ],
    correctOptionIndex: 1
  },
  {
    id: 16,
    text: "A 7-segment display can typically display:",
    options: [
      "The full Roman alphabet",
      "Numbers 0 to 9",
      "Only the number 8"
    ],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "What is a \"starburst\" display?",
    options: [
      "A dot-matrix display",
      "A 14- or 16-segment alphanumeric display",
      "A 7-segment display with a decimal point"
    ],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "A 5×7 matrix display is more versatile than a 16-segment display because it can display:",
    options: [
      "Only numbers",
      "Both upper and lower case letters and a wide range of symbols",
      "A brighter image"
    ],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "The \"rolling end display\" feature on an LED counter simulates the action of:",
    options: [
      "A digital stopwatch",
      "A mechanical drum-type counter",
      "A sweep-hand analogue gauge"
    ],
    correctOptionIndex: 1
  },
  {
    id: 20,
    text: "A typical modern aircraft LED display replaces conventional instruments that were:",
    options: [
      "Too bright and power-efficient",
      "Heavy and cumbersome",
      "Prone to electromagnetic interference"
    ],
    correctOptionIndex: 1
  },
  {
    id: 21,
    text: "What is static drive for LEDs?",
    options: [
      "Driving each LED separately with a continuous current",
      "Strobing the digits at a high frequency",
      "Using a single pin to drive multiple digits"
    ],
    correctOptionIndex: 0
  },
  {
    id: 22,
    text: "Why is multiplex (pulse) drive used for displays with many segments?",
    options: [
      "To increase the brightness of each LED",
      "To reduce the number of drive connections needed",
      "To simplify the circuit for a 7-segment display"
    ],
    correctOptionIndex: 1
  },
  {
    id: 23,
    text: "The human eye perceives rapidly pulsed light as:",
    options: [
      "Flickering constantly",
      "Somewhere between the peak and average brightness",
      "Darker than the average of the pulsed signal"
    ],
    correctOptionIndex: 1
  },
  {
    id: 24,
    text: "In a standard multiplexed connection for LED digits, the segment connections are:",
    options: [
      "Unique for each digit",
      "Common across all digits",
      "Connected to the cathode of each LED"
    ],
    correctOptionIndex: 1
  },
  {
    id: 25,
    text: "Why are CRTs considered obsolete technology in aviation?",
    options: [
      "They produce too much X-ray radiation",
      "They are bulky, power-hungry, and have been replaced by LCDs",
      "They cannot display colour"
    ],
    correctOptionIndex: 1
  },
  {
    id: 26,
    text: "In a CRT, the process of electrons being emitted from a heated cathode is called:",
    options: [
      "Electroluminescence",
      "Thermionic emission",
      "Photon emission"
    ],
    correctOptionIndex: 1
  },
  {
    id: 27,
    text: "What is the purpose of the shadow mask in a colour CRT?",
    options: [
      "To focus the electron beam",
      "To ensure each electron gun only strikes its designated coloured phosphor",
      "To generate the primary colours"
    ],
    correctOptionIndex: 1
  },
  {
    id: 28,
    text: "In a CRT, electrostatic deflection of the electron beam is achieved by:",
    options: [
      "Magnetic coils around the neck of the tube",
      "Applying voltages to deflection plates",
      "Varying the voltage on the anode"
    ],
    correctOptionIndex: 1
  },
  {
    id: 29,
    text: "The combination of which three colours of light is known as 'additive' mixing and produces white light?",
    options: [
      "Cyan, Magenta, Yellow",
      "Red, Green, Blue",
      "Red, Yellow, Blue"
    ],
    correctOptionIndex: 1
  },
  {
    id: 30,
    text: "Liquid crystal was discovered in 1888 by:",
    options: [
      "A British researcher named Biphenyl",
      "Austrian botanist Fredreich Rheiniser",
      "A scientist at Toshiba"
    ],
    correctOptionIndex: 1
  },
  {
    id: 31,
    text: "Liquid crystal is considered a fourth state of matter because it can take the form of:",
    options: [
      "A plasma and a gas",
      "Both a solid and a liquid",
      "A gas and a liquid"
    ],
    correctOptionIndex: 1
  },
  {
    id: 32,
    text: "The \"active matrix\" technology in LCD screens refers to:",
    options: [
      "The use of a backlight",
      "The concept of a matrix of pixels",
      "The use of a shadow mask"
    ],
    correctOptionIndex: 1
  },
  {
    id: 33,
    text: "An LCD cell goes 'dark' when a voltage is applied because:",
    options: [
      "The light source is blocked by the polariser",
      "The molecular arrangement within the liquid crystal changes",
      "The phosphor coating stops glowing"
    ],
    correctOptionIndex: 1
  },
  {
    id: 34,
    text: "Why is an LCD operated with AC rather than DC?",
    options: [
      "AC provides a brighter image",
      "DC voltages over 25mV will rapidly change the chemical composition and cause failure",
      "AC consumes less power"
    ],
    correctOptionIndex: 1
  },
  {
    id: 35,
    text: "What is the typical frequency range for the square wave oscillator used to drive an LCD?",
    options: [
      "1 to 10 Hz",
      "30 to 1,000 Hz",
      "50,000 to 100,000 Hz"
    ],
    correctOptionIndex: 1
  },
  {
    id: 36,
    text: "If the square wave oscillator driving an LCD runs at less than 30 Hz, what is the likely result?",
    options: [
      "The display will be too bright",
      "The display will appear to flicker",
      "The display will fail"
    ],
    correctOptionIndex: 1
  },
  {
    id: 37,
    text: "What is a key characteristic of a passive-matrix LCD?",
    options: [
      "It uses a thin-film transistor (TFT) at each pixel",
      "It uses a simple grid of columns and rows to supply charge to a pixel",
      "It has a very fast response time"
    ],
    correctOptionIndex: 1
  },
  {
    id: 38,
    text: "A \"ghosting\" effect when moving a mouse pointer across a passive-matrix LCD is evidence of:",
    options: [
      "A bad transistor",
      "Slow response time",
      "High power consumption"
    ],
    correctOptionIndex: 1
  },
  {
    id: 39,
    text: "What component is added to each pixel in an active-matrix LCD to improve performance?",
    options: [
      "A shadow mask",
      "A thin-film transistor (TFT) and a capacitor",
      "A second polariser"
    ],
    correctOptionIndex: 1
  },
  {
    id: 40,
    text: "How many levels of brightness per pixel can most active-matrix LCDs create?",
    options: [
      "16",
      "256",
      "1024"
    ],
    correctOptionIndex: 1
  },
  {
    id: 41,
    text: "To create a colour pixel, an LCD must have three subpixels with filters of which colours?",
    options: [
      "Red, yellow, blue",
      "Red, green, blue",
      "Cyan, magenta, yellow"
    ],
    correctOptionIndex: 1
  },
  {
    id: 42,
    text: "A laptop with a 1024×768 resolution has approximately how many transistors etched onto the glass?",
    options: [
      "786,432",
      "2,359,296",
      "3,145,728"
    ],
    correctOptionIndex: 1
  },
  {
    id: 43,
    text: "What is a \"bad pixel\" on an LCD?",
    options: [
      "A pixel that is too bright",
      "A pixel that is always on or off due to a faulty transistor",
      "A pixel that has the wrong colour filter"
    ],
    correctOptionIndex: 1
  },
  {
    id: 44,
    text: "Which LCD viewing mode relies entirely on backlighting and has no reflected light?",
    options: [
      "Reflective",
      "Transmissive",
      "Transflective"
    ],
    correctOptionIndex: 1
  },
  {
    id: 45,
    text: "Digital watches and calculators typically use which type of LCD viewing mode?",
    options: [
      "Transmissive",
      "Reflective",
      "Transflective"
    ],
    correctOptionIndex: 1
  },
  {
    id: 46,
    text: "What is the function of the polariser in an LCD?",
    options: [
      "To generate the light",
      "To act as a one-way filter for light",
      "To provide the colour to the image"
    ],
    correctOptionIndex: 1
  },
  {
    id: 47,
    text: "What technology is increasingly used for backlights in newer screens, replacing CCFL?",
    options: [
      "OLED",
      "LED",
      "Plasma"
    ],
    correctOptionIndex: 1
  },
  {
    id: 48,
    text: "In a 7-segment LCD, the numbers show up as dark segments against a:",
    options: [
      "Black background",
      "Continuously visible reflective background",
      "Backlit coloured background"
    ],
    correctOptionIndex: 1
  },
  {
    id: 49,
    text: "What is a disadvantage of LCDs compared to CRTs?",
    options: [
      "They have a much shorter lifespan",
      "They have a narrow viewing angle and can be sluggish at low temperatures",
      "They are heavier and more power-hungry"
    ],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "What advantage of LCDs enabled the progress from drop-down ceiling displays to seat-back displays in aircraft?",
    options: [
      "Better colour saturation",
      "Lightweight and low power consumption",
      "Wider viewing angle"
    ],
    correctOptionIndex: 1
  },
  {
    id: 51,
    text: "A resistive touchscreen works by:",
    options: [
      "Altering an electric field when your finger approaches",
      "Having two conducting layers that make contact when pressed",
      "Interrupting infrared light beams"
    ],
    correctOptionIndex: 1
  },
  {
    id: 52,
    text: "Which type of touchscreen does NOT work with a plastic stylus?",
    options: [
      "Resistive",
      "Capacitive",
      "Infrared"
    ],
    correctOptionIndex: 1
  },
  {
    id: 53,
    text: "How does an infrared touchscreen detect a touch?",
    options: [
      "By sensing a change in capacitance",
      "By using a grid of LEDs and photocells to detect which light beams are interrupted",
      "By using sound waves that are absorbed by your finger"
    ],
    correctOptionIndex: 1
  },
  {
    id: 54,
    text: "Surface acoustic wave touchscreens detect your finger using:",
    options: [
      "Infrared light",
      "High-frequency sound waves",
      "A change in the electric field"
    ],
    correctOptionIndex: 1
  },
  {
    id: 55,
    text: "Near field imaging (NFI) touchscreens are suitable for aircraft because they:",
    options: [
      "Are the cheapest technology",
      "Can detect touches from gloved hands and are robust",
      "Have the fastest response time"
    ],
    correctOptionIndex: 1
  },
  {
    id: 56,
    text: "OLEDs create light with the application of electricity through a process called:",
    options: [
      "Thermionic emission",
      "Electro-phosphorescence",
      "Electroluminescence (similar to LEDs)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 57,
    text: "Which component in an OLED injects electrons when a current flows through the device?",
    options: [
      "Anode",
      "Cathode",
      "Substrate"
    ],
    correctOptionIndex: 1
  },
  {
    id: 58,
    text: "Which manufacturing method for OLEDs is considered the most cost-effective and allows for large films?",
    options: [
      "Vacuum deposition",
      "Inkjet printing",
      "Organic vapour phase deposition"
    ],
    correctOptionIndex: 1
  },
  {
    id: 59,
    text: "The colour of light in an OLED is determined by:",
    options: [
      "The colour of the substrate",
      "The type of organic molecule in the emissive layer",
      "The amount of electrical current applied"
    ],
    correctOptionIndex: 1
  },
  {
    id: 60,
    text: "Which type of OLED is best suited for large screens like computer monitors and TVs due to its fast refresh rate and lower power consumption?",
    options: [
      "Passive-matrix OLED (PMOLED)",
      "Active-matrix OLED (AMOLED)",
      "White OLED"
    ],
    correctOptionIndex: 1
  },
  {
    id: 61,
    text: "Which OLED type has a substrate that is either opaque or reflective and is suited for smart cards?",
    options: [
      "Transparent OLED",
      "Top-emitting OLED",
      "Foldable OLED"
    ],
    correctOptionIndex: 1
  },
  {
    id: 62,
    text: "Which OLED type can be used for heads-up displays on aircraft because it allows light to pass in both directions?",
    options: [
      "Top-emitting OLED",
      "Transparent OLED",
      "Foldable OLED"
    ],
    correctOptionIndex: 1
  },
  {
    id: 63,
    text: "A major problem currently facing OLED technology is:",
    options: [
      "Inability to produce a bright image",
      "The short lifetime of blue organic films",
      "Inherent motion blur"
    ],
    correctOptionIndex: 1
  },
  {
    id: 64,
    text: "An advantage of OLED over LCD is:",
    options: [
      "It requires backlighting",
      "It consumes much less power because it generates its own light",
      "It has a shorter viewing angle"
    ],
    correctOptionIndex: 1
  },
  {
    id: 65,
    text: "MicroLED displays consist of arrays of microscopic LEDs forming individual pixel elements, using how many LEDs per pixel?",
    options: [
      "One",
      "Three",
      "Thousands"
    ],
    correctOptionIndex: 1
  },
  {
    id: 66,
    text: "What is a significant disadvantage of MicroLED technology?",
    options: [
      "High power consumption",
      "Manufacturing difficulty, requiring millions of perfectly aligned LEDs",
      "Very short lifespan"
    ],
    correctOptionIndex: 1
  },
  {
    id: 67,
    text: "What is a key advantage of MicroLED over OLED?",
    options: [
      "Lower cost",
      "Inorganic nature gives it a longer lifetime and no risk of burn-in",
      "Better colour saturation"
    ],
    correctOptionIndex: 1
  },
  {
    id: 68,
    text: "According to the comparison table, which technology has the lowest power consumption?",
    options: [
      "TFT LCD",
      "OLED",
      "MicroLED"
    ],
    correctOptionIndex: 2
  },
  {
    id: 69,
    text: "The central element in a plasma screen that produces light is:",
    options: [
      "A liquid crystal",
      "A plasma, a gas of free-flowing ions and electrons",
      "A cathode ray tube"
    ],
    correctOptionIndex: 1
  },
  {
    id: 70,
    text: "What gases are typically used in plasma screens that release light photons when excited?",
    options: [
      "Hydrogen and Helium",
      "Xenon and Neon",
      "Argon and Krypton"
    ],
    correctOptionIndex: 1
  },
  {
    id: 71,
    text: "A major advantage of plasma displays over LCDs is their ability to produce:",
    options: [
      "Brighter images in high-light rooms",
      "Deep blacks by completely turning off individual pixels",
      "Less power consumption"
    ],
    correctOptionIndex: 1
  },
  {
    id: 72,
    text: "Plasma displays generally do not suffer from motion blur because:",
    options: [
      "They have a 120Hz refresh rate",
      "The phosphor coating stops glowing just nanoseconds after the electrode turns off",
      "They use a backlight"
    ],
    correctOptionIndex: 1
  },
  {
    id: 73,
    text: "What is \"burn-in\" on a plasma display?",
    options: [
      "The screen becoming too hot to touch",
      "A persistent ghost image left after a static image was displayed too long",
      "A complete failure of the display"
    ],
    correctOptionIndex: 1
  },
  {
    id: 74,
    text: "A significant disadvantage of plasma displays in aircraft applications is their:",
    options: [
      "Poor viewing angle",
      "High power consumption",
      "Inability to produce strong colour saturation"
    ],
    correctOptionIndex: 1
  },
  {
    id: 75,
    text: "In a CRT, what is the function of the anode?",
    options: [
      "To emit electrons",
      "To attract and accelerate the electrons towards the screen",
      "To deflect the electron beam"
    ],
    correctOptionIndex: 1
  },
  {
    id: 76,
    text: "Which type of display technology is described as being 100 to 500 nanometres thick, about 200 times smaller than a human hair?",
    options: [
      "TFT LCD",
      "OLED",
      "MicroLED"
    ],
    correctOptionIndex: 1
  },
  {
    id: 77,
    text: "In a CRT with electromagnetic deflection, a horizontal magnetic field achieves what movement of the electron beam?",
    options: [
      "Horizontal movement",
      "Vertical movement",
      "Focusing"
    ],
    correctOptionIndex: 1
  },
  {
    id: 78,
    text: "A transflective LCD is a compromise between transmissive and reflective modes. It is best used:",
    options: [
      "In very low light conditions only",
      "In all lighting conditions, using backlight when needed",
      "In direct sunlight only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 79,
    text: "In the context of LCDs, what is a \"triad\" or \"pixel\"?",
    options: [
      "The backlight unit",
      "An area containing a red, green, and blue dot (sub-pixel)",
      "The thin-film transistor"
    ],
    correctOptionIndex: 1
  },
  {
    id: 80,
    text: "Why must LCDs be driven with a zero average DC level?",
    options: [
      "To prevent the image from flickering",
      "To prevent the chemical composition of the cell from changing and failing",
      "To ensure a wide viewing angle"
    ],
    correctOptionIndex: 1
  },
  {
    id: 81,
    text: "What is the primary difference between a 14-segment and a 16-segment alphanumeric display?",
    options: [
      "The 16-segment display can show lower-case letters",
      "The 16-segment display has the top and bottom bars split to improve character appearance",
      "The 14-segment display cannot show numbers"
    ],
    correctOptionIndex: 1
  },
  {
    id: 82,
    text: "In an OLED, what is the role of the conducting layer?",
    options: [
      "To emit light",
      "To transport \"holes\" from the anode",
      "To inject electrons"
    ],
    correctOptionIndex: 1
  },
  {
    id: 83,
    text: "In a CRT, what is the purpose of the conductive coating of graphite on the inside of the tube?",
    options: [
      "To focus the electron beam",
      "To collect secondary electrons and return them to the cathode",
      "To generate the primary colours"
    ],
    correctOptionIndex: 1
  },
  {
    id: 84,
    text: "Which of the following is a disadvantage of OLED compared to MicroLED?",
    options: [
      "Higher cost",
      "Shorter lifespan due to organic materials",
      "Lower contrast ratio"
    ],
    correctOptionIndex: 1
  },
  {
    id: 85,
    text: "A 7×5 dot matrix display is an example of a display used where high resolution is not a concern. How many LEDs would be in this matrix?",
    options: [
      "12",
      "35",
      "50"
    ],
    correctOptionIndex: 1
  },
  {
    id: 86,
    text: "The \"standard observer\" response defined by the CIE in the 1930s is used to measure:",
    options: [
      "Radiant energy at all wavelengths",
      "The visible portion of a light source, in candelas",
      "The temperature of a light source"
    ],
    correctOptionIndex: 1
  },
  {
    id: 87,
    text: "In a plasma screen, what happens when a moving particle collides with an atom?",
    options: [
      "The atom splits",
      "The atom is excited, causing an electron to jump to a higher energy level",
      "The atom becomes negatively charged"
    ],
    correctOptionIndex: 1
  },
  {
    id: 88,
    text: "Which type of OLED is described as being very lightweight, durable, and potentially able to be sewn into clothing?",
    options: [
      "Transparent OLED",
      "Foldable OLED",
      "White OLED"
    ],
    correctOptionIndex: 1
  },
  {
    id: 89,
    text: "What is a \"bad pixel\" on an LCD screen?",
    options: [
      "A pixel that changes colour when heated",
      "A pixel that is always on or off due to a faulty transistor",
      "A pixel that is misaligned with the shadow mask"
    ],
    correctOptionIndex: 1
  },
  {
    id: 90,
    text: "Why are OLEDs considered to have a large field of view (about 170 degrees)?",
    options: [
      "They use a backlight",
      "They produce their own light, unlike LCDs which block light",
      "They are made of flexible plastic"
    ],
    correctOptionIndex: 1
  },
  {
    id: 91,
    text: "In a CRT, the X plates (vertically situated) are responsible for:",
    options: [
      "Vertical deflection of the beam",
      "Horizontal deflection of the beam",
      "Focusing the beam"
    ],
    correctOptionIndex: 1
  },
  {
    id: 92,
    text: "What is the main advantage of using a multiplex drive for LED displays?",
    options: [
      "It increases the lifespan of the LEDs",
      "It reduces the number of drive connections",
      "It allows for a wider range of colours"
    ],
    correctOptionIndex: 1
  },
  {
    id: 93,
    text: "What component in an LCD helps maintain the voltage during one frame scan in an active-matrix display?",
    options: [
      "The liquid crystal material",
      "The storage capacitor (CS)",
      "The colour filter"
    ],
    correctOptionIndex: 1
  },
  {
    id: 94,
    text: "A key advantage of plasma screens over LCDs is their ability to produce:",
    options: [
      "Higher brightness",
      "Wide viewing angles",
      "Lower power consumption"
    ],
    correctOptionIndex: 1
  },
  {
    id: 95,
    text: "According to the comparison table, which technology has the highest brightness?",
    options: [
      "TFT LCD",
      "OLED",
      "MicroLED"
    ],
    correctOptionIndex: 2
  },
  {
    id: 96,
    text: "According to the comparison table, which technology has the longest lifespan?",
    options: [
      "TFT LCD",
      "OLED",
      "MicroLED"
    ],
    correctOptionIndex: 2
  },
  {
    id: 97,
    text: "According to the comparison table, which technology has the highest contrast?",
    options: [
      "TFT LCD",
      "OLED",
      "MicroLED"
    ],
    correctOptionIndex: 2
  },
  {
    id: 98,
    text: "According to the comparison table, which technology has the highest cost?",
    options: [
      "TFT LCD",
      "OLED",
      "MicroLED"
    ],
    correctOptionIndex: 2
  },
  {
    id: 99,
    text: "According to the comparison table, which technology has the fastest response time?",
    options: [
      "TFT LCD",
      "OLED",
      "MicroLED"
    ],
    correctOptionIndex: 2
  },
  {
    id: 100,
    text: "According to the comparison table, which technology has the lowest efficiency?",
    options: [
      "TFT LCD",
      "OLED",
      "MicroLED"
    ],
    correctOptionIndex: 0
  }
];
