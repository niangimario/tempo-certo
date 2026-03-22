import { Question } from "../../../shared/schema";

export const instrumentSystemsOverviewQuestions: Question[] = [
  {
    id: 1,
    text: "What are the four basic classifications of instruments by use?",
    options: [
      "Flight, engine, navigation, communication",
      "Flight, engine, navigation, other systems",
      "Primary, secondary, emergency, standby"
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "Which instruments are considered the primary flight instruments?",
    options: [
      "Airspeed, altimeter, magnetic compass, turn coordinator",
      "Attitude, altitude, airspeed, direction, rates",
      "VSI, HSI, RMI, ADI"
    ],
    correctOptionIndex: 1
  },
  {
    id: 3,
    text: "In the basic \"T\" arrangement, which instrument is placed in the top centre position?",
    options: [
      "Airspeed indicator",
      "Altimeter",
      "Artificial horizon (attitude indicator)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 4,
    text: "According to the text, what is often retained as emergency instruments in case of electrical failure?",
    options: [
      "A pneumatic altimeter, a gyro artificial horizon, and a magnetic direction indicator",
      "A GPS receiver and an ADC",
      "An electronic attitude indicator and a digital air data computer"
    ],
    correctOptionIndex: 0
  },
  {
    id: 5,
    text: "Engine instruments typically measure which parameters?",
    options: [
      "Quantity, pressure, temperature, and speed",
      "Voltage, current, frequency, and power",
      "Altitude, airspeed, heading, and vertical speed"
    ],
    correctOptionIndex: 0
  },
  {
    id: 6,
    text: "What are the three main groups of instruments mentioned under navigational instruments?",
    options: [
      "Compasses, radio navigation, GPS",
      "Navigational information, ground proximity warning, weather avoidance",
      "VOR, ILS, DME"
    ],
    correctOptionIndex: 1
  },
  {
    id: 7,
    text: "In a basic \"T\" arrangement, where is the heading indicator located?",
    options: [
      "Top centre",
      "Left of the attitude indicator",
      "Directly under the attitude indicator"
    ],
    correctOptionIndex: 2
  },
  {
    id: 8,
    text: "In newer aircraft with glass cockpit instruments, which display conforms to the basic T arrangement?",
    options: [
      "The multi function display (MFD)",
      "The primary flight display (PFD)",
      "The engine indicating system (EIS)"
    ],
    correctOptionIndex: 1
  },
  {
    id: 9,
    text: "What does the term \"glass cockpit\" describe?",
    options: [
      "A cockpit with all instruments made of glass",
      "Any cockpit that features electronic (digital) flight instrument displays",
      "A cockpit with traditional analogue dials and gauges"
    ],
    correctOptionIndex: 1
  },
  {
    id: 10,
    text: "What is an advantage of glass cockpits over traditional \"steam gauges\"?",
    options: [
      "They are cheaper to install",
      "They provide more information and increase situational awareness",
      "They require no electrical power"
    ],
    correctOptionIndex: 1
  },
  {
    id: 11,
    text: "Which of the following is listed as a disadvantage of glass cockpits?",
    options: [
      "High maintenance costs",
      "Installation costs",
      "Reduced reliability"
    ],
    correctOptionIndex: 1
  },
  {
    id: 12,
    text: "What does EFIS stand for?",
    options: [
      "Electronic Flight Information System",
      "Electronic Flight Instrument System",
      "Engine and Flight Instrument System"
    ],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "In many smaller aircraft, which two systems are often integrated into the MFD?",
    options: [
      "PFD and ND",
      "EIS and CAS",
      "EICAS and ECAM"
    ],
    correctOptionIndex: 0
  },
  {
    id: 14,
    text: "What is the main difference between the Boeing EICAS and the Airbus ECAM?",
    options: [
      "EICAS uses CRT displays, ECAM uses LCD",
      "ECAM displays corrective action (procedures) after failures, while EICAS typically does not",
      "EICAS is used only for engine data, ECAM for flight instruments"
    ],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "In the evolution of EFIS, what did the EADI and EHSI replace?",
    options: [
      "The altimeter and airspeed indicator",
      "The mechanical attitude director indicator (ADI) and horizontal situation indicator (HSI)",
      "The turn coordinator and vertical speed indicator"
    ],
    correctOptionIndex: 1
  },
  {
    id: 16,
    text: "In transport category aircraft, what does the PFD (primary flight display) integrate?",
    options: [
      "Only attitude and heading information",
      "Speed, altitude, vertical speed, attitude, autopilot annunciations, and more",
      "Only engine parameters and navigation data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "What does the ND (navigation display) integrate?",
    options: [
      "Engine instrumentation and crew alerts",
      "ILS, VOR, flight plan map, terrain, weather radar, and traffic information",
      "Only heading and track information"
    ],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "What does EICAS stand for?",
    options: [
      "Engine and Instrument Control Alert System",
      "Engine indicating and Crew alerting System",
      "Electronic Integrated Cockpit Alert System"
    ],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "In the Boeing EICAS, what is the crew alerting system (CAS) used for?",
    options: [
      "To replace the annunciator panel by displaying messages for failures",
      "To control the autopilot",
      "To display engine parameters only"
    ],
    correctOptionIndex: 0
  },
  {
    id: 20,
    text: "What does ECAM stand for?",
    options: [
      "Electronic Centralised Aircraft Monitor",
      "Engine and Crew Alerting Module",
      "Electronic Cockpit Alert Management"
    ],
    correctOptionIndex: 0
  },
  {
    id: 21,
    text: "In the Airbus ECAM, what unique feature is provided?",
    options: [
      "It displays terrain maps",
      "It displays corrective action to be taken by the pilot after a failure",
      "It uses only analogue displays"
    ],
    correctOptionIndex: 1
  },
  {
    id: 22,
    text: "Why do light aircraft instrumentation layouts vary so widely?",
    options: [
      "Because of differences in engine types",
      "Due to owner preferences, financial ability, and the aircraft's use (e.g., training)",
      "Because regulations require unique layouts for each aircraft"
    ],
    correctOptionIndex: 1
  },
  {
    id: 23,
    text: "In a trainer aircraft, what instrumentation configuration might be found?",
    options: [
      "Only one set of instrumentation (single pilot)",
      "Dual (left and right) instrumentation, possibly with glass on one side and steam gauges on the other",
      "Only glass cockpits on both sides"
    ],
    correctOptionIndex: 1
  },
  {
    id: 24,
    text: "In the Garmin G1000 system, what are the two main display units?",
    options: [
      "EADI and EHSI",
      "PFD and MFD",
      "Upper and lower ECAM displays"
    ],
    correctOptionIndex: 1
  },
  {
    id: 25,
    text: "In the Garmin G1000, what is the purpose of the top SD card slot in each display?",
    options: [
      "To store the terrain database",
      "To update the Jeppesen aviation database (NavData) and load software",
      "To store pilot flight logs"
    ],
    correctOptionIndex: 1
  },
  {
    id: 26,
    text: "The terrain and obstacle databases in the Garmin G1000 are stored on:",
    options: [
      "The top SD card slot",
      "The bottom SD card slot",
      "An internal hard drive that cannot be removed"
    ],
    correctOptionIndex: 1
  },
  {
    id: 27,
    text: "What is \"reversionary mode\" on the Garmin G1000 PFD?",
    options: [
      "A mode that displays only engine data",
      "The ability to display all information normally shown on the MFD in case of an MFD failure",
      "A mode that reverts to steam gauge backup"
    ],
    correctOptionIndex: 1
  },
  {
    id: 28,
    text: "What is the function of the MFD (multi function display) in the G1000 system?",
    options: [
      "It shows only engine instrumentation",
      "It typically shows a moving map and engine instrumentation, plus various other screens",
      "It is a backup for the PFD only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 29,
    text: "The basic six flight instruments are arranged in the \"basic T\" on which display in a glass cockpit?",
    options: [
      "MFD",
      "PFD",
      "EICAS display"
    ],
    correctOptionIndex: 1
  },
  {
    id: 30,
    text: "Which of the following is a benefit of the glass cockpit mentioned in the text?",
    options: [
      "It eliminates the need for any backup instruments",
      "It simplifies aircraft operation and navigation",
      "It requires no computer software updates"
    ],
    correctOptionIndex: 1
  },
  {
    id: 31,
    text: "In the Airbus ECAM architecture, which computers check for discrepancies in data and generate warning messages?",
    options: [
      "SDACs (System Data Acquisition Concentrators)",
      "DMCs (Display Management Computers)",
      "FWCs (Flight Warning Computers)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 32,
    text: "What is a common nickname for traditional analogue flight instruments?",
    options: [
      "Glass cockpit",
      "Steam gauges",
      "Digital avionics"
    ],
    correctOptionIndex: 1
  },
  {
    id: 33,
    text: "On the Garmin G1000, how often must the Jeppesen aviation database be updated to use GPS for IFR approaches?",
    options: [
      "Every 56 days",
      "Every 28 days",
      "Once a year"
    ],
    correctOptionIndex: 1
  },
  {
    id: 34,
    text: "The six basic flight instruments include all of the following except:",
    options: [
      "Airspeed indicator",
      "Altimeter",
      "Engine tachometer"
    ],
    correctOptionIndex: 2
  },
  {
    id: 35,
    text: "In large transport aircraft, where are engine instruments typically located?",
    options: [
      "On the co pilot's side only",
      "In the centre of the cockpit, visible to both pilots",
      "On a separate panel behind the pilots"
    ],
    correctOptionIndex: 1
  },
  {
    id: 36,
    text: "What sensors have replaced traditional gyroscopic flight instruments in glass cockpits?",
    options: [
      "Pitot static probes",
      "Electronic attitude and heading reference systems (AHRS) and air data computers (ADCs)",
      "Radio altimeters and GPS receivers only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 37,
    text: "In the Garmin G1000, which database must stay inserted in both the PFD and MFD to maintain terrain awareness?",
    options: [
      "The aviation database (NavData)",
      "The world terrain and obstacle database",
      "The software configuration database"
    ],
    correctOptionIndex: 1
  },
  {
    id: 38,
    text: "What is the purpose of the \"inset map\" on the Garmin G1000 PFD?",
    options: [
      "To display engine instrumentation",
      "To show a small map in the corner of the PFD",
      "To provide an alternative attitude indicator"
    ],
    correctOptionIndex: 1
  },
  {
    id: 39,
    text: "In the Airbus ECAM system, what is the role of the system data acquisition concentrators (SDACs)?",
    options: [
      "They generate warning messages and sounds",
      "They process sensor data and feed it to the flight warning computers",
      "They directly control the display management computers"
    ],
    correctOptionIndex: 1
  },
  {
    id: 40,
    text: "What type of display technology was first used in EFIS before liquid crystal displays (LCD) became common?",
    options: [
      "Plasma displays",
      "Cathode ray tubes (CRTs)",
      "Organic light emitting diodes (OLEDs)"
    ],
    correctOptionIndex: 1
  },
  {
    id: 41,
    text: "Which of the following is an example of an overlay or add on mentioned for glass cockpits?",
    options: [
      "Weather radar display",
      "Traffic and collision awareness system (TCAS)",
      "Both a and b"
    ],
    correctOptionIndex: 2
  },
  {
    id: 42,
    text: "In the basic \"T\" arrangement, where are the turn coordinator and vertical speed indicator typically placed?",
    options: [
      "Directly above the attitude indicator",
      "Under the airspeed and altitude instruments",
      "On a separate panel below the heading indicator"
    ],
    correctOptionIndex: 1
  },
  {
    id: 43,
    text: "On the Garmin G1000, what function do the buttons on the PFD primarily serve?",
    options: [
      "Adjusting the map range",
      "Setting the squawk code on the transponder",
      "Controlling the autopilot"
    ],
    correctOptionIndex: 1
  },
  {
    id: 44,
    text: "In multi engine aircraft, how is a particular engine parameter often displayed on a single gauge?",
    options: [
      "By using separate gauges for each engine",
      "By using multiple pointers on the same dial face",
      "By switching the display digitally between engines"
    ],
    correctOptionIndex: 1
  },
  {
    id: 45,
    text: "What is the purpose of the \"reversionary mode\" in the Garmin G1000 PFD?",
    options: [
      "To revert to traditional steam gauge displays",
      "To display all information normally shown on the MFD in case of an MFD failure",
      "To switch the PFD to an emergency power source"
    ],
    correctOptionIndex: 1
  },
  {
    id: 46,
    text: "Which manufacturer developed the ECAM system?",
    options: [
      "Boeing",
      "Garmin",
      "Airbus"
    ],
    correctOptionIndex: 2
  },
  {
    id: 47,
    text: "In the Garmin G1000, how often can the obstacle database be updated?",
    options: [
      "Every 28 days",
      "Every 56 days through a subscription service",
      "Once a year"
    ],
    correctOptionIndex: 1
  },
  {
    id: 48,
    text: "What does the \"moving map\" on the MFD typically display?",
    options: [
      "Only engine parameters",
      "Navigational information, such as aircraft position and route",
      "Only terrain information"
    ],
    correctOptionIndex: 1
  },
  {
    id: 49,
    text: "In the Airbus ECAM system, what happens to vital systems in the event of loss of both SDACs?",
    options: [
      "The ECAM becomes inoperative",
      "Failures can still be detected because vital systems are routed directly through the FWCs",
      "The pilot must rely on standby instruments only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "According to the text, what is a common reason for light aircraft to retain older instrumentation?",
    options: [
      "Older instruments are more reliable",
      "To introduce trainee pilots to the working principles of instrumentation and navigational aids",
      "Regulations prohibit glass cockpits in training aircraft"
    ],
    correctOptionIndex: 1
  }
];
