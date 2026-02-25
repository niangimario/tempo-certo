export const airConditioningQuestions = [
  {
    id: 1,
    text: "What is the primary reason for flying an aircraft at high altitude?",
    options: [
      "To increase passenger comfort due to smoother air.",
      "To burn less fuel for a given airspeed, making the aircraft more efficient.",
      "To reduce the need for cabin pressurisation."
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "At what approximate cabin pressure altitude is a pressurisation system designed to maintain passenger comfort at maximum cruising altitude?",
    options: ["5,000 ft", "8,000 ft", "10,000 ft"],
    correctOptionIndex: 1
  },
  {
    id: 3,
    text: "To ensure passenger comfort, the cabin climb rate is normally limited to:",
    options: ["300 ft/min", "500 ft/min", "750 ft/min"],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "To ensure passenger comfort, the cabin descent rate is normally limited to:",
    options: ["300 ft/min", "500 ft/min", "750 ft/min"],
    correctOptionIndex: 0
  },
  {
    id: 5,
    text: "Cabin pressure is controlled by regulating the amount of air that:",
    options: ["Enters the cabin from the engine compressor.", "Is allowed to leave the cabin through an outflow valve.", "Is recirculated within the cabin."],
    correctOptionIndex: 1
  },
  {
    id: 6,
    text: "The degree of pressurisation is primarily limited by the fuselage's design to withstand a maximum:",
    options: ["Cabin altitude.", "Cabin differential pressure.", "Rate of climb."],
    correctOptionIndex: 1
  },
  {
    id: 7,
    text: "Cabin differential pressure is a measure of:",
    options: ["The pressure inside the cabin only.", "The pressure outside the aircraft only.", "The internal stress on the fuselage skin."],
    correctOptionIndex: 2
  },
  {
    id: 8,
    text: "What does the term \"Cabin Altitude\" describe?",
    options: ["The actual height above sea level at which the aircraft is flying.", "Cabin pressure expressed in terms of equivalent altitude above sea level.", "The difference between inside and outside air pressure."],
    correctOptionIndex: 1
  },
  {
    id: 9,
    text: "\"Ambient pressure\" is defined as:",
    options: ["The pressure measured from a complete vacuum.", "The pressure in a container compared to atmospheric pressure.", "The pressure in the area immediately surrounding the object under discussion."],
    correctOptionIndex: 2
  },
  {
    id: 10,
    text: "Pressure measured along a scale which has zero value at a complete vacuum is called:",
    options: ["Gauge pressure (PSIG).", "Absolute pressure (PSIA).", "Differential pressure (PSID)."],
    correctOptionIndex: 1
  },
  {
    id: 11,
    text: "The difference in pressure between the pressure acting on one side of a wall and the pressure acting on the other side of the wall is known as:",
    options: ["Gauge pressure.", "Absolute pressure.", "Differential pressure."],
    correctOptionIndex: 2
  },
  {
    id: 12,
    text: "The purpose of the \"pre-pressurisation or take-off mode\" in a cabin pressure controller is to:",
    options: ["Rapidly depressurise the cabin after landing.", "Prevent pressure bumps caused by ram air acting on the outflow valve during rotation.", "Maintain cabin altitude if the aircraft does not climb after take-off."],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "If an aircraft aborts take-off and does not climb, which control mode prevents the cabin altitude from climbing?",
    options: ["Pre-pressurisation mode.", "Landing mode.", "Abort mode."],
    correctOptionIndex: 2
  },
  {
    id: 14,
    text: "The \"landing mode\" for a pressurisation controller is designed to:",
    options: ["Slightly increase cabin pressure before take-off.", "Equalise cabin pressure with the landing field elevation after landing.", "Control cabin pressure during the climb to cruise altitude."],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "The main component that modulates to allow cabin air to exhaust overboard is the:",
    options: ["Pressure controller.", "Outflow valve.", "Safety valve."],
    correctOptionIndex: 1
  },
  {
    id: 16,
    text: "In a typical pressurisation system, what type of motor in the outflow valve is used for automatic mode?",
    options: ["DC motor.", "AC motor.", "Stepper motor."],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "What provides the control signals to the outflow valve AC motors in an automatic system?",
    options: ["A manual switch on the control panel.", "The cabin pressure controller.", "The landing gear squat switch."],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "Pneumatic input signals to a pressure controller include cabin pressure and:",
    options: ["Engine N1 speed.", "Ambient pressure from the static system.", "Pack outlet temperature."],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "A \"ground relay input\" to the pressure controller is used to start pressurisation at lift-off and to:",
    options: ["Activate the emergency ram air.", "Fully open the outflow valves after landing.", "Close the pack valves."],
    correctOptionIndex: 1
  },
  {
    id: 20,
    text: "Which indicator on the pressurisation panel displays the speed at which the cabin altitude is changing?",
    options: ["Cabin altitude indicator.", "Cabin differential pressure indicator.", "Cabin vertical speed indicator."],
    correctOptionIndex: 2
  },
  {
    id: 21,
    text: "A cabin altitude warning switch is designed to initiate a warning in the cockpit if the cabin altitude exceeds:",
    options: ["8,000 ft.", "10,000 ft.", "14,000 ft."],
    correctOptionIndex: 1
  },
  {
    id: 22,
    text: "In an electronic rate limiting circuit, an excessive cabin altitude climb rate that triggers a control signal is typically greater than:",
    options: ["500 ft/min.", "2,000 ft/min.", "3,100 ft/min."],
    correctOptionIndex: 2
  },
  {
    id: 23,
    text: "A pneumatically actuated outflow valve is normally held closed by:",
    options: ["Pneumatic control pressure.", "A spring.", "An electric motor."],
    correctOptionIndex: 1
  },
  {
    id: 24,
    text: "In a pneumatic system, the outflow valve is opened by:",
    options: ["Spring force.", "Vacuum (negative control pressure).", "Positive pneumatic pressure."],
    correctOptionIndex: 1
  },
  {
    id: 25,
    text: "In a pneumatic pressurisation control system, what controls the modulation of the outflow valve?",
    options: ["Electrical signals from a controller.", "Pneumatic pressure.", "Direct mechanical cables."],
    correctOptionIndex: 1
  },
  {
    id: 26,
    text: "In the pneumatic system described, the outflow valve is opened by vacuum and closed by:",
    options: ["Vacuum.", "Spring force.", "Hydraulic pressure."],
    correctOptionIndex: 1
  },
  {
    id: 27,
    text: "The negative control pressure supplied to the pneumatic outflow valve is normally taken from the aircraft's:",
    options: ["Hydraulic system.", "Vacuum system.", "Pneumatic bleed system."],
    correctOptionIndex: 1
  },
  {
    id: 28,
    text: "On a pneumatic pressurisation control panel, the \"RATE\" knob is used to:",
    options: ["Select the desired cruise cabin altitude.", "Set the rate at which the cabin altitude will change.", "Select the landing field barometric pressure."],
    correctOptionIndex: 1
  },
  {
    id: 29,
    text: "The three mechanisms inside a pneumatic pressurisation controller are the isobaric control, the differential control, and the:",
    options: ["Temperature control mechanism.", "Cabin rate-of-change mechanism.", "Flow control mechanism."],
    correctOptionIndex: 1
  },
  {
    id: 30,
    text: "The isobaric control mechanism in a pneumatic controller maintains a constant:",
    options: ["Cabin differential pressure.", "Cabin pressure.", "Rate of climb."],
    correctOptionIndex: 1
  },
  {
    id: 31,
    text: "The differential control mechanism in a pneumatic controller overrides other controls to maintain maximum:",
    options: ["Cabin altitude.", "Cabin rate of change.", "Cabin differential pressure."],
    correctOptionIndex: 2
  },
  {
    id: 32,
    text: "In an electronic analogue system, how many operating modes may be selected on the pressure control panel?",
    options: ["Two", "Three", "Four"],
    correctOptionIndex: 2
  },
  {
    id: 33,
    text: "In a digital pressurisation control system, the normal operating mode is:",
    options: ["Manual.", "Alternate.", "Automatic."],
    correctOptionIndex: 2
  },
  {
    id: 34,
    text: "In a digital system with two automatic channels (AUTO and ALTN), if one channel fails, the system will:",
    options: ["Switch to manual mode.", "Automatically switch to the other.", "Continue operating with a partial failure warning."],
    correctOptionIndex: 1
  },
  {
    id: 35,
    text: "In many large aircraft with two identical pressure controllers, when does the change of control from one system controller to another occur automatically?",
    options: ["During the climb phase.", "In flight if a minor fault is detected.", "After each flight, on landing."],
    correctOptionIndex: 2
  },
  {
    id: 36,
    text: "On a typical pressure control panel, which knob is used for setting the destination landing field altitude in AUTO mode?",
    options: ["CAB ALT", "FLT ALT", "LAND ALT"],
    correctOptionIndex: 2
  },
  {
    id: 37,
    text: "In standby mode, the \"CAB RATE\" knob allows the crew to select a cabin rate of change ranging from:",
    options: ["0 to 500 ft/min.", "50 to 2,000 ft/min.", "300 to 3,100 ft/min."],
    correctOptionIndex: 1
  },
  {
    id: 38,
    text: "The index mark for the \"CAB RATE\" knob on the panel typically marks the setting for approximately:",
    options: ["500 ft/min.", "300 ft/min.", "2,000 ft/min."],
    correctOptionIndex: 1
  },
  {
    id: 39,
    text: "In manual mode, the outflow valve is controlled by a:",
    options: ["Rotary knob.", "Three-position self-centring toggle switch.", "Push-button with open and close contacts."],
    correctOptionIndex: 1
  },
  {
    id: 40,
    text: "During manual mode operation, the outflow valves move at approximately what speed compared to auto mode?",
    options: ["The same speed.", "Twice the speed.", "1/2 of the speed."],
    correctOptionIndex: 2
  },
  {
    id: 41,
    text: "Before take-off, the outflow valve is fully open to ensure that:",
    options: ["The cabin is pre-pressurised.", "The cabin is not pressurised.", "The pressure controllers can be tested."],
    correctOptionIndex: 1
  },
  {
    id: 42,
    text: "The purpose of the take-off mode is to pressurise the cabin slightly to prevent a:",
    options: ["Rapid decompression.", "Pressure surge or 'bump' as the aircraft rotates.", "High cabin altitude warning."],
    correctOptionIndex: 1
  },
  {
    id: 43,
    text: "Abort mode is activated if the aircraft descends instead of climbing while below 8,000 ft. In this mode, cabin pressure is controlled back to:",
    options: ["The cruise altitude setting.", "The value before take-off.", "A pressure of 0.1 psi."],
    correctOptionIndex: 1
  },
  {
    id: 44,
    text: "Which mode is initiated at lift-off?",
    options: ["Take-off mode.", "Climb mode.", "Cruise mode."],
    correctOptionIndex: 1
  },
  {
    id: 45,
    text: "While in cruise mode, the system typically operates a fixed cabin rate of:",
    options: ["300 ft/min for both climb and descent.", "500 ft/min for climb and 300 ft/min for descent.", "750 ft/min for descent only."],
    correctOptionIndex: 0
  },
  {
    id: 46,
    text: "On touchdown, the cabin will climb at 500 ft/min and after a set time, the outflow valves will:",
    options: ["Partially close to maintain pressure.", "Move to the full open position.", "Cycle to test their function."],
    correctOptionIndex: 1
  },
  {
    id: 47,
    text: "In a Boeing 737 DCPCS, which bus provides power for manual mode control?",
    options: ["28 V AC bus.", "115 V AC bus.", "28 V DC battery bus."],
    correctOptionIndex: 2
  },
  {
    id: 48,
    text: "Both pressure controllers receive ambient static pressure and calibrated airspeed from the:",
    options: ["Stall management computers.", "Digital air data computers.", "Wheel speed sensors."],
    correctOptionIndex: 1
  },
  {
    id: 49,
    text: "During a ground pressure test, if the differential pressure between the working environment and ambient exceeds 10 psi, what is required?",
    options: ["All personnel must evacuate the aircraft.", "Medical supervision must be sought.", "The test must be immediately aborted."],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "What is a critical precaution regarding static and pitot pressure pipelines within a pressurised area during a pressure test?",
    options: ["They must be disconnected from all instruments.", "They must be complete and connected to their relevant instruments.", "They must be pressurized separately."],
    correctOptionIndex: 1
  },
  {
    id: 51,
    text: "Why should the maximum cabin differential rate of change not be exceeded during testing?",
    options: ["It could cause the safety valves to open.", "It could cause discomfort to the test personnel inside.", "It could damage the fuselage structure."],
    correctOptionIndex: 2
  },
  {
    id: 52,
    text: "What must be ensured before attempting to open any doors, windows, or hatches after a pressure test?",
    options: ["The electrical power is switched off.", "The cabin pressure has been reduced to prevailing ambient conditions.", "The test equipment has been disconnected."],
    correctOptionIndex: 1
  },
  {
    id: 53,
    text: "During a leak rate test, if the leak rate increases unduly, denoted by a sudden fall in differential pressure, what action must be taken?",
    options: ["Increase the air supply to compensate.", "Continue the test as this is normal.", "Release the pressure and examine the fuselage for the cause."],
    correctOptionIndex: 2
  },
  {
    id: 54,
    text: "What is the recommended method for cleaning dust and nicotine tar from discharge valve faces and seats?",
    options: ["Using a high-pressure air blast.", "Using a dry, soft, lint-free cloth with recommended cleaning fluids.", "Using a wire brush to ensure all deposits are removed."],
    correctOptionIndex: 1
  },
  {
    id: 55,
    text: "Why should high-pressure air blasts not be used to dry the seating surfaces of diaphragm-controlled discharge valves?",
    options: ["It could cause the valve to stick in the open position.", "It may cause damage to the diaphragms.", "It would not effectively dry the surfaces."],
    correctOptionIndex: 1
  },
  {
    id: 56,
    text: "When removing a discharge valve that has shims for aerodynamic alignment, what should be done with the shims?",
    options: ["Discard them as new ones will be supplied with the replacement valve.", "Retain them to maintain alignment when replacing the valve.", "Measure them and record the values in the maintenance log."],
    correctOptionIndex: 1
  },
  {
    id: 57,
    text: "According to CS 25.831, what is the minimum fresh air supply per crew member?",
    options: ["0.18 kg/min", "0.28 m³/min", "10 psi"],
    correctOptionIndex: 1
  },
  {
    id: 58,
    text: "In the event of a single system failure, the minimum ventilation to the cabin must not be less than:",
    options: ["0.28 m³/min", "0.18 kg/min", "0.25 ppm"],
    correctOptionIndex: 1
  },
  {
    id: 59,
    text: "Which of the following is NOT a typical source of \"charge air\" for air conditioning systems?",
    options: ["Ram air.", "Hydraulic motor-driven pumps.", "Compressors or blowers."],
    correctOptionIndex: 1
  },
  {
    id: 60,
    text: "Why should air conditioning packs and external air conditioning sources not supply an aeroplane simultaneously?",
    options: ["To prevent excessive cabin airflow and possible duct damage.", "Because it would confuse the automatic temperature controllers.", "To save fuel by using only one source."],
    correctOptionIndex: 0
  },
  {
    id: 61,
    text: "In some smaller aircraft, what component is used to control the air mass delivery from an engine-driven blower by spilling unwanted air overboard?",
    options: ["A pressure regulator and shutoff valve (PRSOV).", "A spill valve.", "A non-return valve."],
    correctOptionIndex: 1
  },
  {
    id: 62,
    text: "In a typical twin-engine bleed air system, what separates the left and right side pneumatic systems?",
    options: ["A pressure regulator and shutoff valve.", "An electrically actuated isolation valve.", "A non-return valve."],
    correctOptionIndex: 1
  },
  {
    id: 63,
    text: "The APU bleed air duct is typically connected to the crossover duct on which side of the isolation valve?",
    options: ["Right side.", "Left side.", "It connects directly to both sides."],
    correctOptionIndex: 1
  },
  {
    id: 64,
    text: "The pressure regulator and shutoff valve (PRSOV) in an engine bleed system regulates the pressure and also:",
    options: ["The temperature of the bleed air.", "The flow of bleed air.", "The engine's 5th stage bleed port."],
    correctOptionIndex: 1
  },
  {
    id: 65,
    text: "What is the maximum pressure and temperature that should be supplied to a pneumatic ground service connection?",
    options: ["60 psi and 250°F", "60 psi and 450°F", "100 psi and 450°F"],
    correctOptionIndex: 1
  },
  {
    id: 66,
    text: "The primary function of a flow control valve in an air conditioning system is to regulate:",
    options: ["The temperature of the air.", "The total cabin air inflow.", "The cabin pressure."],
    correctOptionIndex: 1
  },
  {
    id: 67,
    text: "What happens to a typical flow control valve in case of electrical power loss?",
    options: ["It remains in its last commanded position.", "It closes to prevent uncontrolled airflow.", "It opens under pneumatic pressure."],
    correctOptionIndex: 2
  },
  {
    id: 68,
    text: "Airflow measuring devices are mass flow-meters. To regulate a specific volumetric airflow, they need a reference signal for:",
    options: ["Air temperature.", "Cabin pressure (air density).", "Humidity."],
    correctOptionIndex: 1
  },
  {
    id: 69,
    text: "For fuel saving and passenger comfort, some modern flow control valves regulate flow according to a computed demand that may depend on the number of packs in use and also on:",
    options: ["The phase of flight (take-off, landing).", "The outside air temperature.", "The aircraft's gross weight."],
    correctOptionIndex: 0
  },
  {
    id: 70,
    text: "In a pack valve for transport aircraft, which component is used to sense the airflow to help regulate the mass flow?",
    options: ["A thermal expansion valve.", "An upstream venturi.", "A pressure relief valve."],
    correctOptionIndex: 1
  },
  {
    id: 71,
    text: "In a Boeing 737 flow control system, what results from energising solenoid B (pack \"AUTO\" switch)?",
    options: ["The APU/high flow servo is activated.", "The APU/high flow servo is inactivated and the auto flow servo is activated.", "The pack valve closes."],
    correctOptionIndex: 1
  },
  {
    id: 72,
    text: "The APU flow schedule (high flow) is typically only available when the air supply is from the APU and the aeroplane is:",
    options: ["In flight.", "On the ground.", "During engine start."],
    correctOptionIndex: 1
  },
  {
    id: 73,
    text: "Without heating and pressurisation, high-altitude flight would be impossible because the air temperature can be below -45°C and:",
    options: ["The humidity is too low.", "The atmospheric pressure is too low for the body to get enough oxygen.", "The air is too thin to provide lift for the aircraft."],
    correctOptionIndex: 1
  },
  {
    id: 74,
    text: "The comfort range for cabin temperature is generally maintained between:",
    options: ["10°C and 20°C.", "21°C and 27°C.", "30°C and 36°C."],
    correctOptionIndex: 1
  },
  {
    id: 75,
    text: "The \"latent heat of vaporisation\" is the heat energy required to:",
    options: ["Change the temperature of a substance without changing its state.", "Change a liquid into a vapour without changing its temperature.", "Transfer heat through electromagnetic waves."],
    correctOptionIndex: 1
  },
  {
    id: 76,
    text: "Heat added to a material that causes its temperature to change but does not change its physical state is called:",
    options: ["Latent heat.", "Specific heat.", "Sensible heat."],
    correctOptionIndex: 2
  },
  {
    id: 77,
    text: "Which method of heat transfer involves direct contact between a hot object and a cooler one?",
    options: ["Convection.", "Radiation.", "Conduction."],
    correctOptionIndex: 2
  },
  {
    id: 78,
    text: "Which method of heat transfer involves vertical currents in a liquid or gas?",
    options: ["Convection.", "Radiation.", "Conduction."],
    correctOptionIndex: 0
  },
  {
    id: 79,
    text: "The two main principles of cooling pack operation are vapour cycle cooling and:",
    options: ["Ram air cooling.", "Air cycle cooling.", "Evaporative cooling."],
    correctOptionIndex: 1
  },
  {
    id: 80,
    text: "Vapour cycle cooling systems are typically used on smaller aircraft or on larger aircraft to cool:",
    options: ["The main passenger cabin.", "The flight deck only.", "Avionics and equipment compartments."],
    correctOptionIndex: 2
  },
  {
    id: 81,
    text: "In a vapour cycle system, which component pulls low-pressure refrigerant vapour from the evaporator and compresses it?",
    options: ["The condenser.", "The compressor.", "The thermal expansion valve."],
    correctOptionIndex: 1
  },
  {
    id: 82,
    text: "The receiver-dryer in a vapour cycle system contains a desiccant to absorb:",
    options: ["Excess refrigerant.", "Any moisture in the system.", "Contaminants like metal filings."],
    correctOptionIndex: 1
  },
  {
    id: 83,
    text: "The thermal expansion valve meters liquid refrigerant into the evaporator based on the:",
    options: ["Pressure in the condenser.", "Speed of the compressor.", "Temperature and pressure of the refrigerant leaving the evaporator."],
    correctOptionIndex: 2
  },
  {
    id: 84,
    text: "In the condenser, hot, high-pressure refrigerant gas is changed back into a liquid by:",
    options: ["Absorbing heat from the cabin air.", "Giving up heat to the cooler ram air.", "Expanding rapidly through a nozzle."],
    correctOptionIndex: 1
  },
  {
    id: 85,
    text: "Which refrigerant is now used almost exclusively in aircraft applications due to its low environmental impact?",
    options: ["R12", "R22", "R134a"],
    correctOptionIndex: 2
  },
  {
    id: 86,
    text: "Air cycle systems are also known as:",
    options: ["Freon systems.", "Bootstrap systems.", "Evaporative systems."],
    correctOptionIndex: 1
  },
  {
    id: 87,
    text: "The central component of an air conditioning pack is the:",
    options: ["Water separator.", "Ozone converter.", "Air cycle machine (ACM)."],
    correctOptionIndex: 2
  },
  {
    id: 88,
    text: "An air cycle machine (ACM) typically consists of a turbine on a common shaft with:",
    options: ["A fan only.", "A compressor and a cooling fan.", "A water separator."],
    correctOptionIndex: 1
  },
  {
    id: 89,
    text: "The purpose of the turbine in an ACM is to:",
    options: ["Compress the air to increase its temperature.", "Drive the compressor and fan by expanding air, which causes a large temperature decrease.", "Separate water from the air."],
    correctOptionIndex: 1
  },
  {
    id: 90,
    text: "The turbine bypass valve (TBV) is used to control:",
    options: ["The flow of ram air.", "The pack outlet temperature.", "The water separator efficiency."],
    correctOptionIndex: 1
  },
  {
    id: 91,
    text: "The primary function of the low-pressure water separator (coalescer) is to:",
    options: ["Further cool the air.", "Remove excess moisture from the air.", "Add humidity to the air."],
    correctOptionIndex: 1
  },
  {
    id: 92,
    text: "The coalescer bag condition indicator shows a \"dirty bag\" when a disk is positioned within which coloured portion of the cap?",
    options: ["Green.", "Amber.", "Red."],
    correctOptionIndex: 2
  },
  {
    id: 93,
    text: "The purpose of an ozone converter is to improve air quality by:",
    options: ["Adding oxygen to the cabin air.", "Converting ozone to oxygen in a catalytic process.", "Filtering out dust and pollen."],
    correctOptionIndex: 1
  },
  {
    id: 94,
    text: "In an air cycle system on the ground, ram air is pulled across the heat exchangers by:",
    options: ["The aircraft's forward motion.", "The impeller fan powered by the ACM turbine.", "Electric blowers only."],
    correctOptionIndex: 1
  },
  {
    id: 95,
    text: "What is the purpose of the reheater in an advanced air cycle system?",
    options: ["To warm the air going to the turbine to increase turbine efficiency.", "To reheat the air before it enters the cabin.", "To prevent ice from forming in the water separator."],
    correctOptionIndex: 0
  },
  {
    id: 96,
    text: "The air distribution system supplies conditioned air to the cockpit and:",
    options: ["The cargo compartments only.", "The cabin zones.", "The engine nacelles."],
    correctOptionIndex: 1
  },
  {
    id: 97,
    text: "Cabin air supply ducts for air temperatures over 200°C are usually made from:",
    options: ["Soft aluminium.", "Stainless steel.", "Plastic."],
    correctOptionIndex: 1
  },
  {
    id: 98,
    text: "The purpose of expansion bellows in a duct system is to:",
    options: ["Increase the airflow velocity.", "Allow ducts to expand and contract without losing pressure integrity.", "Muffle noise from the air conditioning packs."],
    correctOptionIndex: 1
  },
  {
    id: 99,
    text: "The adjustable flow valves in passenger service units (PSUs) are sometimes known as:",
    options: ["Gasper jets.", "Trim air valves.", "Mixing valves."],
    correctOptionIndex: 0
  },
  {
    id: 100,
    text: "Each person on board an aircraft generates approximately how much heat when at rest?",
    options: ["10 to 20 watts.", "80 to 100 watts.", "200 to 300 watts."],
    correctOptionIndex: 1
  },
  {
    id: 101,
    text: "Zone temperature control is typically accomplished by using:",
    options: ["Pack temperature control valves only.", "Zone temperature control valves (trim air valves).", "Individual gasper jets."],
    correctOptionIndex: 1
  },
  {
    id: 102,
    text: "The hot air used for temperature control is normally picked up downstream of the flow control valve and regulated to a constant pressure above cabin pressure (e.g., 4 psi) by a:",
    options: ["Turbine bypass valve.", "Trim air pressure regulator.", "Fan bypass check valve."],
    correctOptionIndex: 1
  },
  {
    id: 103,
    text: "The computed duct temperature demand in a zone controller is normally limited to a maximum value to prevent:",
    options: ["Over-pressurisation of the ducts.", "Damage to the ACM turbine.", "Damage to the supply ducts and bad smells."],
    correctOptionIndex: 2
  },
  {
    id: 104,
    text: "The pack temperature demand signal is determined by which zone's signal?",
    options: ["The zone with the highest duct temperature demand.", "The cockpit's temperature demand.", "The zone with the lowest duct temperature demand."],
    correctOptionIndex: 2
  },
  {
    id: 105,
    text: "To increase the pack outlet temperature, the turbine bypass valve (TBV) will:",
    options: ["Drive to a more closed position.", "Drive to a more open position.", "Remain in its current position."],
    correctOptionIndex: 1
  },
  {
    id: 106,
    text: "The equipment cooling/avionics ventilation system is designed to cool:",
    options: ["The passengers and crew.", "The electrical and electronic equipment in the cockpit and E/E bay.", "The air conditioning packs themselves."],
    correctOptionIndex: 1
  },
  {
    id: 107,
    text: "The equipment cooling system is normally controlled by:",
    options: ["The flight crew via a manual switch.", "A dedicated controller/computer.", "The main cabin pressure controller."],
    correctOptionIndex: 1
  },
  {
    id: 108,
    text: "The \"inboard mode\" of an equipment cooling system during flight typically exhausts the hot air to the:",
    options: ["Overboard via an outlet valve.", "Underfloor area or forward cargo compartment.", "Ram air duct."],
    correctOptionIndex: 1
  },
  {
    id: 109,
    text: "If smoke is detected in the equipment cooling air, the system should be set to override mode, which sends the air:",
    options: ["Into the cabin for recirculation.", "Out of the aircraft overboard.", "To the forward cargo hold."],
    correctOptionIndex: 1
  },
  {
    id: 110,
    text: "Supplemental ventilation systems in galleys and lavatories are designed to aid in the removal of:",
    options: ["Excess heat and cold air.", "Humid air and bad odours.", "Recirculated cabin air."],
    correctOptionIndex: 1
  },
  {
    id: 111,
    text: "When working on air supply systems, what must be ensured before removing ducts or components?",
    options: ["The electrical power is off.", "The system is depressurised.", "The outflow valves are open."],
    correctOptionIndex: 1
  },
  {
    id: 112,
    text: "Why should air conditioning packs and external air conditioning sources not supply an aircraft simultaneously?",
    options: ["It could lead to freezing of the cooling turbine.", "It could cause excessive cabin airflow and possible duct damage.", "It would make the temperature control system unstable."],
    correctOptionIndex: 1
  },
  {
    id: 113,
    text: "What is the main danger of opening a passenger or cargo door while the aircraft is pressurised?",
    options: ["The door may be difficult to open.", "Sudden decompression could cause injury and structural damage.", "The pressurisation system would automatically shut down."],
    correctOptionIndex: 1
  },
  {
    id: 114,
    text: "At what cabin altitude does an aural warning typically activate?",
    options: ["8,000 ft.", "10,000 ft.", "14,000 ft."],
    correctOptionIndex: 1
  },
  {
    id: 115,
    text: "If cabin altitude climbs above approximately 14,000 ft, what safety system is activated?",
    options: ["The emergency ram air inlet opens.", "The passenger oxygen masks drop.", "The outflow valves fully open."],
    correctOptionIndex: 1
  },
  {
    id: 116,
    text: "The purpose of a negative cabin differential pressure relief valve is to:",
    options: ["Prevent the cabin pressure from becoming too high.", "Equalise pressure if cabin pressure becomes lower than ambient pressure.", "Provide an emergency ram air source."],
    correctOptionIndex: 1
  },
  {
    id: 117,
    text: "Positive cabin differential pressure relief valves are designed to protect the structure from excessive pressure, typically opening at around:",
    options: ["7.95 psi.", "8.5 psi.", "14.5 psi."],
    correctOptionIndex: 1
  },
  {
    id: 118,
    text: "Blowout panels in cargo compartments are designed to:",
    options: ["Provide ventilation for the cargo.", "Blow out to protect the structure at a differential pressure of about 1 psi.", "Allow access for maintenance."],
    correctOptionIndex: 1
  },
  {
    id: 119,
    text: "The purpose of the guarded ditching push-button switch is to:",
    options: ["Activate the life rafts.", "Close all valves and inlets to prevent water entry in a ditching.", "Increase the cabin pressurisation for a water landing."],
    correctOptionIndex: 1
  },
  {
    id: 120,
    text: "The emergency ram air system can be used in flight if all packs fail or for smoke removal. It should only be activated when the differential pressure is below 1 psi to prevent:",
    options: ["Overheating of the packs.", "A rapid decompression.", "Damage to the ram air door."],
    correctOptionIndex: 1
  },
  {
    id: 121,
    text: "On a Boeing 737, what does the \"OFF SCHED DESCENT\" light indicate?",
    options: ["The aircraft is descending at an excessive rate.", "The aircraft descended before reaching within 0.25 psi of the selected flight altitude.", "The manual mode is selected."],
    correctOptionIndex: 1
  },
  {
    id: 122,
    text: "The module number for Air Conditioning and Cabin Pressurisation is:",
    options: ["ATA 22", "ATA 21", "ATA 36"],
    correctOptionIndex: 1
  },
  {
    id: 123,
    text: "The certification statement references EASA Regulation (EU) No.:",
    options: ["2018/1139", "1321/2014", "748/2012"],
    correctOptionIndex: 0
  },
  {
    id: 124,
    text: "In the context of pressurisation, what does \"delta P\" represent?",
    options: ["Cabin climb rate.", "Cabin differential pressure.", "Ambient pressure."],
    correctOptionIndex: 1
  },
  {
    id: 125,
    text: "In a pressurisation system, the AC motor in the outflow valve is used for:",
    options: ["Manual mode.", "Automatic mode.", "Emergency mode."],
    correctOptionIndex: 1
  },
  {
    id: 126,
    text: "The ground relay input to the pressure controller is used to start pressurisation at lift-off and for depressurisation after landing, which involves:",
    options: ["Closing the outflow valve fully.", "Fully opening the outflow valve.", "Activating the safety valve."],
    correctOptionIndex: 1
  },
  {
    id: 127,
    text: "The \"RATE LIMIT\" warning light on the pressurisation panel comes on if an excessive rate is detected, such as a climb rate faster than:",
    options: ["500 ft/min.", "2,000 ft/min.", "3,100 ft/min."],
    correctOptionIndex: 2
  },
  {
    id: 128,
    text: "In a pneumatic pressurisation system, the outflow valve is equipped with a filter that must be:",
    options: ["Cleaned every flight.", "Replaced periodically.", "Checked for continuity."],
    correctOptionIndex: 1
  },
  {
    id: 129,
    text: "On a pneumatic pressurisation controller, the number shown in the small window at the top indicates:",
    options: ["The selected cabin altitude.", "The aircraft altitude where max differential pressure is reached.", "The landing field elevation."],
    correctOptionIndex: 1
  },
  {
    id: 130,
    text: "When the \"RATE\" knob on a pneumatic controller is at the \"MAX\" position, the cabin altitude will change at a maximum rate of:",
    options: ["500 ft/min.", "2,000 ft/min.", "3,100 ft/min."],
    correctOptionIndex: 1
  },
  {
    id: 131,
    text: "In a digital pressurisation system, if both automatic channels fail, the crew can select:",
    options: ["Standby mode.", "Check mode.", "Manual mode."],
    correctOptionIndex: 2
  },
  {
    id: 132,
    text: "On a typical pressure control panel, the manual mode uses a toggle switch to control the outflow valve. Releasing the switch:",
    options: ["Drives the valve to the full open position.", "Stops the outflow valve movement.", "Returns the valve to a preset position."],
    correctOptionIndex: 1
  },
  {
    id: 133,
    text: "In the Airbus 300 flight profile, during climb mode, the cabin vertical speed is a function of:",
    options: ["The selected rate on the control panel.", "Aircraft vertical speed.", "The landing field elevation."],
    correctOptionIndex: 1
  },
  {
    id: 134,
    text: "In the Boeing 737 DCPCS, which computer provides left and right engine N1 and N2 speed percentages?",
    options: ["Digital air data computers.", "Stall management computers.", "Wheel speed sensors."],
    correctOptionIndex: 1
  },
  {
    id: 135,
    text: "During a pressure test, why must certain specified fuselage and compartment drains not be obstructed?",
    options: ["They are needed for the test equipment.", "An allowance is made for their leak rates in permissible leak rate tests.", "They provide ventilation for test personnel."],
    correctOptionIndex: 1
  },
  {
    id: 136,
    text: "After cleaning discharge valve faces and seats, what should be used to dry the surfaces?",
    options: ["A high-pressure air blast.", "A dry, soft, lint-free cloth.", "A heat gun."],
    correctOptionIndex: 1
  },
  {
    id: 137,
    text: "According to regulations, the aeroplane cabin ozone concentration must not exceed 0.25 parts per million by volume above:",
    options: ["FL 270.", "FL 320.", "FL 390."],
    correctOptionIndex: 1
  },
  {
    id: 138,
    text: "Conditioned-air ground connectors typically use a standard bayonet-type connector with a diameter of:",
    options: ["100 mm (4\")", "200 mm (8\")", "300 mm (12\")"],
    correctOptionIndex: 1
  },
  {
    id: 139,
    text: "In a pneumatic system, the purpose of a non-return valve in the ground service connection is to prevent:",
    options: ["Excessive pressure from the ground cart.", "Excessive pneumatic system leakage or reverse flow into the ground air source.", "Contamination from entering the system."],
    correctOptionIndex: 1
  },
  {
    id: 140,
    text: "In a flow control valve that regulates variable airflow, a torque motor or stepper motor is used to:",
    options: ["Open and close the valve rapidly.", "Adjust the open pressure for the valve.", "Measure the mass airflow."],
    correctOptionIndex: 1
  },
  {
    id: 141,
    text: "In a pack valve, what happens when cabin pressure decreases?",
    options: ["The servo valve bellows contracts, reducing airflow.", "The servo valve bellows expands, restoring the desired airflow rate.", "The butterfly valve closes completely."],
    correctOptionIndex: 1
  },
  {
    id: 142,
    text: "What is the boiling point of refrigerant R134a at standard conditions?",
    options: ["-29.8°C", "-26.6°C", "-40.8°C"],
    correctOptionIndex: 1
  },
  {
    id: 143,
    text: "In a vapour cycle system, the evaporator is located:",
    options: ["In the tail cone, exposed to ram air.", "In the cabin air stream, to absorb heat.", "Between the condenser and the expansion valve."],
    correctOptionIndex: 1
  },
  {
    id: 144,
    text: "The subcooler in a vapour cycle system is located after the receiver/dryer to:",
    options: ["Add heat to the refrigerant.", "Prevent premature vaporisation (flash-off) of the refrigerant.", "Increase the pressure of the refrigerant."],
    correctOptionIndex: 1
  },
  {
    id: 145,
    text: "A sight glass in the receiver/drier is used to check for:",
    options: ["Oil level.", "Sufficient refrigerant charge.", "Moisture content."],
    correctOptionIndex: 1
  },
  {
    id: 146,
    text: "If liquid refrigerant comes in contact with the skin, it should be treated for:",
    options: ["Burns.", "Frostbite.", "Chemical irritation."],
    correctOptionIndex: 1
  },
  {
    id: 147,
    text: "Refrigerant storage cylinders should never be filled to more than what percentage of their capacity?",
    options: ["70%", "85%", "95%"],
    correctOptionIndex: 1
  },
  {
    id: 148,
    text: "In an air cycle machine, the compressor increases the pressure and temperature of the air to:",
    options: ["Drive the turbine.", "Improve the efficiency of the heat exchanger.", "Condense the moisture in the air."],
    correctOptionIndex: 1
  },
  {
    id: 149,
    text: "The anti-ice valve (AIV) in an air conditioning pack is used to:",
    options: ["Prevent ice from forming in the pack.", "Remove or prevent ice accumulation at the turbine outlet and water separator.", "Add warm air to the pack outlet."],
    correctOptionIndex: 1
  },
  {
    id: 150,
    text: "A ram air modulation system automatically regulates airflow through the ram air system during flight to:",
    options: ["Increase cooling.", "Minimise drag.", "Prevent ice ingestion."],
    correctOptionIndex: 1
  },
  {
    id: 151,
    text: "In an advanced air cycle system, water collected from the water extractors is fed to spray nozzles in the ram air duct to:",
    options: ["Humidify the ram air.", "Improve the cooling efficiency of the heat exchangers.", "Clean the heat exchangers."],
    correctOptionIndex: 1
  },
  {
    id: 152,
    text: "A high-pressure water separator has the advantage over a low-pressure water separator of:",
    options: ["Lower cost.", "Requiring no routine maintenance like changing a coalescer bag.", "Higher water removal efficiency."],
    correctOptionIndex: 1
  },
  {
    id: 153,
    text: "Distribution ducts for air temperatures below 100°C are usually constructed from:",
    options: ["Stainless steel.", "Soft aluminium.", "Titanium."],
    correctOptionIndex: 1
  },
  {
    id: 154,
    text: "In a duct system, a sliding support is used on one side of an expansion bellows to:",
    options: ["Prevent any duct movement.", "Permit movement of the bellows while the duct is under pressure.", "Provide a fixed anchor point."],
    correctOptionIndex: 1
  },
  {
    id: 155,
    text: "The trim air pressure regulator valve is automatically closed in case of:",
    options: ["Low pack outlet temperature.", "A zone supply duct overheat condition.", "High cabin altitude."],
    correctOptionIndex: 1
  },
  {
    id: 156,
    text: "For fail-safe operation, modern pack and zone temperature controllers have:",
    options: ["Manual override switches.", "Two independent control channels.", "Mechanical backup systems."],
    correctOptionIndex: 1
  },
  {
    id: 157,
    text: "The ground crew call horn alerts ground crew when:",
    options: ["The aircraft is pressurised.", "The cooling air for equipment gets too hot or a blower fails.", "The passenger oxygen masks have deployed."],
    correctOptionIndex: 1
  },
  {
    id: 158,
    text: "In the override/smoke clearance mode for equipment cooling, the two fans are turned off and air is forced through the equipment by:",
    options: ["Electric blowers.", "Cabin differential pressure.", "Dedicated smoke extraction fans."],
    correctOptionIndex: 1
  },
  {
    id: 159,
    text: "At what cabin altitude will the outflow valve electronic actuator (\"ELACT\") receive a signal to close the valve during automatic control?",
    options: ["10,000 ±500 ft.", "14,500 ±500 ft.", "8.5 ±0.15 psi."],
    correctOptionIndex: 1
  },
  {
    id: 160,
    text: "A negative differential pressure relief valve will open to limit negative differential pressure to no more than:",
    options: ["-0.1 psi.", "-1.0 psi.", "-8.0 psi."],
    correctOptionIndex: 1
  },
  {
    id: 161,
    text: "The \"ALTN\" light on a pressurisation panel illuminates when:",
    options: ["The system is in manual mode.", "The system has switched to the alternate automatic channel.", "The cabin altitude is high."],
    correctOptionIndex: 1
  },
  {
    id: 162,
    text: "The \"MANUAL\" light on a pressurisation panel illuminates when:",
    options: ["The mode selector is in the \"AUTO\" position.", "The mode selector is in a manual position.", "The system has failed."],
    correctOptionIndex: 1
  },
  {
    id: 163,
    text: "The landing field elevation selector is used during:",
    options: ["Normal automatic operation.", "Abnormal operation when automatic selection is not available.", "Pre-flight testing."],
    correctOptionIndex: 1
  },
  {
    id: 164,
    text: "The emergency ram air pushbutton should not be actuated before the differential pressure is below 1 psi to prevent:",
    options: ["Overheating of the cabin.", "A rapid decompression.", "Damage to the ram air door."],
    correctOptionIndex: 1
  },
  {
    id: 165,
    text: "A \"CHECK\" mode on a mode selector switch is used to:",
    options: ["Manually control the outflow valve.", "Test the system on the ground.", "Select the landing altitude."],
    correctOptionIndex: 1
  },
  {
    id: 166,
    text: "In manual AC or DC mode, the outflow valve is controlled using:",
    options: ["The auto rate selector.", "The manual open-close switch.", "The cabin altitude selector."],
    correctOptionIndex: 1
  },
  {
    id: 167,
    text: "The \"FLT-GRD\" toggle switch is used in conjunction with the mode selector to control minimum cabin pressurisation on the ground and to:",
    options: ["Select the flight altitude.", "Check the rate limit fault detector.", "Deploy the emergency ram air."],
    correctOptionIndex: 1
  },
  {
    id: 168,
    text: "In the abort mode description for the Airbus 300, what is an \"off-schedule descent\"?",
    options: ["A descent faster than 750 ft/min.", "An aircraft descent below 8000 ft instead of climbing.", "A descent to an airport other than the destination."],
    correctOptionIndex: 1
  },
  {
    id: 169,
    text: "During the cruise mode, the cabin pressure is regulated to reach the highest value between max delta P and:",
    options: ["Take-off field elevation.", "Landing elevation.", "Flight level 390."],
    correctOptionIndex: 1
  },
  {
    id: 170,
    text: "The pressurisation controller in a pneumatic system uses ambient air pressure supplied by:",
    options: ["Pitot ports.", "Static ports.", "The cabin pressure duct."],
    correctOptionIndex: 1
  },
  {
    id: 171,
    text: "The isobaric metering valve in a pneumatic controller regulates the negative pressure in the:",
    options: ["Outflow valve actuator.", "Reference chamber.", "Rate diaphragm chamber."],
    correctOptionIndex: 1
  },
  {
    id: 172,
    text: "The cabin rate-of-change mechanism prevents sudden changes by using a diaphragm and a:",
    options: ["Direct mechanical linkage.", "Calibrated leakage path.", "Solenoid-operated valve."],
    correctOptionIndex: 1
  },
  {
    id: 173,
    text: "In the differential control mechanism, when maximum differential is reached, the differential metering valve:",
    options: ["Closes to increase pressure.", "Opens to vent reference chamber pressure overboard.", "Sends a signal to the isobaric bellows."],
    correctOptionIndex: 1
  },
  {
    id: 174,
    text: "In a typical air conditioning system layout, the \"cold air unit\" is another name for the:",
    options: ["Heat exchanger.", "Air cycle machine.", "Water separator."],
    correctOptionIndex: 1
  },
  {
    id: 175,
    text: "The primary heat exchanger in an air cycle system removes heat from the bleed air using:",
    options: ["Fuel.", "Ram air.", "Recirculated cabin air."],
    correctOptionIndex: 1
  },
  {
    id: 176,
    text: "The reheater in an air cycle system is a:",
    options: ["Water separator.", "Cross-flow single-pass air-to-air heat exchanger.", "Electric heating element."],
    correctOptionIndex: 1
  },
  {
    id: 177,
    text: "The condenser in an advanced air cycle system uses cold air from the:",
    options: ["Primary heat exchanger.", "Outlet of the turbine section of the ACM.", "Cabin return air."],
    correctOptionIndex: 1
  },
  {
    id: 178,
    text: "The speed of an air cycle machine can reach:",
    options: ["5,000 - 10,000 rpm.", "20,000 - 50,000 rpm.", "100,000 - 150,000 rpm."],
    correctOptionIndex: 1
  },
  {
    id: 179,
    text: "ACM shafts may be supported by air bearings or:",
    options: ["Magnetic levitation.", "Oil-lubricated roller bearings.", "Graphite bushings."],
    correctOptionIndex: 1
  },
  {
    id: 180,
    text: "The fan bypass check valve opens if:",
    options: ["The ACM compressor fails.", "The ram airflow is higher than the cooling fan delivery.", "The water separator is clogged."],
    correctOptionIndex: 1
  },
  {
    id: 181,
    text: "The compressor bypass check valve allows air to bypass the compressor during:",
    options: ["High cooling demand.", "ACM start or low cooling demand.", "When the pack is in manual mode."],
    correctOptionIndex: 1
  },
  {
    id: 182,
    text: "An overheat condition sensed by a thermal switch at the compressor discharge or turbine inlet will cause the:",
    options: ["Ram air doors to open fully.", "Pack valve to close.", "Turbine bypass valve to open."],
    correctOptionIndex: 1
  },
  {
    id: 183,
    text: "The turbofan in a ram air system is used to induce airflow for heat exchangers during:",
    options: ["High-speed flight.", "Ground operation and when flaps are extended.", "Cruise."],
    correctOptionIndex: 1
  },
  {
    id: 184,
    text: "Ozone converters are typically installed:",
    options: ["After the water separator.", "Upstream of the cooling pack, just before the pack valve.", "In the cabin return air ducts."],
    correctOptionIndex: 1
  },
  {
    id: 185,
    text: "Flexible plastic ducts are used in areas where:",
    options: ["Temperatures exceed 200°C.", "Air temperature does not exceed a certain limit and flexibility is needed.", "High pressure is present."],
    correctOptionIndex: 1
  },
  {
    id: 186,
    text: "The individual air outlets in passenger service units are adjustable for:",
    options: ["Temperature only.", "Airflow and direction.", "Humidity."],
    correctOptionIndex: 1
  },
  {
    id: 187,
    text: "Dynamic temperature regulation is needed during passenger boarding because:",
    options: ["The packs need to be shut off.", "A significant heat load arrives in the cabin.", "The outside air temperature drops."],
    correctOptionIndex: 1
  },
  {
    id: 188,
    text: "The zone temperature controller compares the selected zone temperature with the actual zone temperature to create a:",
    options: ["Trim valve position signal.", "Zone temperature error signal.", "Pack flow demand signal."],
    correctOptionIndex: 1
  },
  {
    id: 189,
    text: "Some aircraft allow flight attendants to fine-tune zone temperatures by using a panel that allows adjustments of typically:",
    options: ["±0.5°F.", "±2.5 to ±4.5°F.", "±10°F."],
    correctOptionIndex: 1
  },
  {
    id: 190,
    text: "The pack valve closed limit switch on a Boeing 737 provides a signal to drive the mix valve full cold after:",
    options: ["The pack is selected to high flow.", "The pack valve closes.", "The APU bleed valve opens."],
    correctOptionIndex: 1
  },
  {
    id: 191,
    text: "In a Boeing 737 flow control, the high flow schedule from the APU is obtained by energising solenoid:",
    options: ["B.", "A.", "C."],
    correctOptionIndex: 0
  },
  {
    id: 192,
    text: "What is the function of the capillary tube and bulb on a thermal expansion valve?",
    options: ["To measure the pressure in the evaporator.", "To sense the temperature of the refrigerant leaving the evaporator.", "To equalise pressure across the diaphragm."],
    correctOptionIndex: 1
  },
  {
    id: 193,
    text: "What is the primary safety concern regarding refrigerant R134a in a vapour cycle system?",
    options: ["It is highly flammable.", "It can cause frostbite if it contacts skin.", "It is highly toxic."],
    correctOptionIndex: 1
  },
  {
    id: 194,
    text: "The purpose of evacuating a vapour cycle system with a vacuum pump before charging is to:",
    options: ["Pressurise the system.", "Vaporise and withdraw any moisture in the system.", "Check for leaks."],
    correctOptionIndex: 1
  },
  {
    id: 195,
    text: "In a pneumatic pressurisation controller, what happens to the isobaric bellows when the cabin alt knob is used?",
    options: ["It is directly connected to the outflow valve.", "The calibration screw tension is changed, applying bias to the bellows.", "It opens the differential metering valve."],
    correctOptionIndex: 1
  },
  {
    id: 196,
    text: "The cabin negative relief valve function is sometimes incorporated into which other component?",
    options: ["The pack valve.", "The pneumatically actuated outflow valve or cabin pressure relief valve.", "The flow control valve."],
    correctOptionIndex: 1
  },
  {
    id: 197,
    text: "In the Boeing 737 pressurisation system, which valve will close at a set point of 14,500 ft during automatic control, overriding controller commands?",
    options: ["The pack valve.", "The outflow valve (via its ELACT).", "The isolation valve."],
    correctOptionIndex: 1
  },
  {
    id: 198,
    text: "The primary function of the pressurisation controller's abort mode is to:",
    options: ["Rapidly depressurise the cabin in an emergency.", "Prevent the cabin altitude from climbing if the aircraft does not climb after take-off.", "Increase the cabin pressure during take-off roll."],
    correctOptionIndex: 1
  },
  {
    id: 199,
    text: "What type of valve is the PRSOV in an engine bleed air system?",
    options: ["A gate valve.", "A pneumatically actuated, spring-loaded closed, butterfly-type valve.", "An electrically actuated ball valve."],
    correctOptionIndex: 1
  },
  {
    id: 200,
    text: "During testing of safety valves, why must the air supply be controlled with extreme care?",
    options: ["To prevent the valves from opening.", "To ensure the pressure never exceeds the maximum permissible value.", "To maintain a constant cabin altitude."],
    correctOptionIndex: 1
  }
];
