import { Question } from "../../../shared/schema";

export const dcCircuitsAcTheoryQuestions: Question[] = [
  // Module 3.6 DC Circuits
  {
    id: 1,
    text: "What is the definition of a load in an electric circuit?",
    options: [
      "The device which furnishes electrical energy",
      "Any device through which an electrical current flows and which changes this electrical energy into a more useful form",
      "A device that interrupts the current delivered to the load"
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "What is the function of a switch in a basic electric circuit?",
    options: [
      "To furnish electrical energy",
      "To change electrical energy into light",
      "To interrupt the current delivered to the load"
    ],
    correctOptionIndex: 2
  },
  {
    id: 3,
    text: "Ohm's Law states that the current in a circuit is:",
    options: [
      "Directly proportional to resistance and inversely proportional to voltage",
      "Directly proportional to voltage and inversely proportional to resistance",
      "Inversely proportional to both voltage and resistance"
    ],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "The Ohm's Law formula for current (I) is:",
    options: [
      "I = V x R",
      "I = R / V",
      "I = V / R"
    ],
    correctOptionIndex: 2
  },
  {
    id: 5,
    text: "If the voltage in a circuit is doubled and the resistance remains the same, what happens to the current?",
    options: [
      "It is halved",
      "It doubles",
      "It remains the same"
    ],
    correctOptionIndex: 1
  },
  {
    id: 6,
    text: "If the resistance in a circuit is doubled and the voltage remains the same, what happens to the current?",
    options: [
      "It doubles",
      "It is halved",
      "It remains the same"
    ],
    correctOptionIndex: 1
  },
  {
    id: 7,
    text: "The formula for resistance (R) derived from Ohm's Law is:",
    options: [
      "R = V x I",
      "R = V / I",
      "R = I / V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "The formula for voltage (V) derived from Ohm's Law is:",
    options: [
      "V = I / R",
      "V = R / I",
      "V = I x R"
    ],
    correctOptionIndex: 2
  },
  {
    id: 9,
    text: "In a graph of voltage vs. current for a constant resistance, what shape is the curve?",
    options: [
      "A parabola",
      "A straight line",
      "A hyperbola"
    ],
    correctOptionIndex: 1
  },
  {
    id: 10,
    text: "What is the definition of a series circuit?",
    options: [
      "A circuit with more than one path for current flow",
      "A circuit that contains only one path for current flow",
      "A circuit where the voltage is the same across all components"
    ],
    correctOptionIndex: 1
  },
  {
    id: 11,
    text: "How is total resistance (RT) calculated in a series circuit?",
    options: [
      "RT = 1/R1 + 1/R2 + ... 1/Rn",
      "RT = R1 = R2 = R3",
      "RT = R1 + R2 + R3 + ... Rn"
    ],
    correctOptionIndex: 2
  },
  {
    id: 12,
    text: "What is the current at any point in a series circuit?",
    options: [
      "It is different in each component",
      "It is the same through each component",
      "It is the sum of the currents through each component"
    ],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "What is the relationship between the total voltage and individual voltage drops in a series circuit?",
    options: [
      "The total voltage is the difference between the voltage drops",
      "The total voltage is equal to the sum of the individual voltage drops",
      "The total voltage is equal to the product of the voltage drops"
    ],
    correctOptionIndex: 1
  },
  {
    id: 14,
    text: "In a series circuit, the voltage drop across a resistor is proportional to its:",
    options: [
      "Current",
      "Conductance",
      "Resistance"
    ],
    correctOptionIndex: 2
  },
  {
    id: 15,
    text: "Kirchhoff's Voltage Law states that:",
    options: [
      "The sum of currents entering a junction equals the sum of currents leaving",
      "The algebraic sum of the voltage drops and EMFs in any closed path is equal to zero",
      "The current in a circuit is directly proportional to the voltage and inversely proportional to the resistance"
    ],
    correctOptionIndex: 1
  },
  {
    id: 16,
    text: "According to the text, which end of a resistor is marked positive?",
    options: [
      "The end where current leaves",
      "The end where current enters",
      "The end connected to the negative terminal of the source"
    ],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "When two voltage sources are connected so that they both cause current to flow in the same direction, they are said to be:",
    options: [
      "Series opposing",
      "Parallel aiding",
      "Series aiding"
    ],
    correctOptionIndex: 2
  },
  {
    id: 18,
    text: "When two voltage sources are connected so that they would tend to force current in opposite directions, they are said to be:",
    options: [
      "Series aiding",
      "Series opposing",
      "Parallel opposing"
    ],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "Kirchhoff's Current Law states that:",
    options: [
      "The sum of the voltage drops around a closed loop is zero",
      "The algebraic sum of the currents entering and leaving a junction is equal to zero",
      "The total current in a parallel circuit is equal to the current through one branch"
    ],
    correctOptionIndex: 1
  },
  {
    id: 20,
    text: "In a parallel circuit, what is the voltage across each branch?",
    options: [
      "It is different in each branch",
      "It is equal to the total voltage divided by the number of branches",
      "It is equal to the source voltage"
    ],
    correctOptionIndex: 2
  },
  {
    id: 21,
    text: "How is total current (IT) calculated in a parallel circuit?",
    options: [
      "IT = I1 = I2 = I3",
      "IT = I1 + I2 + I3 + ... In",
      "IT = I1 x I2 x I3"
    ],
    correctOptionIndex: 1
  },
  {
    id: 22,
    text: "How does the total resistance of a parallel circuit compare to the smallest individual branch resistor?",
    options: [
      "It is larger than the smallest resistor",
      "It is smaller than the smallest resistor",
      "It is equal to the smallest resistor"
    ],
    correctOptionIndex: 1
  },
  {
    id: 23,
    text: "What is the formula for equivalent resistance (Req) when two unequal resistors are in parallel?",
    options: [
      "Req = R1 + R2",
      "Req = (R1 x R2) / (R1 + R2)",
      "Req = 1/R1 + 1/R2"
    ],
    correctOptionIndex: 1
  },
  {
    id: 24,
    text: "What is the formula for equivalent resistance (Req) when 'N' resistors of equal value (R) are in parallel?",
    options: [
      "Req = R x N",
      "Req = R / N",
      "Req = N / R"
    ],
    correctOptionIndex: 1
  },
  {
    id: 25,
    text: "What is the general formula for finding the equivalent resistance of any number of resistors in parallel?",
    options: [
      "1/Req = 1/R1 + 1/R2 + ... 1/Rn",
      "Req = R1 + R2 + ... Rn",
      "Req = (R1 x R2 x ... Rn) / (R1 + R2 + ... Rn)"
    ],
    correctOptionIndex: 0
  },
  {
    id: 26,
    text: "What is a combination circuit?",
    options: [
      "A circuit consisting of only series elements",
      "A circuit consisting of only parallel elements",
      "A circuit consisting of both series and parallel elements"
    ],
    correctOptionIndex: 2
  },
  {
    id: 27,
    text: "The basic technique for solving combination circuit problems is the use of:",
    options: [
      "Complex numbers",
      "Equivalent circuits",
      "Superposition"
    ],
    correctOptionIndex: 1
  },
  {
    id: 28,
    text: "What is the effect of an open circuit in the series portion of a series-parallel circuit?",
    options: [
      "Total resistance decreases, total current increases",
      "There will be no current because there is no complete path",
      "Only the branch with the open is affected, other branches function normally"
    ],
    correctOptionIndex: 1
  },
  {
    id: 29,
    text: "What is the effect of an open circuit in a parallel branch of a series-parallel circuit?",
    options: [
      "The total circuit resistance increases and total current decreases",
      "The total circuit resistance decreases and total current increases",
      "The total circuit current becomes zero"
    ],
    correctOptionIndex: 0
  },
  {
    id: 30,
    text: "What is the effect of a short circuit on a component?",
    options: [
      "Its resistance becomes infinite",
      "Its resistance drops to almost zero ohms, causing an abnormally high current",
      "The circuit becomes open"
    ],
    correctOptionIndex: 1
  },
  {
    id: 31,
    text: "What is the purpose of a fuse or circuit protection device in a circuit?",
    options: [
      "To increase the current carrying capacity",
      "To open if current increases to a predetermined value to prevent damage",
      "To store electrical energy"
    ],
    correctOptionIndex: 1
  },
  {
    id: 32,
    text: "What is an 'open circuit'?",
    options: [
      "A path of low resistance that causes high current",
      "A break in a complete conducting pathway",
      "A component that has failed to a shorted condition"
    ],
    correctOptionIndex: 1
  },
  {
    id: 33,
    text: "What is the resistance of an open circuit?",
    options: [
      "Zero ohms",
      "One ohm",
      "Infinite (∞) resistance"
    ],
    correctOptionIndex: 2
  },
  {
    id: 34,
    text: "In the water tank analogy for potential difference, what does the water level represent?",
    options: [
      "Current",
      "Resistance",
      "Voltage"
    ],
    correctOptionIndex: 2
  },
  {
    id: 35,
    text: "In the water tank analogy, what does the flow of water through the pipe represent?",
    options: [
      "Voltage",
      "Current",
      "Resistance"
    ],
    correctOptionIndex: 1
  },
  {
    id: 36,
    text: "What is the effect of internal resistance on the terminal voltage of a battery when a load is connected?",
    options: [
      "The terminal voltage increases",
      "The terminal voltage decreases due to the voltage drop across the internal resistance",
      "The terminal voltage remains the same as the EMF"
    ],
    correctOptionIndex: 1
  },
  {
    id: 37,
    text: "If a circuit is traced from a positive terminal back to the same point, and the algebraic sum of the voltages is not zero, what law is being violated?",
    options: [
      "Ohm's Law",
      "Kirchhoff's Current Law",
      "Kirchhoff's Voltage Law"
    ],
    correctOptionIndex: 2
  },
  {
    id: 38,
    text: "In a parallel circuit with three branches, if the currents in two branches are 2A and 3A entering a node, and the third branch has 5A leaving, is Kirchhoff's Current Law satisfied?",
    options: [
      "No, because 2+3 ≠ 5",
      "Yes, because 2A + 3A = 5A, so the sum of currents entering equals the sum leaving",
      "Yes, but only if the voltage is constant"
    ],
    correctOptionIndex: 1
  },
  {
    id: 39,
    text: "What is the total resistance of a series circuit with resistors of 10Ω, 20Ω, and 30Ω?",
    options: [
      "60Ω",
      "30Ω",
      "5.45Ω"
    ],
    correctOptionIndex: 0
  },
  {
    id: 40,
    text: "What is the total current in a series circuit with a 12V source and a total resistance of 6Ω?",
    options: [
      "0.5A",
      "2A",
      "72A"
    ],
    correctOptionIndex: 1
  },
  {
    id: 41,
    text: "In a series circuit with a 30V source and three 10Ω resistors, what is the voltage drop across each resistor?",
    options: [
      "30V",
      "10V",
      "3V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 42,
    text: "What is the equivalent resistance of two 10Ω resistors in parallel?",
    options: [
      "20Ω",
      "5Ω",
      "0.2Ω"
    ],
    correctOptionIndex: 1
  },
  {
    id: 43,
    text: "If a 12V battery is connected to a parallel combination of a 6Ω and a 12Ω resistor, what is the total current?",
    options: [
      "1A",
      "2A",
      "3A"
    ],
    correctOptionIndex: 2
  },
  {
    id: 44,
    text: "If three 30Ω resistors are connected in parallel, what is the total resistance?",
    options: [
      "90Ω",
      "30Ω",
      "10Ω"
    ],
    correctOptionIndex: 2
  },
  {
    id: 45,
    text: "In a series circuit, if one of the resistors opens, the current in the circuit becomes:",
    options: [
      "Zero",
      "Infinite",
      "Unchanged"
    ],
    correctOptionIndex: 0
  },
  {
    id: 46,
    text: "In a parallel circuit, if one of the branch resistors opens, the total current:",
    options: [
      "Increases",
      "Decreases",
      "Remains the same"
    ],
    correctOptionIndex: 1
  },
  {
    id: 47,
    text: "The power dissipated by a 10Ω resistor with 2A of current flowing through it is:",
    options: [
      "20W",
      "5W",
      "40W"
    ],
    correctOptionIndex: 2
  },
  {
    id: 48,
    text: "What is the voltage drop across a 50Ω resistor if the current through it is 0.5A?",
    options: [
      "100V",
      "25V",
      "50.5V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 49,
    text: "In a series circuit, how does the total power compare to the sum of the individual powers?",
    options: [
      "Total power is less than the sum",
      "Total power is equal to the sum",
      "Total power is greater than the sum"
    ],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "In a parallel circuit, the branch with the smallest resistance will have the:",
    options: [
      "Smallest current",
      "Largest current",
      "Same current as the other branches"
    ],
    correctOptionIndex: 1
  },
  {
    id: 51,
    text: "What is the term for a point in a circuit that is used as a common reference for voltage measurements?",
    options: [
      "A node",
      "A junction",
      "A reference point (or ground)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 52,
    text: "In a circuit where the metal chassis is used as the return path for current, the chassis is considered to be at:",
    options: [
      "Positive potential",
      "Negative potential",
      "Zero potential (ground)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 53,
    text: "If a wire in a circuit is accidentally connected to a point of lower potential without passing through the intended load, what has occurred?",
    options: [
      "An open circuit",
      "A short circuit",
      "A series circuit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 54,
    text: "A 10Ω resistor and a 15Ω resistor are in parallel. What is the equivalent resistance?",
    options: [
      "25Ω",
      "6Ω",
      "0.166Ω"
    ],
    correctOptionIndex: 1
  },
  {
    id: 55,
    text: "A 2Ω, 3Ω, and 5Ω resistor are in series. The total resistance is 10Ω. If the current is 2A, what is the total voltage?",
    options: [
      "5V",
      "20V",
      "0.2V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 56,
    text: "A 9V battery is connected to a series circuit with a 3Ω and a 6Ω resistor. What is the voltage across the 6Ω resistor?",
    options: [
      "3V",
      "6V",
      "9V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 57,
    text: "Two 10Ω resistors are in parallel. This combination is in series with a 5Ω resistor. The total resistance is:",
    options: [
      "25Ω",
      "15Ω",
      "10Ω"
    ],
    correctOptionIndex: 2
  },
  {
    id: 58,
    text: "In the series-parallel circuit from Q57, if the source voltage is 30V, what is the current through the 5Ω resistor?",
    options: [
      "2A",
      "3A",
      "1.2A"
    ],
    correctOptionIndex: 1
  },
  {
    id: 59,
    text: "In the series-parallel circuit from Q57, what is the voltage across the parallel combination of the 10Ω resistors?",
    options: [
      "30V",
      "15V",
      "10V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 60,
    text: "What is the purpose of redrawing a circuit diagram?",
    options: [
      "To make it look more complex",
      "To change the electrical characteristics",
      "To simplify it into a form where series and parallel paths are easier to recognize"
    ],
    correctOptionIndex: 2
  },
  {
    id: 61,
    text: "If a series circuit has a total resistance of 50Ω and a total current of 2A, what is the total voltage?",
    options: [
      "25V",
      "100V",
      "52V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 62,
    text: "In a series circuit with a 120V source and two resistors, R1=20Ω and R2=40Ω, what is the voltage drop across R2?",
    options: [
      "40V",
      "80V",
      "120V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 63,
    text: "A 12V battery with an internal resistance of 1Ω is connected to a 5Ω load. What is the terminal voltage of the battery?",
    options: [
      "12V",
      "2V",
      "10V"
    ],
    correctOptionIndex: 2
  },
  {
    id: 64,
    text: "Kirchhoff's Current Law is based on the principle of conservation of:",
    options: [
      "Energy",
      "Charge",
      "Voltage"
    ],
    correctOptionIndex: 1
  },
  {
    id: 65,
    text: "Kirchhoff's Voltage Law is based on the principle of conservation of:",
    options: [
      "Charge",
      "Mass",
      "Energy"
    ],
    correctOptionIndex: 2
  },
  {
    id: 66,
    text: "In a series circuit, if you add more resistors, the total current will:",
    options: [
      "Increase",
      "Decrease",
      "Remain the same"
    ],
    correctOptionIndex: 1
  },
  {
    id: 67,
    text: "In a parallel circuit, if you add more resistors, the total current will:",
    options: [
      "Increase",
      "Decrease",
      "Remain the same"
    ],
    correctOptionIndex: 0
  },
  {
    id: 68,
    text: "What is the total resistance of a 100Ω resistor in parallel with a 100Ω resistor?",
    options: [
      "200Ω",
      "100Ω",
      "50Ω"
    ],
    correctOptionIndex: 2
  },
  {
    id: 69,
    text: "If the total current in a series circuit is 5A and the voltage source is 25V, what is the total resistance?",
    options: [
      "125Ω",
      "5Ω",
      "30Ω"
    ],
    correctOptionIndex: 1
  },
  {
    id: 70,
    text: "What is the voltage across a 2kΩ resistor if the current through it is 5mA?",
    options: [
      "0.4V",
      "400V",
      "10V"
    ],
    correctOptionIndex: 2
  },
  // Module 3.13 AC Theory
  {
    id: 71,
    text: "What is Alternating Current (AC)?",
    options: [
      "Electricity flowing in a constant direction with constant polarity",
      "Electricity that alternates in polarity and direction over time",
      "Electricity that only flows in one direction"
    ],
    correctOptionIndex: 1
  },
  {
    id: 72,
    text: "What is the generic symbol for an AC voltage source?",
    options: [
      "A long and a short line",
      "A circle with a wavy line inside",
      "A circle with a plus and minus sign"
    ],
    correctOptionIndex: 1
  },
  {
    id: 73,
    text: "What is the most common waveform produced by an electromechanical alternator?",
    options: [
      "A square wave",
      "A triangle wave",
      "A sine wave"
    ],
    correctOptionIndex: 2
  },
  {
    id: 74,
    text: "What is the period of a wave?",
    options: [
      "The number of cycles completed in one second",
      "The time it takes for one complete cycle to occur",
      "The maximum value of the waveform"
    ],
    correctOptionIndex: 1
  },
  {
    id: 75,
    text: "What is frequency?",
    options: [
      "The time it takes for one complete cycle",
      "The number of wave cycles completed during one second",
      "The peak value of the waveform"
    ],
    correctOptionIndex: 1
  },
  {
    id: 76,
    text: "The modern unit for frequency is:",
    options: [
      "Cycles per second",
      "Hertz (Hz)",
      "Volts per second"
    ],
    correctOptionIndex: 1
  },
  {
    id: 77,
    text: "What is the standard power-line frequency in Europe?",
    options: [
      "60 Hz",
      "400 Hz",
      "50 Hz"
    ],
    correctOptionIndex: 2
  },
  {
    id: 78,
    text: "The relationship between period (T) and frequency (f) is:",
    options: [
      "f = T",
      "f = 1/T",
      "f = T^2"
    ],
    correctOptionIndex: 1
  },
  {
    id: 79,
    text: "What is the mark-to-space ratio of a pulse waveform?",
    options: [
      "The ratio of the total period to the high time",
      "The ratio of the high time to the low time",
      "The ratio of the low time to the high time"
    ],
    correctOptionIndex: 1
  },
  {
    id: 80,
    text: "What is the duty cycle of a pulse waveform?",
    options: [
      "The low time divided by the period, multiplied by 100%",
      "The high time divided by the period, multiplied by 100%",
      "The peak voltage divided by the RMS voltage, multiplied by 100%"
    ],
    correctOptionIndex: 1
  },
  {
    id: 81,
    text: "What does RMS stand for?",
    options: [
      "Root Mean Square",
      "Rectified Mean Signal",
      "Rated Maximum Sine"
    ],
    correctOptionIndex: 0
  },
  {
    id: 82,
    text: "What does an RMS voltage represent?",
    options: [
      "The peak voltage of the waveform",
      "The average voltage of the waveform",
      "The equivalent DC voltage that would produce the same heating effect in a resistor"
    ],
    correctOptionIndex: 2
  },
  {
    id: 83,
    text: "For a pure sine wave, what is the relationship between the peak voltage (Vpk) and the RMS voltage (VRMS)?",
    options: [
      "VRMS = Vpk x 0.707",
      "VRMS = Vpk x 1.414",
      "VRMS = Vpk / 0.637"
    ],
    correctOptionIndex: 0
  },
  {
    id: 84,
    text: "For a pure sine wave, what is the relationship between the RMS voltage (VRMS) and the peak voltage (Vpk)?",
    options: [
      "Vpk = VRMS x 0.707",
      "Vpk = VRMS x 1.414",
      "Vpk = VRMS / 1.11"
    ],
    correctOptionIndex: 1
  },
  {
    id: 85,
    text: "What is the peak-to-peak voltage (Vp-p) of a 10V RMS sine wave?",
    options: [
      "14.14V",
      "28.28V",
      "7.07V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 86,
    text: "Which measurement of AC voltage is most appropriate for determining insulation flashover ratings?",
    options: [
      "RMS",
      "Average",
      "Peak"
    ],
    correctOptionIndex: 2
  },
  {
    id: 87,
    text: "Which measurement of AC current is most appropriate for determining wire size (ampacity)?",
    options: [
      "Peak",
      "Average",
      "RMS"
    ],
    correctOptionIndex: 2
  },
  {
    id: 88,
    text: "What is the form factor of an AC waveform?",
    options: [
      "The ratio of its peak value to its RMS value",
      "The ratio of its RMS value to its average value",
      "The ratio of its peak-to-peak value to its peak value"
    ],
    correctOptionIndex: 1
  },
  {
    id: 89,
    text: "What is the crest factor of an AC waveform?",
    options: [
      "The ratio of its RMS value to its average value",
      "The ratio of its peak value to its RMS value",
      "The ratio of its average value to its RMS value"
    ],
    correctOptionIndex: 1
  },
  {
    id: 90,
    text: "What is the form factor of a pure sine wave?",
    options: [
      "1.00",
      "1.11",
      "1.414"
    ],
    correctOptionIndex: 1
  },
  {
    id: 91,
    text: "What is the crest factor of a pure sine wave?",
    options: [
      "1.00",
      "1.11",
      "1.414"
    ],
    correctOptionIndex: 2
  },
  {
    id: 92,
    text: "If a sine wave has a peak voltage of 20V, what is its RMS voltage?",
    options: [
      "12.74V",
      "14.14V",
      "28.28V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 93,
    text: "What is the average voltage of a sine wave with a peak voltage of 10V?",
    options: [
      "6.37V",
      "7.07V",
      "0V"
    ],
    correctOptionIndex: 0
  },
  {
    id: 94,
    text: "For a pure sinusoidal waveform, what is the correct formula for RMS voltage?",
    options: [
      "VRMS = Vpk x 0.637",
      "VRMS = Vpk x 0.707",
      "VRMS = Vpk x 1.414"
    ],
    correctOptionIndex: 1
  },
  {
    id: 95,
    text: "For a square wave with a peak voltage of 10V, what is its RMS voltage?",
    options: [
      "7.07V",
      "10V",
      "5V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 96,
    text: "What does 'phase shift' refer to in AC circuits?",
    options: [
      "The difference in frequency between two waveforms",
      "The difference in amplitude between two waveforms",
      "The difference in time or angular position between two waveforms of the same frequency"
    ],
    correctOptionIndex: 2
  },
  {
    id: 97,
    text: "If waveform A peaks before waveform B, waveform A is said to be:",
    options: [
      "Lagging waveform B",
      "Leading waveform B",
      "In phase with waveform B"
    ],
    correctOptionIndex: 1
  },
  {
    id: 98,
    text: "In a three-phase system, what is the phase angle between each of the three voltage waveforms?",
    options: [
      "90°",
      "120°",
      "180°"
    ],
    correctOptionIndex: 1
  },
  {
    id: 99,
    text: "A single-phase AC power system has how many peaks and dips in voltage per cycle?",
    options: [
      "One peak, one dip",
      "Two peaks, two dips",
      "Three peaks, three dips"
    ],
    correctOptionIndex: 1
  },
  {
    id: 100,
    text: "What is a primary advantage of a three-phase AC system over a single-phase system?",
    options: [
      "It can only be used for lighting",
      "It delivers power at a more constant rate and can carry more load",
      "It uses a neutral wire, which is safer"
    ],
    correctOptionIndex: 1
  },
  {
    id: 101,
    text: "In a Y (star) connected system, the line voltage is related to the phase voltage by:",
    options: [
      "Vline = Vphase",
      "Vline = √3 x Vphase",
      "Vline = Vphase / √3"
    ],
    correctOptionIndex: 1
  },
  {
    id: 102,
    text: "In a Y (star) connected system, the line current is related to the phase current by:",
    options: [
      "Iline = Iphase",
      "Iline = √3 x Iphase",
      "Iline = Iphase / √3"
    ],
    correctOptionIndex: 0
  },
  {
    id: 103,
    text: "In a Δ (delta) connected system, the line voltage is related to the phase voltage by:",
    options: [
      "Vline = Vphase",
      "Vline = √3 x Vphase",
      "Vline = Vphase / √3"
    ],
    correctOptionIndex: 0
  },
  {
    id: 104,
    text: "In a Δ (delta) connected system, the line current is related to the phase current by:",
    options: [
      "Iline = Iphase",
      "Iline = √3 x Iphase",
      "Iline = Iphase / √3"
    ],
    correctOptionIndex: 1
  },
  {
    id: 105,
    text: "In a 120/208V Y-connected system, what is the phase voltage?",
    options: [
      "120V",
      "208V",
      "240V"
    ],
    correctOptionIndex: 0
  },
  {
    id: 106,
    text: "In a 120/208V Y-connected system, what is the line voltage?",
    options: [
      "120V",
      "208V",
      "240V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 107,
    text: "What is an advantage of a Δ-connected source over a Y-connected source?",
    options: [
      "It requires a neutral wire",
      "It has lower line currents",
      "It has greater fault tolerance (can continue operating with one open winding)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 108,
    text: "What is the function of a neutral wire in a Y-connected system?",
    options: [
      "To carry the sum of the line currents",
      "To provide a return path for current if the loads are unbalanced",
      "To increase the line voltage"
    ],
    correctOptionIndex: 1
  },
  {
    id: 109,
    text: "Phase rotation (or phase sequence) refers to:",
    options: [
      "The magnitude of the voltage in each phase",
      "The order in which the voltage waveforms in a polyphase system reach their peak values",
      "The direction of current flow in the neutral wire"
    ],
    correctOptionIndex: 1
  },
  {
    id: 110,
    text: "How can the phase rotation of a three-phase motor be reversed?",
    options: [
      "By reversing the rotation of the generator",
      "By exchanging any two of the three 'hot' wires going to the motor",
      "By disconnecting the neutral wire"
    ],
    correctOptionIndex: 1
  },
  {
    id: 111,
    text: "In a pure resistive AC circuit, what relationship between voltage and current is true?",
    options: [
      "Voltage leads current by 90°",
      "Voltage lags current by 90°",
      "Voltage and current are in phase"
    ],
    correctOptionIndex: 2
  },
  {
    id: 112,
    text: "An oscilloscope is used to:",
    options: [
      "Measure resistance",
      "Display a changing voltage over time",
      "Measure the specific gravity of a battery"
    ],
    correctOptionIndex: 1
  },
  {
    id: 113,
    text: "What is the instantaneous value of a sine wave?",
    options: [
      "The peak value of the waveform",
      "The RMS value of the waveform",
      "The value of the waveform at any given point in time"
    ],
    correctOptionIndex: 2
  },
  {
    id: 114,
    text: "A triangle wave with a peak voltage of 10V has an RMS voltage of approximately:",
    options: [
      "10V",
      "7.07V",
      "5.77V"
    ],
    correctOptionIndex: 2
  },
  {
    id: 115,
    text: "A square wave with a peak voltage of 10V has an average voltage of:",
    options: [
      "10V",
      "7.07V",
      "6.37V"
    ],
    correctOptionIndex: 0
  },
  {
    id: 116,
    text: "What is the time period of a 50Hz AC waveform?",
    options: [
      "50 seconds",
      "0.02 seconds",
      "0.2 seconds"
    ],
    correctOptionIndex: 1
  },
  {
    id: 117,
    text: "What is the frequency of an AC waveform that has a period of 0.01 seconds?",
    options: [
      "10Hz",
      "100Hz",
      "1000Hz"
    ],
    correctOptionIndex: 1
  },
  {
    id: 118,
    text: "Which type of meter is required to measure the RMS value of a non-sinusoidal waveform?",
    options: [
      "An analogue meter movement",
      "A \"True RMS Multimeter\"",
      "An oscilloscope"
    ],
    correctOptionIndex: 1
  },
  {
    id: 119,
    text: "An analogue AC meter movement is typically calibrated to read the RMS value of a:",
    options: [
      "Square wave",
      "Triangle wave",
      "Sine wave"
    ],
    correctOptionIndex: 2
  },
  {
    id: 120,
    text: "In a split-phase power system, the two voltage sources are:",
    options: [
      "120° out of phase",
      "180° out of phase (in opposition)",
      "In phase (0° phase shift)"
    ],
    correctOptionIndex: 1
  },
  {
    id: 121,
    text: "In a three-phase system, the three voltage sources are:",
    options: [
      "90° out of phase with each other",
      "120° out of phase with each other",
      "180° out of phase with each other"
    ],
    correctOptionIndex: 1
  },
  {
    id: 122,
    text: "In a Y-connected load, the voltage across each load element is the:",
    options: [
      "Line voltage",
      "Phase voltage",
      "Neutral voltage"
    ],
    correctOptionIndex: 1
  },
  {
    id: 123,
    text: "In a Δ-connected load, the current through each load element is the:",
    options: [
      "Line current",
      "Phase current",
      "Neutral current"
    ],
    correctOptionIndex: 1
  },
  {
    id: 124,
    text: "Which three-phase connection provides two different voltages (e.g., 120V and 208V) for powering different types of loads?",
    options: [
      "Delta (Δ)",
      "Wye (Y) with a neutral wire",
      "Open delta"
    ],
    correctOptionIndex: 1
  },
  {
    id: 125,
    text: "The reason an alternator produces a sine wave is due to:",
    options: [
      "The electronic circuit connected to it",
      "The rate of magnetic flux change, which follows a sine function",
      "The speed of the rotor"
    ],
    correctOptionIndex: 1
  },
  {
    id: 126,
    text: "If the frequency of an AC waveform is increased, its period:",
    options: [
      "Increases",
      "Decreases",
      "Remains the same"
    ],
    correctOptionIndex: 1
  },
  {
    id: 127,
    text: "What is the term for the maximum value of a waveform?",
    options: [
      "RMS",
      "Peak (Crest)",
      "Average"
    ],
    correctOptionIndex: 1
  },
  {
    id: 128,
    text: "The voltage in a three-phase system is often designated as 120/208. The 208V represents the:",
    options: [
      "Phase voltage",
      "Average voltage",
      "Line voltage"
    ],
    correctOptionIndex: 2
  },
  {
    id: 129,
    text: "In a balanced three-phase system, the neutral wire carries:",
    options: [
      "The sum of the phase currents",
      "Zero current",
      "The line current"
    ],
    correctOptionIndex: 1
  },
  {
    id: 130,
    text: "A waveform that has equal high and low times has a duty cycle of:",
    options: [
      "100%",
      "50%",
      "0%"
    ],
    correctOptionIndex: 1
  },
  {
    id: 131,
    text: "A waveform with a mark-to-space ratio of 2:1 has a duty cycle of approximately:",
    options: [
      "33.3%",
      "50%",
      "66.7%"
    ],
    correctOptionIndex: 2
  },
  {
    id: 132,
    text: "What is the average value of a symmetrical sine wave over a full cycle?",
    options: [
      "0.707 x Vpk",
      "0.637 x Vpk",
      "0"
    ],
    correctOptionIndex: 2
  },
  {
    id: 133,
    text: "When a purely resistive AC circuit is analyzed, Ohm's Law is applied using:",
    options: [
      "Peak values only",
      "RMS values, as long as all values are in the same unit (peak, RMS, etc.)",
      "Average values only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 134,
    text: "Which configuration of a three-phase source does not use a neutral wire?",
    options: [
      "Wye (Y)",
      "Delta (Δ)",
      "Split-phase"
    ],
    correctOptionIndex: 1
  },
  {
    id: 135,
    text: "The instantaneous power delivered to a purely resistive AC load:",
    options: [
      "Is constant",
      "Varies at the same frequency as the voltage and current",
      "Is always zero"
    ],
    correctOptionIndex: 1
  },
  {
    id: 136,
    text: "What is the peak voltage of a 230V RMS household supply?",
    options: [
      "230V",
      "325V",
      "163V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 137,
    text: "A three-phase generator can be thought of as:",
    options: [
      "Three single-phase generators mechanically linked",
      "One single-phase generator with a special output",
      "A DC generator with a commutator"
    ],
    correctOptionIndex: 0
  },
  {
    id: 138,
    text: "What is the purpose of step-up and step-down transformers in AC power distribution?",
    options: [
      "To change the frequency",
      "To change the voltage level for efficient transmission and safe usage",
      "To convert AC to DC"
    ],
    correctOptionIndex: 1
  },
  {
    id: 139,
    text: "In a pure sine wave, the voltage is changing most rapidly at:",
    options: [
      "The positive peak",
      "The zero crossing point",
      "The negative peak"
    ],
    correctOptionIndex: 1
  },
  {
    id: 140,
    text: "In a pure sine wave, the voltage is changing most slowly at:",
    options: [
      "The zero crossing point",
      "The positive and negative peaks",
      "45° and 135°"
    ],
    correctOptionIndex: 1
  },
  {
    id: 141,
    text: "What is the phase relationship between the three windings in a three-phase alternator?",
    options: [
      "They are all in phase with each other",
      "They are physically spaced 120° apart",
      "They are all connected to the same point"
    ],
    correctOptionIndex: 1
  },
  {
    id: 142,
    text: "If a three-phase motor is running in the wrong direction, how can it be corrected?",
    options: [
      "By reversing the entire power supply",
      "By swapping any two of the three supply lines",
      "By disconnecting the neutral"
    ],
    correctOptionIndex: 1
  },
  {
    id: 143,
    text: "The formula for the RMS value of a sine wave using the graphical method is:",
    options: [
      "VRMS = √(sum of mid-ordinate values / number of ordinates)",
      "VRMS = √(sum of (mid-ordinate values)² / number of ordinates)",
      "VRMS = (sum of mid-ordinate values) / number of ordinates"
    ],
    correctOptionIndex: 1
  },
  {
    id: 144,
    text: "What is the name for the waveform that is a combination of three single-phase circuits?",
    options: [
      "Split-phase",
      "Polyphase",
      "Single-phase"
    ],
    correctOptionIndex: 1
  },
  {
    id: 145,
    text: "The 'square root of 3' (√3) is approximately:",
    options: [
      "1.11",
      "1.414",
      "1.732"
    ],
    correctOptionIndex: 2
  },
  {
    id: 146,
    text: "In a 208V three-phase system, if the line voltage is 208V, what is the phase voltage in a Y-connected load?",
    options: [
      "120V",
      "208V",
      "360V"
    ],
    correctOptionIndex: 0
  },
  {
    id: 147,
    text: "In a Δ-connected three-phase load, if the phase current is 10A, what is the line current?",
    options: [
      "10A",
      "17.32A",
      "14.14A"
    ],
    correctOptionIndex: 1
  },
  {
    id: 148,
    text: "What is the total power dissipated in a balanced three-phase load?",
    options: [
      "Ptotal = Vphase x Iphase",
      "Ptotal = 3 x Vphase x Iphase x cos(θ)",
      "Ptotal = √3 x Vline x Iline x cos(θ)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 149,
    text: "Why is three-phase power preferred for large motors?",
    options: [
      "It is cheaper to generate",
      "It produces a rotating magnetic field without additional starting circuits",
      "It uses less copper than DC"
    ],
    correctOptionIndex: 1
  },
  {
    id: 150,
    text: "In a split-phase system, the voltage measured between the two \"hot\" wires is:",
    options: [
      "The sum of the two phase voltages",
      "The difference between the two phase voltages",
      "The same as the phase voltage"
    ],
    correctOptionIndex: 0
  },
  // Module 3.6 DC Circuits (continued)
  {
    id: 151,
    text: "When redrawing a circuit for clarity, what is the first step?",
    options: [
      "Label all resistors with their values",
      "Trace the current paths in the circuit",
      "Calculate total resistance"
    ],
    correctOptionIndex: 1
  },
  {
    id: 152,
    text: "In a schematic diagram, wires are assumed to have:",
    options: [
      "Infinite resistance",
      "Zero resistance (no voltage drop)",
      "A fixed resistance of 1 ohm per foot"
    ],
    correctOptionIndex: 1
  },
  {
    id: 153,
    text: "In a complex circuit, points that are at the same potential are connected by:",
    options: [
      "Resistors",
      "Unbroken wires",
      "Switches"
    ],
    correctOptionIndex: 1
  },
  {
    id: 154,
    text: "When redrawing a circuit, you can \"stretch\" or \"shrink\" connecting wires because:",
    options: [
      "It changes the circuit resistance for easier calculation",
      "Wires have no resistance and therefore do not affect the electrical characteristics",
      "The circuit will function the same only if wires are kept short"
    ],
    correctOptionIndex: 1
  },
  {
    id: 155,
    text: "If an open occurs in a parallel branch of a series-parallel circuit, the total circuit resistance will:",
    options: [
      "Decrease",
      "Increase",
      "Remain the same"
    ],
    correctOptionIndex: 1
  },
  {
    id: 156,
    text: "If an open occurs in a parallel branch of a series-parallel circuit, the total circuit current will:",
    options: [
      "Increase",
      "Decrease",
      "Remain the same"
    ],
    correctOptionIndex: 1
  },
  {
    id: 157,
    text: "If a short circuit occurs in one branch of a parallel network, the equivalent resistance of that network becomes:",
    options: [
      "Infinite",
      "Zero",
      "Equal to the resistance of the other branches"
    ],
    correctOptionIndex: 1
  },
  {
    id: 158,
    text: "When a short circuit occurs, the current in the circuit:",
    options: [
      "Decreases",
      "Increases greatly",
      "Stops flowing"
    ],
    correctOptionIndex: 1
  },
  {
    id: 159,
    text: "A fuse is connected in _________ with the circuit it protects.",
    options: [
      "Parallel",
      "Series",
      "Series-parallel"
    ],
    correctOptionIndex: 1
  },
  {
    id: 160,
    text: "In a series circuit with two resistors, R1 = 10Ω and R2 = 20Ω, and a 30V source. What is the voltage drop across R1?",
    options: [
      "10V",
      "20V",
      "30V"
    ],
    correctOptionIndex: 0
  },
  {
    id: 161,
    text: "In a series circuit with three resistors, if the total voltage is 100V and the voltage drops across two resistors are 25V and 35V, what is the voltage drop across the third?",
    options: [
      "40V",
      "60V",
      "10V"
    ],
    correctOptionIndex: 0
  },
  {
    id: 162,
    text: "What is the total resistance of a parallel circuit with resistors of 4Ω, 6Ω, and 12Ω?",
    options: [
      "22Ω",
      "2Ω",
      "0.5Ω"
    ],
    correctOptionIndex: 1
  },
  {
    id: 163,
    text: "Two 10Ω resistors are in series. This combination is in parallel with a 20Ω resistor. The total resistance is:",
    options: [
      "40Ω",
      "20Ω",
      "10Ω"
    ],
    correctOptionIndex: 2
  },
  {
    id: 164,
    text: "In a series circuit, the power dissipated by each resistor is proportional to its:",
    options: [
      "Conductance",
      "Resistance",
      "Reciprocal of resistance"
    ],
    correctOptionIndex: 1
  },
  {
    id: 165,
    text: "In a parallel circuit, the power dissipated by each resistor is proportional to its:",
    options: [
      "Conductance",
      "Resistance",
      "Reciprocal of voltage"
    ],
    correctOptionIndex: 0
  },
  {
    id: 166,
    text: "A resistor of 100Ω carries a current of 0.5A. What is the power dissipated?",
    options: [
      "50W",
      "25W",
      "200W"
    ],
    correctOptionIndex: 1
  },
  {
    id: 167,
    text: "What is the total current drawn from a 12V source by a parallel combination of a 6Ω and a 3Ω resistor?",
    options: [
      "2A",
      "4A",
      "6A"
    ],
    correctOptionIndex: 2
  },
  {
    id: 168,
    text: "In a series circuit, if the source voltage is 24V and total resistance is 8Ω, what is the current?",
    options: [
      "3A",
      "192A",
      "0.333A"
    ],
    correctOptionIndex: 0
  },
  {
    id: 169,
    text: "In a series circuit with two resistors, if the voltage across the 5Ω resistor is 10V, what is the current?",
    options: [
      "2A",
      "0.5A",
      "50A"
    ],
    correctOptionIndex: 0
  },
  {
    id: 170,
    text: "If a circuit has a total resistance of 100Ω and a total current of 2A, what is the total voltage?",
    options: [
      "50V",
      "200V",
      "102V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 171,
    text: "Kirchhoff's Voltage Law is applied to:",
    options: [
      "Any junction in a circuit",
      "Any closed loop in a circuit",
      "Any branch in a circuit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 172,
    text: "Kirchhoff's Current Law is applied to:",
    options: [
      "Any closed loop",
      "Any junction (node)",
      "Any individual component"
    ],
    correctOptionIndex: 1
  },
  {
    id: 173,
    text: "In a parallel circuit, if one branch is open, the voltage across the remaining branches:",
    options: [
      "Increases",
      "Decreases",
      "Remains the same (equal to source voltage)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 174,
    text: "In a parallel circuit, adding more resistors in parallel will cause the total resistance to:",
    options: [
      "Increase",
      "Decrease",
      "Stay the same"
    ],
    correctOptionIndex: 1
  },
  {
    id: 175,
    text: "In a series circuit, adding more resistors in series will cause the total resistance to:",
    options: [
      "Increase",
      "Decrease",
      "Stay the same"
    ],
    correctOptionIndex: 0
  },
  {
    id: 176,
    text: "The internal resistance of a battery causes the terminal voltage to be:",
    options: [
      "Higher than the EMF when current is drawn",
      "Lower than the EMF when current is drawn",
      "Equal to the EMF regardless of current"
    ],
    correctOptionIndex: 1
  },
  {
    id: 177,
    text: "A 9V battery with an internal resistance of 1Ω is connected to a load of 8Ω. What is the terminal voltage?",
    options: [
      "9V",
      "8V",
      "1V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 178,
    text: "In a circuit with multiple voltage sources, Kirchhoff's Voltage Law can be used to find:",
    options: [
      "Total power",
      "Unknown currents or voltages",
      "Total capacitance"
    ],
    correctOptionIndex: 1
  },
  {
    id: 179,
    text: "In a series circuit, the voltage drop across a resistor is found by:",
    options: [
      "Multiplying the total voltage by the resistor value",
      "Multiplying the total current by the resistor value",
      "Dividing the source voltage by the resistor value"
    ],
    correctOptionIndex: 1
  },
  {
    id: 180,
    text: "In a parallel circuit, the branch current is found by:",
    options: [
      "Dividing the source voltage by the branch resistance",
      "Multiplying the source voltage by the branch resistance",
      "Dividing the branch resistance by the source voltage"
    ],
    correctOptionIndex: 0
  },
  {
    id: 181,
    text: "A 10Ω resistor and a 40Ω resistor are in parallel. What is the equivalent resistance?",
    options: [
      "50Ω",
      "8Ω",
      "30Ω"
    ],
    correctOptionIndex: 1
  },
  {
    id: 182,
    text: "A 2Ω, 4Ω, and 6Ω resistor are in series. The total resistance is 12Ω. If the current is 5A, what is the voltage across the 4Ω resistor?",
    options: [
      "20V",
      "60V",
      "10V"
    ],
    correctOptionIndex: 0
  },
  {
    id: 183,
    text: "If the total power in a series circuit is 100W and the total voltage is 50V, what is the total current?",
    options: [
      "2A",
      "0.5A",
      "5000A"
    ],
    correctOptionIndex: 0
  },
  {
    id: 184,
    text: "A resistor dissipates 20W when 2A flows through it. What is its resistance?",
    options: [
      "10Ω",
      "5Ω",
      "40Ω"
    ],
    correctOptionIndex: 1
  },
  {
    id: 185,
    text: "In a combination circuit, the first step in simplification is to:",
    options: [
      "Calculate total current",
      "Combine resistors that are in series or parallel starting from the furthest from the source",
      "Solve for all voltages"
    ],
    correctOptionIndex: 1
  },
  {
    id: 186,
    text: "A 50Ω resistor is in series with a parallel combination of a 100Ω and a 100Ω resistor. The total resistance is:",
    options: [
      "50Ω",
      "100Ω",
      "150Ω"
    ],
    correctOptionIndex: 1
  },
  {
    id: 187,
    text: "In the circuit of Q186, if the source voltage is 100V, what is the current through the 50Ω series resistor?",
    options: [
      "1A",
      "2A",
      "0.5A"
    ],
    correctOptionIndex: 0
  },
  {
    id: 188,
    text: "The term \"ground\" in a circuit schematic usually refers to:",
    options: [
      "A connection to the earth",
      "A common reference point of zero potential",
      "A safety connection only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 189,
    text: "In an aircraft electrical system, the airframe is often used as:",
    options: [
      "The positive supply",
      "The return path (ground) to save wiring",
      "An insulator"
    ],
    correctOptionIndex: 1
  },
  {
    id: 190,
    text: "If a short circuit occurs across a load, the load will:",
    options: [
      "Have increased voltage",
      "Have nearly zero voltage across it",
      "Draw less current"
    ],
    correctOptionIndex: 1
  },
  {
    id: 191,
    text: "What is the peak voltage of a 115V RMS aircraft AC supply?",
    options: [
      "115V",
      "163V",
      "230V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 192,
    text: "What is the peak-to-peak voltage of a 115V RMS sine wave?",
    options: [
      "115V",
      "230V",
      "326V"
    ],
    correctOptionIndex: 2
  },
  {
    id: 193,
    text: "If a sine wave has a peak-to-peak voltage of 100V, what is its RMS voltage?",
    options: [
      "70.7V",
      "35.4V",
      "50V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 194,
    text: "The average value of a full-wave rectified sine wave is:",
    options: [
      "0",
      "0.637 x Vpk",
      "0.707 x Vpk"
    ],
    correctOptionIndex: 1
  },
  {
    id: 195,
    text: "What is the form factor of a square wave?",
    options: [
      "1.0",
      "1.11",
      "1.414"
    ],
    correctOptionIndex: 0
  },
  {
    id: 196,
    text: "What is the crest factor of a square wave?",
    options: [
      "1.0",
      "1.11",
      "1.414"
    ],
    correctOptionIndex: 0
  },
  {
    id: 197,
    text: "In a three-phase Y-connected system, if the phase voltage is 115V, the line voltage is approximately:",
    options: [
      "115V",
      "200V",
      "230V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 198,
    text: "In a three-phase Δ-connected system, if the line voltage is 200V, the phase voltage is:",
    options: [
      "115V",
      "200V",
      "346V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 199,
    text: "A balanced three-phase load draws 10A per phase. In a Δ connection, the line current is:",
    options: [
      "10A",
      "17.32A",
      "5.77A"
    ],
    correctOptionIndex: 1
  },
  {
    id: 200,
    text: "In a balanced Y-connected load, if the line current is 10A, the phase current is:",
    options: [
      "10A",
      "17.32A",
      "5.77A"
    ],
    correctOptionIndex: 0
  },
  {
    id: 201,
    text: "What is the frequency of an AC waveform that completes 100 cycles in 2 seconds?",
    options: [
      "50Hz",
      "100Hz",
      "200Hz"
    ],
    correctOptionIndex: 0
  },
  {
    id: 202,
    text: "A 400Hz AC supply is common in aircraft. Its period is:",
    options: [
      "0.0025 seconds (2.5 ms)",
      "0.004 seconds (4 ms)",
      "0.025 seconds (25 ms)"
    ],
    correctOptionIndex: 0
  },
  {
    id: 203,
    text: "The instantaneous value of a sine wave at 90° is:",
    options: [
      "0",
      "Vpk",
      "Vpk x 0.707"
    ],
    correctOptionIndex: 1
  },
  {
    id: 204,
    text: "The instantaneous value of a sine wave at 180° is:",
    options: [
      "0",
      "Vpk",
      "-Vpk"
    ],
    correctOptionIndex: 0
  },
  {
    id: 205,
    text: "In an AC circuit with only resistance, the power dissipated is equal to:",
    options: [
      "Vrms x Irms x cos(θ)",
      "Vpk x Ipk",
      "Vavg x Iavg"
    ],
    correctOptionIndex: 0
  },
  {
    id: 206,
    text: "The phase difference between voltage and current in a purely resistive AC circuit is:",
    options: [
      "0°",
      "90°",
      "180°"
    ],
    correctOptionIndex: 0
  },
  {
    id: 207,
    text: "In a three-phase system, the power delivered is constant because:",
    options: [
      "The sum of the three instantaneous powers is constant",
      "Each phase delivers power at different times",
      "The voltage never crosses zero"
    ],
    correctOptionIndex: 0
  },
  {
    id: 208,
    text: "A three-phase alternator can be wired in either Y or Δ. The Y connection provides:",
    options: [
      "Higher line voltage and lower line current for the same power",
      "Lower line voltage and higher line current",
      "Same line voltage and current as Δ"
    ],
    correctOptionIndex: 0
  },
  {
    id: 209,
    text: "In a Δ-connected source, if one winding opens, the remaining two windings can still supply:",
    options: [
      "Full three-phase power",
      "Reduced three-phase power (open delta)",
      "No power at all"
    ],
    correctOptionIndex: 1
  },
  {
    id: 210,
    text: "The term \"polyphase\" refers to:",
    options: [
      "A system with more than one phase",
      "A system with a single phase",
      "A system that can be used for both AC and DC"
    ],
    correctOptionIndex: 0
  },
  {
    id: 211,
    text: "In a split-phase 120/240V system, the two 120V voltages are:",
    options: [
      "In phase",
      "180° out of phase",
      "120° out of phase"
    ],
    correctOptionIndex: 1
  },
  {
    id: 212,
    text: "If the frequency of an AC signal is 1 kHz, its period is:",
    options: [
      "1 ms",
      "0.001 s",
      "Both a and b"
    ],
    correctOptionIndex: 2
  },
  {
    id: 213,
    text: "The RMS value of a sine wave is also known as the:",
    options: [
      "Peak value",
      "Effective value",
      "Average value"
    ],
    correctOptionIndex: 1
  },
  {
    id: 214,
    text: "A multimeter set to AC volts typically displays:",
    options: [
      "Peak voltage",
      "RMS voltage (assuming a sine wave)",
      "Peak-to-peak voltage"
    ],
    correctOptionIndex: 1
  },
  {
    id: 215,
    text: "An oscilloscope displays:",
    options: [
      "RMS values",
      "Instantaneous values in real-time",
      "Average values"
    ],
    correctOptionIndex: 1
  },
  {
    id: 216,
    text: "A sawtooth wave with a peak voltage of 10V has an RMS voltage of approximately:",
    options: [
      "10V",
      "5.77V",
      "7.07V"
    ],
    correctOptionIndex: 1
  },
  {
    id: 217,
    text: "The main advantage of AC over DC for power distribution is:",
    options: [
      "AC can be easily transformed to different voltages",
      "AC is safer",
      "AC can be stored in batteries"
    ],
    correctOptionIndex: 0
  },
  {
    id: 218,
    text: "In a three-phase Y system, the neutral wire is necessary when:",
    options: [
      "The load is balanced",
      "The load is unbalanced",
      "The system is delta connected"
    ],
    correctOptionIndex: 1
  },
  {
    id: 219,
    text: "Phase rotation is important for:",
    options: [
      "Resistive heaters",
      "Three-phase motors",
      "Lighting circuits"
    ],
    correctOptionIndex: 1
  },
  {
    id: 220,
    text: "If a three-phase motor is running backwards, you can reverse it by:",
    options: [
      "Swapping any two line connections",
      "Swapping all three line connections",
      "Disconnecting the neutral"
    ],
    correctOptionIndex: 0
  }
];
