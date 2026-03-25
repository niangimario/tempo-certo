import { Question } from "@shared/schema";

export const acarsCommunicationSystemQuestions: Question[] = [
  {
    id: 1,
    text: "What does ACARS stand for?",
    options: [
      "Automatic Communication and Reporting System",
      "Aircraft Communication Addressing and Reporting System",
      "Airborne Collision Avoidance and Reporting System"
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "ACARS was designed by which organization?",
    options: [
      "ICAO",
      "ARINC (Aeronautical Radio, Incorporated)",
      "SITA"
    ],
    correctOptionIndex: 1
  },
  {
    id: 3,
    text: "In what year was ACARS first deployed?",
    options: [
      "1968",
      "1978",
      "1988"
    ],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "What is the primary purpose of the original ACARS system?",
    options: [
      "To provide in-flight entertainment",
      "To act as an automated time clock system for OOOI events",
      "To communicate with air traffic control"
    ],
    correctOptionIndex: 1
  },
  {
    id: 5,
    text: "What does the acronym OOOI stand for in ACARS terminology?",
    options: [
      "Out, Off, On, In",
      "Out of the gate, Off the ground, On the ground, Into the gate",
      "Origin, Overflight, Oceanic, Inbound"
    ],
    correctOptionIndex: 1
  },
  {
    id: 6,
    text: "What sensors does ACARS use to automatically determine OOOI times?",
    options: [
      "GPS and altimeter",
      "Doors, parking brake, and weight on wheels sensors",
      "Airspeed and engine temperature sensors"
    ],
    correctOptionIndex: 1
  },
  {
    id: 7,
    text: "What type of modem did early ACARS systems use to transmit OOOI reports?",
    options: [
      "Frequency shift keying (FSK)",
      "Minimum shift keying (MSK)",
      "Phase shift keying (PSK)"
    ],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "In the USA, what frequency is dominant for ACARS?",
    options: [
      "131.475 MHz",
      "131.550 MHz",
      "131.725 MHz"
    ],
    correctOptionIndex: 1
  },
  {
    id: 9,
    text: "In Europe, which network operates AIRCOM for ACARS?",
    options: [
      "ARINC",
      "SITA",
      "AVICOM"
    ],
    correctOptionIndex: 1
  },
  {
    id: 10,
    text: "How does ACARS communicate in areas not covered by VHF ground stations?",
    options: [
      "It stores messages for later transmission",
      "It uses satellite communication (SATCOM)",
      "It uses HF voice radio"
    ],
    correctOptionIndex: 1
  },
  {
    id: 11,
    text: "What is the function of ACARS regarding the Flight Management System (FMS)?",
    options: [
      "It replaces the FMS",
      "It acts as the communication system for flight plans and weather information to be sent to the FMS",
      "It powers the FMS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 12,
    text: "ACARS messages for requesting clearances fall under which category?",
    options: [
      "Airline administrative control",
      "Air traffic control (ATC) messages",
      "Aeronautical operational control"
    ],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "Which Airbus model was the first to use fly-by-wire?",
    options: [
      "A330",
      "A320",
      "A380"
    ],
    correctOptionIndex: 1
  },
  {
    id: 14,
    text: "What is one of the primary reasons manufacturers are switching to FBW?",
    options: [
      "Increased mechanical complexity",
      "Uniform handling characteristics across aircraft families",
      "Elimination of all backup systems"
    ],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "How does FBW help prevent tail strikes?",
    options: [
      "By adding a mechanical tail skid",
      "The flight control system can be programmed to indicate nose-up attitude limits",
      "By reducing engine power during takeoff"
    ],
    correctOptionIndex: 1
  },
  {
    id: 16,
    text: "What type of flight control system does FBW use for the control surfaces?",
    options: [
      "Mechanically controlled and hydraulically activated",
      "Electrically controlled and hydraulically activated",
      "Mechanically controlled and electrically activated"
    ],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "In the Airbus FBW system, what do pilots use to fly the aircraft in pitch and roll?",
    options: [
      "A conventional control column",
      "Sidesticks",
      "A yoke"
    ],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "On Airbus aircraft, which flight control surfaces maintain a mechanical backup?",
    options: [
      "Ailerons and spoilers",
      "Rudder and trimmable horizontal stabiliser",
      "Elevators and flaps"
    ],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "In a digital FBW system, complex software interprets pilot inputs based on:",
    options: [
      "Only the pilot's control column position",
      "Flight control laws and inputs from air data inertial reference units",
      "Predetermined mechanical linkages"
    ],
    correctOptionIndex: 1
  },
  {
    id: 20,
    text: "What does a \"triplex\" system refer to in FBW?",
    options: [
      "Three control surfaces moving together",
      "Three channels used to send signals to the computer",
      "Three pilots controlling the aircraft"
    ],
    correctOptionIndex: 1
  },
  {
    id: 21,
    text: "What is the function of potentiometers in an FBW actuator?",
    options: [
      "To power the actuator",
      "To send a signal back to the computer reporting actuator position",
      "To provide hydraulic pressure"
    ],
    correctOptionIndex: 1
  },
  {
    id: 22,
    text: "What is \"manoeuvre load alleviation\" in FBW?",
    options: [
      "Ailerons drooping to provide additional lift",
      "Ailerons deflecting upward to reduce wing loading during high-g manoeuvres",
      "Spoilers deflecting upward to increase drag"
    ],
    correctOptionIndex: 1
  },
  {
    id: 23,
    text: "What is the FMS often referred to as?",
    options: [
      "The eyes of the aircraft",
      "The brain of the aircraft navigation system",
      "The voice of the aircraft"
    ],
    correctOptionIndex: 1
  },
  {
    id: 24,
    text: "What does the FMS compare to determine if steering commands are needed?",
    options: [
      "Engine performance with fuel flow",
      "A pilot-selected flight plan with the horizontal and vertical aircraft position",
      "Weather radar data with outside conditions"
    ],
    correctOptionIndex: 1
  },
  {
    id: 25,
    text: "Through which interface can the crew change the flight plan in the FMS?",
    options: [
      "The navigation display (ND)",
      "The control display unit (CDU)",
      "The primary flight display (PFD)"
    ],
    correctOptionIndex: 1
  },
  {
    id: 26,
    text: "How often must the FMS navigation database be updated?",
    options: [
      "Every 14 days",
      "Every 28 days",
      "Every 56 days"
    ],
    correctOptionIndex: 1
  },
  {
    id: 27,
    text: "The FMS provides guidance commands to which system to bring the aircraft back to the flight plan?",
    options: [
      "The EFIS",
      "The auto flight system (AFS)",
      "The IRS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 28,
    text: "What are the three targets the crew can select for flight economy in the FMS?",
    options: [
      "Minimum time, maximum speed, minimum altitude",
      "Minimum cost, minimum fuel, or minimum flight duration",
      "Maximum payload, maximum range, minimum noise"
    ],
    correctOptionIndex: 1
  },
  {
    id: 29,
    text: "The FMS calculates the \"FM position\" using which sources?",
    options: [
      "Only GPS",
      "IRS position and computed radio position or GPS position",
      "Only VOR and DME"
    ],
    correctOptionIndex: 1
  },
  {
    id: 30,
    text: "What does the FMS automatically tune to get the best navigation result?",
    options: [
      "Only the GPS",
      "ILS, VOR, and DME",
      "Only the IRS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 31,
    text: "What type of gyro does the IRS use to sense angular rate?",
    options: [
      "A conventional rate gyro",
      "A ring laser gyro",
      "A mechanical spinning gyro"
    ],
    correctOptionIndex: 1
  },
  {
    id: 32,
    text: "The IRS is called a \"strap-down\" system because:",
    options: [
      "It is mounted on a stabilised platform",
      "Its sensors are directly mounted to the airframe",
      "It is strapped down during maintenance"
    ],
    correctOptionIndex: 1
  },
  {
    id: 33,
    text: "How many laser gyros and accelerometers does each IRU contain?",
    options: [
      "One of each",
      "Three of each",
      "Six of each"
    ],
    correctOptionIndex: 1
  },
  {
    id: 34,
    text: "What is the purpose of the dither motor in a laser gyro?",
    options: [
      "To power the gyro",
      "To vibrate the laser block to prevent frequency lock-in at low rotation rates",
      "To cool the laser"
    ],
    correctOptionIndex: 1
  },
  {
    id: 35,
    text: "In the IRS mode select unit (MSU), what is the normal operating mode for the IRS?",
    options: [
      "ALIGN",
      "NAV",
      "ATT"
    ],
    correctOptionIndex: 1
  },
  {
    id: 36,
    text: "What does the \"ALIGN\" light on the MSU indicate when flashing?",
    options: [
      "The IRU is powered on",
      "An abnormal alignment is sensed",
      "The IRU is in NAV mode"
    ],
    correctOptionIndex: 1
  },
  {
    id: 37,
    text: "In the IRS, what does the \"ON DC\" light indicate?",
    options: [
      "The IRU is using AC power",
      "115V AC power is removed, and the IRU operates on 28V DC",
      "The battery is charging"
    ],
    correctOptionIndex: 1
  },
  {
    id: 38,
    text: "On the Inertial System Display Unit (ISDU), what does the \"TK/GS\" display show?",
    options: [
      "True heading and ground speed",
      "Track angle and ground speed",
      "Wind speed and direction"
    ],
    correctOptionIndex: 1
  },
  {
    id: 39,
    text: "What is the alignment period for the IRU when \"ALIGN\" is selected?",
    options: [
      "Approximately 1 minute",
      "Approximately 10 minutes",
      "Approximately 30 minutes"
    ],
    correctOptionIndex: 1
  },
  {
    id: 40,
    text: "What does the accelerometer in an IRU measure?",
    options: [
      "Angular rate",
      "Linear acceleration",
      "Magnetic heading"
    ],
    correctOptionIndex: 1
  },
  {
    id: 41,
    text: "What does BITE stand for?",
    options: [
      "Basic Integrated Test Equipment",
      "Built-In Test Equipment",
      "Binary Interface Test Equipment"
    ],
    correctOptionIndex: 1
  },
  {
    id: 42,
    text: "What is the function of BITE circuits in an IRU?",
    options: [
      "To control the aircraft",
      "To isolate faults to the LRU level",
      "To power the unit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 43,
    text: "How many previous flights' status words can be stored in the non-volatile memory of the IRU?",
    options: [
      "At least the previous five flights",
      "At least the previous nine flights",
      "At least the previous twenty flights"
    ],
    correctOptionIndex: 1
  },
  {
    id: 44,
    text: "When can the manual test of the IRU be performed in NAV mode?",
    options: [
      "At any time",
      "When ground speed is less than 20 knots",
      "Only when the aircraft is in the air"
    ],
    correctOptionIndex: 1
  },
  {
    id: 45,
    text: "What indicates a fault on the front of the IRU?",
    options: [
      "A green light",
      "A yellow fault ball",
      "A blue LED"
    ],
    correctOptionIndex: 1
  },
  {
    id: 46,
    text: "Which aircraft was the ECAM system initially developed for?",
    options: [
      "Boeing 757",
      "Airbus A310",
      "Airbus A320"
    ],
    correctOptionIndex: 1
  },
  {
    id: 47,
    text: "In ECAM, which display unit is dedicated to warnings and corrective action in checklist format?",
    options: [
      "The right/lower unit",
      "The left/upper unit",
      "The centre unit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 48,
    text: "In ECAM, which display unit is dedicated to synoptic or graphical information?",
    options: [
      "The left/upper unit",
      "The right/lower unit",
      "The overhead unit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 49,
    text: "How many display modes does ECAM have?",
    options: [
      "Three",
      "Four",
      "Five"
    ],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "Which ECAM display mode takes precedence over all others?",
    options: [
      "The manual mode",
      "The failure-related mode",
      "The flight-phase related mode"
    ],
    correctOptionIndex: 1
  },
  {
    id: 51,
    text: "What type of aural warning accompanies a Level 3 ECAM warning (e.g., fire)?",
    options: [
      "Single chime",
      "Repetitive chime",
      "Continuous tone"
    ],
    correctOptionIndex: 1
  },
  {
    id: 52,
    text: "What visual indication accompanies a Level 2 ECAM warning?",
    options: [
      "Red light flashing",
      "Amber light",
      "Green light"
    ],
    correctOptionIndex: 1
  },
  {
    id: 53,
    text: "What does a \"boxed\" system title on an ECAM display indicate?",
    options: [
      "The system is operating normally",
      "A failure can affect other subsystems",
      "The system is being tested"
    ],
    correctOptionIndex: 1
  },
  {
    id: 54,
    text: "On which Boeing aircraft was EICAS first introduced?",
    options: [
      "Boeing 737",
      "Boeing 757 and 767",
      "Boeing 787"
    ],
    correctOptionIndex: 1
  },
  {
    id: 55,
    text: "What type of display units does EICAS use?",
    options: [
      "Cathode ray tubes (CRT)",
      "Liquid crystal display (LCD)",
      "Plasma display panels"
    ],
    correctOptionIndex: 1
  },
  {
    id: 56,
    text: "How many computers are in the basic EICAS system?",
    options: [
      "One",
      "Two (left and right)",
      "Three"
    ],
    correctOptionIndex: 1
  },
  {
    id: 57,
    text: "In EICAS, the upper display unit typically shows:",
    options: [
      "Secondary engine parameters",
      "Primary engine parameters and warning messages",
      "Maintenance data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 58,
    text: "In EICAS, the lower display unit typically shows:",
    options: [
      "Primary engine parameters",
      "Secondary engine parameters and status of non-engine systems",
      "Only the weather radar"
    ],
    correctOptionIndex: 1
  },
  {
    id: 59,
    text: "How many colours can the EICAS display units produce?",
    options: [
      "5",
      "7",
      "16"
    ],
    correctOptionIndex: 1
  },
  {
    id: 60,
    text: "In EICAS, what colour are warning messages?",
    options: [
      "Amber",
      "Red",
      "Yellow"
    ],
    correctOptionIndex: 1
  },
  {
    id: 61,
    text: "In EICAS, what colour are caution and advisory messages?",
    options: [
      "Red",
      "Yellow",
      "Green"
    ],
    correctOptionIndex: 1
  },
  {
    id: 62,
    text: "How many alert messages can EICAS display at once?",
    options: [
      "Up to 5",
      "Up to 11",
      "Up to 20"
    ],
    correctOptionIndex: 1
  },
  {
    id: 63,
    text: "Which EICAS alert level requires immediate corrective action and includes a master warning light?",
    options: [
      "Level C - Advisory",
      "Level A - Warning",
      "Level B - Caution"
    ],
    correctOptionIndex: 1
  },
  {
    id: 64,
    text: "Who uses the EICAS maintenance mode?",
    options: [
      "The flight crew",
      "Maintenance engineers",
      "The cabin crew"
    ],
    correctOptionIndex: 1
  },
  {
    id: 65,
    text: "When can the EICAS self-test mode be initiated?",
    options: [
      "Only in flight",
      "Only when the aircraft is on the ground",
      "At any time"
    ],
    correctOptionIndex: 1
  },
  {
    id: 66,
    text: "What must be set before performing an EICAS self-test?",
    options: [
      "The engine must be running",
      "The parking brake must be set",
      "The aircraft must be in the air"
    ],
    correctOptionIndex: 1
  },
  {
    id: 67,
    text: "What does EFIS stand for?",
    options: [
      "Electronic Flight Integration System",
      "Electronic Flight Instrument System",
      "Engine Flight Indication System"
    ],
    correctOptionIndex: 1
  },
  {
    id: 68,
    text: "What are the two principal display units in a commercial aircraft EFIS?",
    options: [
      "The EICAS and ECAM",
      "The Primary Flight Display (PFD) and Navigation Display (ND)",
      "The attitude indicator and airspeed indicator"
    ],
    correctOptionIndex: 1
  },
  {
    id: 69,
    text: "On the captain's side of the flight deck, where is the PFD located relative to the ND?",
    options: [
      "To the right of the ND",
      "To the left of the ND",
      "Below the ND"
    ],
    correctOptionIndex: 1
  },
  {
    id: 70,
    text: "What is the centre of the PFD dedicated to?",
    options: [
      "The airspeed indicator",
      "The attitude indicator",
      "The altitude indicator"
    ],
    correctOptionIndex: 1
  },
  {
    id: 71,
    text: "On a PFD, how are airspeed and altitude typically presented?",
    options: [
      "As round dial gauges",
      "As vertical tapes that scroll up and down",
      "As digital readouts only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 72,
    text: "What does the vertical speed indicator (VSI) on a PFD show?",
    options: [
      "The aircraft's magnetic heading",
      "The rate of ascent or descent",
      "The aircraft's ground speed"
    ],
    correctOptionIndex: 1
  },
  {
    id: 73,
    text: "What information does the Navigation Display (ND) show?",
    options: [
      "Only the aircraft's attitude",
      "Horizontal situation data, weather radar, and TCAS information",
      "Engine parameters only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 74,
    text: "What is the purpose of the heading display at the bottom of the PFD?",
    options: [
      "To show engine thrust",
      "To show the aircraft's magnetic heading and track",
      "To show the selected altitude"
    ],
    correctOptionIndex: 1
  },
  {
    id: 75,
    text: "Why are mechanical gauges retained alongside glass flight decks?",
    options: [
      "They are required by law for all flights",
      "They serve as backup instruments in the event of total electrical failure",
      "They are used for training purposes"
    ],
    correctOptionIndex: 1
  },
  {
    id: 76,
    text: "What does GPS stand for?",
    options: [
      "Ground Positioning System",
      "Global Positioning System",
      "Guidance and Positioning System"
    ],
    correctOptionIndex: 1
  },
  {
    id: 77,
    text: "How many satellites are in the full GPS constellation?",
    options: [
      "21",
      "24",
      "31"
    ],
    correctOptionIndex: 1
  },
  {
    id: 78,
    text: "What is the orbital period of a GPS satellite?",
    options: [
      "6 hours",
      "12 hours",
      "24 hours"
    ],
    correctOptionIndex: 1
  },
  {
    id: 79,
    text: "What is the altitude of GPS satellites above the earth's surface?",
    options: [
      "5,000 km",
      "20,200 km",
      "36,000 km"
    ],
    correctOptionIndex: 1
  },
  {
    id: 80,
    text: "What is the frequency of the L1 carrier used by GPS?",
    options: [
      "1227.6 MHz",
      "1575.42 MHz",
      "1176 MHz"
    ],
    correctOptionIndex: 1
  },
  {
    id: 81,
    text: "Which GPS code provides the Standard Positioning Service (SPS)?",
    options: [
      "The P-code",
      "The coarse acquisition (CA) code",
      "The Y-code"
    ],
    correctOptionIndex: 1
  },
  {
    id: 82,
    text: "What is the function of the control segment (ground stations) in GPS?",
    options: [
      "To launch the satellites",
      "To monitor signals and amend almanack and ephemeris messages",
      "To provide power to the satellites"
    ],
    correctOptionIndex: 1
  },
  {
    id: 83,
    text: "What is an \"ephemeris\" message transmitted by a GPS satellite?",
    options: [
      "The satellite's clock time",
      "The satellite's exact position and path",
      "The satellite's battery status"
    ],
    correctOptionIndex: 1
  },
  {
    id: 84,
    text: "Why are the ranges measured by a GPS receiver called \"pseudo ranges\"?",
    options: [
      "Because they are not accurate",
      "Because they include timing errors from the receiver's less accurate clock",
      "Because they are calculated from almanac data only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 85,
    text: "How many satellites does a GPS receiver need to synchronise its clock and calculate a 3D position?",
    options: [
      "Three",
      "Four",
      "Five"
    ],
    correctOptionIndex: 1
  },
  {
    id: 86,
    text: "What does GNSS stand for?",
    options: [
      "Global Navigation and Surveillance System",
      "Global Navigation Satellite System",
      "Ground Navigation Satellite System"
    ],
    correctOptionIndex: 1
  },
  {
    id: 87,
    text: "Which GNSS is owned and operated by the People's Republic of China?",
    options: [
      "Galileo",
      "BeiDou (BDS)",
      "GLONASS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 88,
    text: "Which GNSS is owned and operated by the European Union?",
    options: [
      "GLONASS",
      "Galileo",
      "NavIC"
    ],
    correctOptionIndex: 1
  },
  {
    id: 89,
    text: "Which GNSS is owned and operated by the Russian Federation?",
    options: [
      "BeiDou",
      "GLONASS",
      "Galileo"
    ],
    correctOptionIndex: 1
  },
  {
    id: 90,
    text: "Which is a regional GNSS designed to cover the Indian region?",
    options: [
      "QZSS",
      "NavIC (IRNSS)",
      "BeiDou"
    ],
    correctOptionIndex: 1
  },
  {
    id: 91,
    text: "Which GNSS is owned by Japan to improve coverage in East Asia and Oceania?",
    options: [
      "Galileo",
      "QZSS (Quasi-Zenith Satellite System)",
      "NavIC"
    ],
    correctOptionIndex: 1
  },
  {
    id: 92,
    text: "What does ADS-B stand for?",
    options: [
      "Airborne Dependent Surveillance-Broadcast",
      "Automatic Dependent Surveillance-Broadcast",
      "Advanced Data System-Broadcast"
    ],
    correctOptionIndex: 1
  },
  {
    id: 93,
    text: "ADS-B relies on which system to determine an aircraft's precise location?",
    options: [
      "Inertial Reference System (IRS)",
      "Global Positioning System (GPS)",
      "VOR/DME"
    ],
    correctOptionIndex: 1
  },
  {
    id: 94,
    text: "How often does an ADS-B equipped aircraft broadcast its position?",
    options: [
      "Once a minute",
      "Several times a second",
      "Once every 10 seconds"
    ],
    correctOptionIndex: 1
  },
  {
    id: 95,
    text: "What is the effective range of ADS-B broadcasts?",
    options: [
      "About 50 miles",
      "About 150 miles",
      "About 500 miles"
    ],
    correctOptionIndex: 1
  },
  {
    id: 96,
    text: "Which class of ADS-B hardware can transmit data and \"wake up\" ground stations?",
    options: [
      "ADS-B receiver only",
      "ADS-B transceiver or transmitter (ADS-B OUT)",
      "GPS receiver only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 97,
    text: "What does TIS-B provide?",
    options: [
      "Graphical weather information",
      "Traffic reporting services, including non-ADS-B aircraft tracked by radar",
      "Flight information services"
    ],
    correctOptionIndex: 1
  },
  {
    id: 98,
    text: "What does FIS-B provide?",
    options: [
      "Traffic information",
      "Graphical weather products, TFRs, and special-use airspace information",
      "Fuel information"
    ],
    correctOptionIndex: 1
  },
  {
    id: 99,
    text: "What is a UAT (Universal Access Transceiver)?",
    options: [
      "A type of GPS receiver",
      "A data link intended to serve the general aviation community for ADS-B",
      "A type of Mode S transponder"
    ],
    correctOptionIndex: 1
  },
  {
    id: 100,
    text: "Aircraft operating below 18,000 ft typically use which frequency for ADS-B?",
    options: [
      "1090 MHz",
      "978 MHz",
      "131.550 MHz"
    ],
    correctOptionIndex: 1
  },
  {
    id: 101,
    text: "What does TCAS stand for?",
    options: [
      "Traffic Control and Alert System",
      "Traffic Alert and Collision Avoidance System",
      "Terrain Collision Avoidance System"
    ],
    correctOptionIndex: 1
  },
  {
    id: 102,
    text: "What is the international standard for TCAS called?",
    options: [
      "ACAS (Airborne Collision Avoidance System)",
      "ACAS (Airborne Collision Avoidance System)",
      "RAAS"
    ],
    correctOptionIndex: 0
  },
  {
    id: 103,
    text: "ICAO mandates TCAS for aircraft with a maximum take-off mass of over:",
    options: [
      "2,500 kg",
      "5,700 kg",
      "10,000 kg"
    ],
    correctOptionIndex: 1
  },
  {
    id: 104,
    text: "TCAS I provides:",
    options: [
      "Resolution advisories (RA) only",
      "Traffic advisories (TA) only",
      "Both TA and RA"
    ],
    correctOptionIndex: 1
  },
  {
    id: 105,
    text: "TCAS II provides:",
    options: [
      "Traffic advisories only",
      "Traffic advisories and resolution advisories (vertical sense)",
      "Resolution advisories in the horizontal sense only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 106,
    text: "On what frequency does TCAS interrogate other aircraft?",
    options: [
      "1090 MHz",
      "1030 MHz",
      "978 MHz"
    ],
    correctOptionIndex: 1
  },
  {
    id: 107,
    text: "On what frequency do aircraft transponders reply to TCAS interrogations?",
    options: [
      "1030 MHz",
      "1090 MHz",
      "131.550 MHz"
    ],
    correctOptionIndex: 1
  },
  {
    id: 108,
    text: "What does a solid yellow circle on a TCAS display represent?",
    options: [
      "Non-threatening traffic",
      "A traffic advisory (TA) - potentially hazardous traffic",
      "A resolution advisory (RA) - collision threat"
    ],
    correctOptionIndex: 1
  },
  {
    id: 109,
    text: "What does a solid red square on a TCAS display represent?",
    options: [
      "Proximate traffic",
      "A resolution advisory (RA) - actual collision threat",
      "A non-threat aircraft"
    ],
    correctOptionIndex: 1
  },
  {
    id: 110,
    text: "What is the typical time between a Traffic Advisory (TA) and a Resolution Advisory (RA)?",
    options: [
      "1-2 seconds",
      "10-15 seconds",
      "30-40 seconds"
    ],
    correctOptionIndex: 1
  },
  {
    id: 111,
    text: "What does the voice \"Traffic, Traffic\" indicate?",
    options: [
      "A resolution advisory (RA)",
      "A traffic advisory (TA)",
      "A system test"
    ],
    correctOptionIndex: 1
  },
  {
    id: 112,
    text: "What is the primary action a pilot should take upon receiving a Resolution Advisory (RA)?",
    options: [
      "Contact ATC immediately",
      "Follow the RA instruction (climb or descend) immediately, disregarding ATC instructions",
      "Ignore the RA"
    ],
    correctOptionIndex: 1
  },
  {
    id: 113,
    text: "What does a +/- sign next to an intruder's altitude on TCAS indicate?",
    options: [
      "The intruder is above or below",
      "The relative altitude is changing by more than 500 ft/min",
      "The intruder is a threat"
    ],
    correctOptionIndex: 1
  },
  {
    id: 114,
    text: "What is a RA VSI?",
    options: [
      "A type of navigation display",
      "A modified VSI that shows safe and unsafe rates of climb/descent",
      "A backup attitude indicator"
    ],
    correctOptionIndex: 1
  },
  {
    id: 115,
    text: "What is a TAS (Traffic Advisory System) for light aircraft?",
    options: [
      "A ground-based system",
      "An independent airborne system using directional antennas and a Mode S transponder",
      "A system that provides resolution advisories"
    ],
    correctOptionIndex: 1
  },
  {
    id: 116,
    text: "What is a key driver for moving from federated avionics to IMA?",
    options: [
      "The simplicity of ARINC 429",
      "The growth of digital information beyond the capability of ARINC 429",
      "The need for more cables"
    ],
    correctOptionIndex: 1
  },
  {
    id: 117,
    text: "What does IMA stand for?",
    options: [
      "Integrated Mechanical Avionics",
      "Integrated Modular Avionics",
      "Independent Modular Architecture"
    ],
    correctOptionIndex: 1
  },
  {
    id: 118,
    text: "What are the advantages of IMA over federated avionics?",
    options: [
      "Increased weight and complexity",
      "Reduced weight, size, power, and recurring cost",
      "More individual LRUs"
    ],
    correctOptionIndex: 1
  },
  {
    id: 119,
    text: "What network technology is used for communication in IMA systems like the Airbus A380?",
    options: [
      "ARINC 429",
      "AFDX (Avionics Full-Duplex Switched Ethernet)",
      "CAN bus"
    ],
    correctOptionIndex: 1
  },
  {
    id: 120,
    text: "What does ARINC 653 describe?",
    options: [
      "A physical layer for data buses",
      "An application program interface and operating system for flight-critical avionics",
      "A standard for cockpit lighting"
    ],
    correctOptionIndex: 1
  },
  {
    id: 121,
    text: "How much weight did Boeing save on the 787 avionics suite by using IMA?",
    options: [
      "500 lbs",
      "2,000 lbs",
      "5,000 lbs"
    ],
    correctOptionIndex: 1
  },
  {
    id: 122,
    text: "What is the Boeing 787's central computing system called?",
    options: [
      "CPIOM",
      "Common Core System (CCS)",
      "AIMS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 123,
    text: "What is an Airbus CPIOM?",
    options: [
      "A type of display unit",
      "A Core Processing Input/Output Module that hosts avionics applications",
      "A flight control computer"
    ],
    correctOptionIndex: 1
  },
  {
    id: 124,
    text: "In Airbus IMA, what does ADCN stand for?",
    options: [
      "Air Data Computer Network",
      "Avionics Data Communication Network",
      "Automatic Data Control Network"
    ],
    correctOptionIndex: 1
  },
  {
    id: 125,
    text: "How many CPIOMs are used in the Airbus A380 IMA architecture?",
    options: [
      "Five",
      "Seven",
      "Ten"
    ],
    correctOptionIndex: 1
  },
  {
    id: 126,
    text: "What are the three subsystems of the cabin system?",
    options: [
      "Cabin core, cabin lighting, cabin entertainment",
      "Cabin core system, in-flight entertainment system (IFES), cabin monitoring system",
      "Cabin interphone, passenger address, cabin signs"
    ],
    correctOptionIndex: 1
  },
  {
    id: 127,
    text: "What is the Airbus cabin core system called?",
    options: [
      "CSSC",
      "CIDS (Cabin Intercommunication Data System)",
      "CAP"
    ],
    correctOptionIndex: 1
  },
  {
    id: 128,
    text: "What is the Boeing cabin core system controller called?",
    options: [
      "CIDS",
      "CSSC (Cabin Service System Controller)",
      "FAP"
    ],
    correctOptionIndex: 1
  },
  {
    id: 129,
    text: "What are the primary interfaces between cabin attendants and the CIDS?",
    options: [
      "The flight deck overhead panel",
      "The Flight Attendant Panels (FAPs)",
      "The mode select unit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 130,
    text: "How many CIDS directors are typically in an Airbus system for redundancy?",
    options: [
      "One",
      "Two or more",
      "Four"
    ],
    correctOptionIndex: 1
  },
  {
    id: 131,
    text: "What is the function of a Decoder/Encoder Unit Type A (DEU A) in CIDS?",
    options: [
      "To control cabin crew related functions",
      "To control passenger related functions like cabin lighting and signs",
      "To control the in-flight entertainment system"
    ],
    correctOptionIndex: 1
  },
  {
    id: 132,
    text: "What do Area Call Panels (ACPs) in the cabin indicate?",
    options: [
      "The aircraft's altitude",
      "Passenger calls, interphone calls, or lavatory smoke detection",
      "The weather radar"
    ],
    correctOptionIndex: 1
  },
  {
    id: 133,
    text: "What do Attendant Indication Panels (AIPs) display?",
    options: [
      "Flight plan information",
      "Dial and call information from the PA or interphone, and cabin system information",
      "Engine parameters"
    ],
    correctOptionIndex: 1
  },
  {
    id: 134,
    text: "When the fasten seat belt (FSB) switch is in \"AUTO\", when do the signs illuminate?",
    options: [
      "When the engines are started",
      "When nose landing gear is down and locked, or slats extended with engine running",
      "When the cabin altitude exceeds 10,000 ft"
    ],
    correctOptionIndex: 1
  },
  {
    id: 135,
    text: "What is the primary goal of aircraft information systems?",
    options: [
      "To reduce the number of pilots",
      "To improve flight, cabin, and maintenance operations and provide passenger services",
      "To replace the FMS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 136,
    text: "What is Boeing's health management system called?",
    options: [
      "AIRMAN",
      "AHM (Aeroplane Health Management)",
      "OIS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 137,
    text: "What is Airbus's intelligent maintenance application called?",
    options: [
      "AHM",
      "AIRMAN (Aircraft Maintenance Analysis)",
      "OIS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 138,
    text: "What is an Electronic Flight Bag (EFB)?",
    options: [
      "A physical bag to carry flight documents",
      "An electronic information management device to help flight crews perform tasks more efficiently",
      "A type of flight computer"
    ],
    correctOptionIndex: 1
  },
  {
    id: 139,
    text: "A Class 1 EFB is typically:",
    options: [
      "Permanently installed and linked to aircraft systems",
      "A portable electronic device (PED) such as a tablet",
      "A laptop that is mounted and connected to aircraft power"
    ],
    correctOptionIndex: 1
  },
  {
    id: 140,
    text: "A Class 3 EFB is considered:",
    options: [
      "A portable electronic device",
      "Installed equipment, subject to airworthiness requirements",
      "A backup device not used in flight"
    ],
    correctOptionIndex: 1
  },
  {
    id: 141,
    text: "What is the function of the Secure Communication Interface (SCI) in an OIS?",
    options: [
      "To provide Wi-Fi to passengers",
      "To link the avionics world and the open world, ensuring network security",
      "To control the cabin lighting"
    ],
    correctOptionIndex: 1
  },
  {
    id: 142,
    text: "What is the Onboard Maintenance Terminal (OMT) used for?",
    options: [
      "In-flight entertainment",
      "Maintenance personnel to access maintenance applications",
      "Passenger communication"
    ],
    correctOptionIndex: 1
  },
  {
    id: 143,
    text: "What is the purpose of the internal wireless datalink (leaky line antennas)?",
    options: [
      "To provide satellite communication",
      "To provide wireless connectivity in the cabin for passengers and crew",
      "To communicate with air traffic control"
    ],
    correctOptionIndex: 1
  },
  {
    id: 144,
    text: "What does the Network Server System (NSS) provide?",
    options: [
      "Only email for passengers",
      "Shared file server, data processing, and mass storage for flight, cabin, and maintenance operations",
      "Weather radar processing"
    ],
    correctOptionIndex: 1
  },
  {
    id: 145,
    text: "In the Airbus A380, what does the Onboard Information Terminal (OIT) provide?",
    options: [
      "Maintenance information only",
      "Flight deck crew access to the OIS as an EFB application",
      "Passenger entertainment"
    ],
    correctOptionIndex: 1
  },
  {
    id: 146,
    text: "Why should laptops used in the flight deck be shut down after a flight?",
    options: [
      "To save fuel",
      "To prevent them from draining their internal battery after aircraft power is off",
      "To comply with maintenance regulations"
    ],
    correctOptionIndex: 1
  },
  {
    id: 147,
    text: "What is the function of the air data computer (ADC) when combined with the IRS?",
    options: [
      "It replaces the IRS",
      "It provides air data references to be combined with inertial sensed parameters for EFIS presentation",
      "It only controls the pitot-static system"
    ],
    correctOptionIndex: 1
  },
  {
    id: 148,
    text: "What does the \"ATT\" mode on the IRS MSU provide?",
    options: [
      "Full navigation data",
      "Only attitude and heading data in a reversionary mode",
      "Alignment data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 149,
    text: "What does the \"FAULT\" light on the IRS MSU indicate?",
    options: [
      "The IRU is in alignment",
      "An abnormal condition exists in the IRU",
      "DC power has failed"
    ],
    correctOptionIndex: 1
  },
  {
    id: 150,
    text: "What is the resolution of the track angle displayed on the ISDU?",
    options: [
      "1°",
      "0.1°",
      "0.01°"
    ],
    correctOptionIndex: 1
  },
  {
    id: 151,
    text: "What is the purpose of the dither motor in a laser gyro?",
    options: [
      "To start the laser",
      "To produce an audible hum for warning",
      "To vibrate the laser block through the lock-in region"
    ],
    correctOptionIndex: 2
  },
  {
    id: 152,
    text: "In an accelerometer, what is the analogue output signal representing acceleration derived from?",
    options: [
      "The position of the proof mass",
      "The current in the torquer coil needed to null the error signal",
      "The temperature sensor"
    ],
    correctOptionIndex: 1
  },
  {
    id: 153,
    text: "What does the FMS use to calculate the optimum vertical path?",
    options: [
      "Only the horizontal path",
      "The horizontal path, cruise altitude, aircraft weight, and SID",
      "Only the weather conditions"
    ],
    correctOptionIndex: 1
  },
  {
    id: 154,
    text: "In an FBW system, when does the actuator stop moving?",
    options: [
      "When the pilot stops moving the sidestick",
      "When the feedback signal from the actuator cancels out the command signal",
      "When the hydraulic pressure is removed"
    ],
    correctOptionIndex: 1
  },
  {
    id: 155,
    text: "What is the purpose of the \"CLR\" switch on the ECAM control panel?",
    options: [
      "To test the system",
      "To clear warning and status messages",
      "To recall previously cleared messages"
    ],
    correctOptionIndex: 1
  },
  {
    id: 156,
    text: "In EICAS, what colour are the names of parameters being measured (e.g., N1, oil pressure)?",
    options: [
      "White",
      "Cyan",
      "Green"
    ],
    correctOptionIndex: 1
  },
  {
    id: 157,
    text: "What is the purpose of the EICAS maintenance mode?",
    options: [
      "For flight crew to diagnose in-flight faults",
      "To provide engineers with information in five different display formats for troubleshooting",
      "To display the aircraft's status for dispatch"
    ],
    correctOptionIndex: 1
  },
  {
    id: 158,
    text: "In a PFD, what does a \"bug\" indicate?",
    options: [
      "A system failure",
      "Critical speeds and altitudes (e.g., V speeds, selected altitude)",
      "The aircraft's track"
    ],
    correctOptionIndex: 1
  },
  {
    id: 159,
    text: "What is the primary benefit of ADS-B for pilots?",
    options: [
      "It replaces the need for a transponder",
      "It provides access to the same real-time traffic displays that controllers view",
      "It allows for voice communication with ATC"
    ],
    correctOptionIndex: 1
  },
  {
    id: 160,
    text: "What does a solid white diamond on a TCAS display indicate?",
    options: [
      "A resolution advisory",
      "Proximate traffic (within safe zone but not a threat)",
      "Non-threatening traffic outside the safe zone"
    ],
    correctOptionIndex: 1
  },
  {
    id: 161,
    text: "What does an unfilled white diamond on a TCAS display indicate?",
    options: [
      "A resolution advisory",
      "Non-threatening traffic more than 6 nm or 1200 ft away",
      "A system failure"
    ],
    correctOptionIndex: 1
  },
  {
    id: 162,
    text: "What is the benefit of ARINC 653 partitioning?",
    options: [
      "It allows for faster data transfer",
      "It separates critical and non-critical functions so they cannot interfere with each other",
      "It reduces the number of wires needed"
    ],
    correctOptionIndex: 1
  },
  {
    id: 163,
    text: "What does a \"virtual backplane\" in IMA refer to?",
    options: [
      "A physical circuit board",
      "A data communications network (like AFDX) that replaces point-to-point cabling",
      "A backup power supply"
    ],
    correctOptionIndex: 1
  },
  {
    id: 164,
    text: "On the Airbus A380, which CPIOM hosts flight deck and flight controls applications?",
    options: [
      "CPIOM-A",
      "CPIOM-C",
      "CPIOM-G"
    ],
    correctOptionIndex: 1
  },
  {
    id: 165,
    text: "What is the function of the passenger address (PA) system in CIDS?",
    options: [
      "To call the flight attendants",
      "To distribute announcements from the flight deck and attendant stations through loudspeakers",
      "To play boarding music only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 166,
    text: "What does the \"EXIT\" sign in the cabin get power from?",
    options: [
      "The CIDS director",
      "The emergency power supply unit",
      "The DEU A"
    ],
    correctOptionIndex: 1
  },
  {
    id: 167,
    text: "What is the purpose of a shunt on an ESDS PCB connector?",
    options: [
      "To protect against physical damage only",
      "To keep all connector contacts at the same potential",
      "To provide a handle for removal"
    ],
    correctOptionIndex: 1
  },
  {
    id: 168,
    text: "In a static-free work station, what does the ioniser do?",
    options: [
      "Increases humidity",
      "Neutralises incidental charges on devices and assemblies",
      "Provides a ground path"
    ],
    correctOptionIndex: 1
  },
  {
    id: 169,
    text: "Why is a wrist strap used for ESD protection required to have a grounding lead resistance greater than 1 Megohm?",
    options: [
      "To increase the discharge current",
      "To protect the wearer from shock hazard if contact with high voltage occurs",
      "To ensure a faster discharge"
    ],
    correctOptionIndex: 1
  },
  {
    id: 170,
    text: "What is the function of the \"soft failure\" caused by ESD?",
    options: [
      "It causes immediate catastrophic failure",
      "It leads to latent, intermittent faults that are difficult to detect",
      "It causes visible physical damage"
    ],
    correctOptionIndex: 1
  },
  {
    id: 171,
    text: "In the human body model (HBM) for ESD testing, the capacitor value is:",
    options: [
      "200 pF",
      "100 pF",
      "1500 pF"
    ],
    correctOptionIndex: 1
  },
  {
    id: 172,
    text: "In the charged device model (CDM) for ESD testing, the discharge is from:",
    options: [
      "A person to the device",
      "The device to a conductive surface",
      "A machine to the device"
    ],
    correctOptionIndex: 1
  },
  {
    id: 173,
    text: "According to the ESD sensitivity table, which device is most sensitive (lowest voltage range)?",
    options: [
      "Bipolar transistors",
      "MOS/FET and thin film resistors",
      "Silicon controlled rectifiers"
    ],
    correctOptionIndex: 1
  },
  {
    id: 174,
    text: "According to the HBM classification, Class 1B covers which voltage range?",
    options: [
      "250 volts to < 500 volts",
      "500 volts to < 1,000 volts",
      "1,000 volts to < 2,000 volts"
    ],
    correctOptionIndex: 1
  },
  {
    id: 175,
    text: "What is the function of the \"ALIGN\" mode on the IRS MSU?",
    options: [
      "To provide navigation data",
      "To apply power and allow the IRU to go through an alignment period",
      "To provide only attitude data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 176,
    text: "What does the \"WIND\" display on the ISDU show?",
    options: [
      "Wind speed only",
      "Wind speed and direction",
      "Wind direction only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 177,
    text: "What is the purpose of the \"RCL\" switch on the ECAM control panel?",
    options: [
      "To clear messages",
      "To recall previously cleared warning messages if the failure still exists",
      "To select status messages"
    ],
    correctOptionIndex: 1
  },
  {
    id: 178,
    text: "In EICAS, what does the \"STATUS\" mode display?",
    options: [
      "Primary engine parameters",
      "Data to determine the dispatch readiness of the aircraft",
      "Maintenance data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 179,
    text: "What is the function of the \"EVENT READ\" switch on the EICAS maintenance panel?",
    options: [
      "To start a self-test",
      "To retrieve system failures that have occurred in flight",
      "To clear fault messages"
    ],
    correctOptionIndex: 1
  },
  {
    id: 180,
    text: "What is the colour of advisory messages in EICAS?",
    options: [
      "Red",
      "Amber",
      "Yellow"
    ],
    correctOptionIndex: 1
  },
  {
    id: 181,
    text: "In a PFD, the attitude indicator is designed to look like traditional mechanical instruments, but the gyroscope is:",
    options: [
      "Located within the PFD itself",
      "A separate device whose information is displayed on the PFD",
      "No longer used"
    ],
    correctOptionIndex: 1
  },
  {
    id: 182,
    text: "What is the purpose of the \"SYS DSPL\" switch on the ISDU?",
    options: [
      "To test the system",
      "To select the left or right IRU for initialisation or data display",
      "To select the brightness of the display"
    ],
    correctOptionIndex: 1
  },
  {
    id: 183,
    text: "In the Airbus FBW system, what is \"normal law\"?",
    options: [
      "A backup mode for the rudder",
      "A mode where computers prevent excessive manoeuvres and exceeding safe parameters",
      "A mode where all electrical controls are disabled"
    ],
    correctOptionIndex: 1
  },
  {
    id: 184,
    text: "What is the advantage of the FMS automatically tuning Navoids?",
    options: [
      "It reduces pilot workload for engine management",
      "It selects the stations that give the best navigation result",
      "It updates the weather radar"
    ],
    correctOptionIndex: 1
  },
  {
    id: 185,
    text: "What does the FMS use to update the aircraft's present position during navigation?",
    options: [
      "Only the IRS",
      "IRS, VOR, DME, ILS, and GPS",
      "Only GPS"
    ],
    correctOptionIndex: 1
  },
  {
    id: 186,
    text: "What is the purpose of the \"align status\" countdown on the ISDU?",
    options: [
      "To show time until power-off",
      "To show the remaining time of the align cycle",
      "To show the time to the next waypoint"
    ],
    correctOptionIndex: 1
  },
  {
    id: 187,
    text: "In EICAS, what does a level C advisory indicate?",
    options: [
      "A warning requiring immediate action",
      "Crew awareness, with no caution lights or aural tones",
      "A system failure requiring maintenance action"
    ],
    correctOptionIndex: 1
  },
  {
    id: 188,
    text: "What does the ECAM \"STS\" switch allow?",
    options: [
      "A manual selection of an aircraft status message",
      "A self-test of the system",
      "A recall of cleared warnings"
    ],
    correctOptionIndex: 0
  },
  {
    id: 189,
    text: "What is the purpose of the \"PRAM\" (pre-recorded announcement and boarding music) function in CIDS?",
    options: [
      "To provide entertainment for passengers",
      "To transmit pre-recorded announcements and music to passenger loudspeakers",
      "To communicate with the flight deck"
    ],
    correctOptionIndex: 1
  },
  {
    id: 190,
    text: "What does a \"NO PED\" sign indicate in the cabin?",
    options: [
      "No personal electronic devices allowed to be used",
      "No portable electronic devices allowed to be used",
      "No personal entertainment devices allowed to be used"
    ],
    correctOptionIndex: 1
  },
  {
    id: 191,
    text: "What is the purpose of the \"EVAC\" signalling in the CIDS?",
    options: [
      "To call a flight attendant",
      "For emergency evacuation signalling",
      "To indicate lavatory smoke"
    ],
    correctOptionIndex: 1
  },
  {
    id: 192,
    text: "What is the purpose of the wireless manager application in the internal wireless datalink?",
    options: [
      "To control the cabin lighting",
      "To manage wireless connectivity",
      "To provide satellite communication"
    ],
    correctOptionIndex: 1
  },
  {
    id: 193,
    text: "What is the function of the printer located on the centre pedestal in an OIS?",
    options: [
      "To print flight plans only",
      "To print data from the avionics domain",
      "To print cabin maintenance data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 194,
    text: "What does the \"AUTO EVENT\" function in EICAS maintenance do?",
    options: [
      "Automatically tests the system",
      "Automatically records system failures that have occurred in flight",
      "Automatically clears all fault messages"
    ],
    correctOptionIndex: 1
  },
  {
    id: 195,
    text: "What does the \"TEST IN PROGRESS\" message on the EICAS display during self-test indicate?",
    options: [
      "The test has failed",
      "The self-test routine is being performed",
      "The system is in normal operation"
    ],
    correctOptionIndex: 1
  },
  {
    id: 196,
    text: "What is the purpose of the \"TEST OK\" message on EICAS?",
    options: [
      "The system is being tested",
      "The self-test has completed satisfactorily",
      "The system has a fault"
    ],
    correctOptionIndex: 1
  },
  {
    id: 197,
    text: "What does the GPS term \"almanack\" refer to?",
    options: [
      "The satellite's exact position",
      "The approximate orbit and position of all satellites",
      "The satellite's clock correction"
    ],
    correctOptionIndex: 1
  },
  {
    id: 198,
    text: "What is the function of the \"ephemeris\" data transmitted by a GPS satellite?",
    options: [
      "To provide the satellite's clock error",
      "To provide the satellite's exact position and path",
      "To provide the satellite's battery status"
    ],
    correctOptionIndex: 1
  },
  {
    id: 199,
    text: "How does a GPS receiver synchronise its clock to the atomic clocks on the satellites?",
    options: [
      "By receiving a time signal from the ground station",
      "By computing fixes from groups of three satellites and adjusting its clock until they match",
      "By using an internal atomic clock"
    ],
    correctOptionIndex: 1
  },
  {
    id: 200,
    text: "What is the purpose of the GPS L5 frequency?",
    options: [
      "To provide military PPS",
      "To provide a third civilian frequency with CA code",
      "To transmit the almanack data"
    ],
    correctOptionIndex: 1
  }
];
