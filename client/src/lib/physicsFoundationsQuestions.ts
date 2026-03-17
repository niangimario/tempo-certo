import { Question } from "../../../shared/schema";

export const physicsFoundationsQuestions: Question[] = [
  {
    id: 1,
    text: "What is the SI unit of mass?",
    options: ["Newton", "Kilogram", "Slug"],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "One slug is approximately equal to how many kilograms?",
    options: ["4.59 kg", "14.59 kg", "24.59 kg"],
    correctOptionIndex: 1
  },
  {
    id: 3,
    text: "In physics, mass measures an object's:",
    options: ["Weight in a gravitational field", "Resistance to acceleration when a force is applied", "Volume"],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "Weight is measured in which units?",
    options: ["Kilograms", "Newtons", "Slugs"],
    correctOptionIndex: 1
  },
  {
    id: 5,
    text: "On the surface of the Earth, an object with mass 50 kg weighs:",
    options: ["50 N", "491 N", "981 N"],
    correctOptionIndex: 1
  },
  {
    id: 6,
    text: "On the surface of the Moon, the same 50 kg object weighs:",
    options: ["50 N", "81.5 N", "491 N"],
    correctOptionIndex: 1
  },
  {
    id: 7,
    text: "The formula relating weight to mass is:",
    options: ["W = m/a", "W = mg", "W = m/g"],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "What is the value of acceleration due to Earth's gravity?",
    options: ["9.81 m/s²", "32 m/s²", "Both A and B are correct in different systems"],
    correctOptionIndex: 2
  },
  {
    id: 9,
    text: "Inertia is defined as:",
    options: ["The weight of an object", "Resistance to any change in state of motion", "The force of gravity"],
    correctOptionIndex: 1
  },
  {
    id: 10,
    text: "Objects in free fall are:",
    options: ["Heavier than normal", "Weightless, though they still have mass", "Have no mass"],
    correctOptionIndex: 1
  },
  {
    id: 11,
    text: "The pound (lb) is a unit of:",
    options: ["Mass only", "Force only", "Both mass and force (used mainly in US)"],
    correctOptionIndex: 2
  },
  {
    id: 12,
    text: "The tonne (t) or 'metric ton' equals:",
    options: ["100 kg", "1,000 kg", "10,000 kg"],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "Mass is a property that determines:",
    options: ["Only resistance to acceleration", "Only gravitational attraction", "Both resistance to acceleration and strength of gravitational attraction"],
    correctOptionIndex: 2
  },
  {
    id: 14,
    text: "Why must we distinguish between mass and weight for precise measurements?",
    options: ["Because mass changes with location", "Because of slight differences in Earth's gravitational field at different places", "Because weight is constant everywhere"],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "A person's weight stated as '75 kg' is:",
    options: ["Scientifically correct", "Everyday usage, though technically it should be in newtons", "Always incorrect"],
    correctOptionIndex: 1
  },
  {
    id: 16,
    text: "Newton's treatise on motion, The Principia, was published in:",
    options: ["1586", "1686", "1786"],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "Newton's First Law is also called:",
    options: ["Law of Acceleration", "Law of Inertia", "Law of Action-Reaction"],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "Newton's First Law states:",
    options: ["F = ma", "A body at rest remains at rest, and a body in motion continues at constant velocity unless acted upon by an unbalanced external force", "Every action has an equal and opposite reaction"],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "When an aircraft suddenly stops at the terminal, passengers thrown forward is an example of:",
    options: ["Newton's Second Law", "Newton's First Law", "Newton's Third Law"],
    correctOptionIndex: 1
  },
  {
    id: 20,
    text: "Shovelling snow demonstrates Newton's First Law because:",
    options: ["The shovel accelerates the snow", "The snow continues moving when the shovel stops", "The snow falls due to gravity"],
    correctOptionIndex: 1
  },
  {
    id: 21,
    text: "Newton's Second Law is expressed as:",
    options: ["F = mv", "F = ma", "F = m/a"],
    correctOptionIndex: 1
  },
  {
    id: 22,
    text: "In F = ma, the force (F) refers to:",
    options: ["Any single force", "The net or unbalanced force", "The weight only"],
    correctOptionIndex: 1
  },
  {
    id: 23,
    text: "When an object is in equilibrium:",
    options: ["Net force is zero and acceleration is zero", "Net force is maximum", "Acceleration is maximum"],
    correctOptionIndex: 0
  },
  {
    id: 24,
    text: "If an aeroplane travels on a straight runway at constant speed, the forces are:",
    options: ["Unbalanced", "Balanced", "Not present"],
    correctOptionIndex: 1
  },
  {
    id: 25,
    text: "The four forces acting on an aeroplane on a runway at constant speed are:",
    options: ["Lift, drag, thrust, weight", "Weight, normal force, thrust, friction", "Gravity, lift, drag, thrust"],
    correctOptionIndex: 1
  },
  {
    id: 26,
    text: "Newton's Third Law is also called:",
    options: ["Law of Inertia", "Law of Acceleration", "Law of Action and Reaction"],
    correctOptionIndex: 2
  },
  {
    id: 27,
    text: "Newton's Third Law states:",
    options: ["F = ma", "Every action has an equal and opposite reaction", "Objects at rest stay at rest"],
    correctOptionIndex: 1
  },
  {
    id: 28,
    text: "When the Earth pulls an apple with a force called weight, the apple:",
    options: ["Does nothing", "Pulls back on the Earth with an equal force", "Pulls back with half the force"],
    correctOptionIndex: 1
  },
  {
    id: 29,
    text: "Action and reaction forces act on:",
    options: ["The same object", "Different objects", "No objects"],
    correctOptionIndex: 1
  },
  {
    id: 30,
    text: "In a tug of war, the winning team pulls:",
    options: ["Harder than the losing team", "With the same force as the losing team", "With less force"],
    correctOptionIndex: 1
  },
  {
    id: 31,
    text: "A horse and wagon move forward because:",
    options: ["The horse pulls harder than the wagon pulls back", "The ground exerts a forward force on the horse's hooves greater than the backward pull from the wagon", "Newton's Third Law doesn't apply"],
    correctOptionIndex: 1
  },
  {
    id: 32,
    text: "A propeller produces thrust by:",
    options: ["Pushing air forward", "Accelerating a mass of air rearwards", "Creating a vacuum"],
    correctOptionIndex: 1
  },
  {
    id: 33,
    text: "The thrust formula for a propeller is:",
    options: ["T = m × v", "T = m × (v - u)/t", "T = m × a × t"],
    correctOptionIndex: 1
  },
  {
    id: 34,
    text: "In the propeller thrust formula, u and v are velocities relative to:",
    options: ["The ground", "The plane of rotation of the propeller", "The air mass"],
    correctOptionIndex: 1
  },
  {
    id: 35,
    text: "A propeller accelerates an air mass of 12.2 slugs from rest to 137 ft/sec in 1 second. Thrust is:",
    options: ["1,270 lbs", "1,670 lbs", "2,670 lbs"],
    correctOptionIndex: 1
  },
  {
    id: 36,
    text: "A turbojet imparts:",
    options: ["Slight velocity change to large air mass", "Significant velocity change to small air mass", "No velocity change"],
    correctOptionIndex: 1
  },
  {
    id: 37,
    text: "A reciprocating engine propeller imparts:",
    options: ["Slight velocity change to large air mass", "Significant velocity change to small air mass", "Equal changes"],
    correctOptionIndex: 0
  },
  {
    id: 38,
    text: "The thrust formula for a jet engine is:",
    options: ["T = (m/t)v - (m/t)u", "T = (m/t)(v + u)", "T = m(v - u)"],
    correctOptionIndex: 0
  },
  {
    id: 39,
    text: "Gross thrust comes from:",
    options: ["Incoming air", "Exhaust gases", "Both equally"],
    correctOptionIndex: 1
  },
  {
    id: 40,
    text: "Ram drag is due to:",
    options: ["Exhaust velocity", "Aeroplane's speed (incoming air)", "Fuel consumption"],
    correctOptionIndex: 1
  },
  {
    id: 41,
    text: "During a static test (u = 0), thrust equals:",
    options: ["Ram drag", "Gross thrust", "Zero"],
    correctOptionIndex: 1
  },
  {
    id: 42,
    text: "Jet engine with mass airflow 23 kg/sec, exhaust velocity 580 m/sec, static test thrust is:",
    options: ["13,300 N", "23,000 N", "580 N"],
    correctOptionIndex: 0
  },
  {
    id: 43,
    text: "Same jet engine at 250 knots (129 m/sec) gives thrust of:",
    options: ["13,300 N", "10,300 N", "2,970 N"],
    correctOptionIndex: 1
  },
  {
    id: 44,
    text: "Thrust may be increased by:",
    options: ["Decreasing air mass flow", "Increasing air mass flow or increasing exhaust gas velocity", "Decreasing exhaust velocity"],
    correctOptionIndex: 1
  },
  {
    id: 45,
    text: "Turbofan engine with airflow 109 kg/sec, intake 154 m/sec, exhaust 224 m/sec gives thrust:",
    options: ["7,630 N", "10,300 N", "13,300 N"],
    correctOptionIndex: 0
  },
  {
    id: 46,
    text: "Work done formula is:",
    options: ["W = F/t", "W = F × D", "W = F/D"],
    correctOptionIndex: 1
  },
  {
    id: 47,
    text: "Work is measured in:",
    options: ["Newtons", "Joules or foot-pounds", "Watts"],
    correctOptionIndex: 1
  },
  {
    id: 48,
    text: "One joule equals:",
    options: ["1 newton-meter", "1 newton/second", "1 kg·m/s"],
    correctOptionIndex: 0
  },
  {
    id: 49,
    text: "Power is defined as:",
    options: ["Force × distance", "Rate of doing work", "Energy × time"],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "Power formula is:",
    options: ["P = F × D", "P = Work/Time", "P = F × t"],
    correctOptionIndex: 1
  },
  {
    id: 51,
    text: "1 horsepower equals:",
    options: ["550 ft·lb/sec", "33,000 ft·lb/sec", "550 ft·lb/min"],
    correctOptionIndex: 0
  },
  {
    id: 52,
    text: "1 horsepower also equals:",
    options: ["33,000 ft·lb/min", "550 ft·lb/min", "5,500 ft·lb/min"],
    correctOptionIndex: 0
  },
  {
    id: 53,
    text: "1 kilowatt (kW) equals:",
    options: ["100 W", "1,000 W", "10,000 W"],
    correctOptionIndex: 1
  },
  {
    id: 54,
    text: "The general work formula including angle is:",
    options: ["W = FS", "W = FS cosθ", "W = FS sinθ"],
    correctOptionIndex: 1
  },
  {
    id: 55,
    text: "When force and displacement are in the same direction, cosθ equals:",
    options: ["0", "1", "-1"],
    correctOptionIndex: 1
  },
  {
    id: 56,
    text: "When force and displacement are opposite, cosθ equals:",
    options: ["0", "1", "-1"],
    correctOptionIndex: 2
  },
  {
    id: 57,
    text: "Lowering a book gives:",
    options: ["Positive work", "Negative work", "Zero work"],
    correctOptionIndex: 1
  },
  {
    id: 58,
    text: "Kinetic energy formula is:",
    options: ["KE = mV", "KE = ½mV²", "KE = mV²"],
    correctOptionIndex: 1
  },
  {
    id: 59,
    text: "Potential energy formula is:",
    options: ["PE = mgh", "PE = ½mgh", "PE = mg/h"],
    correctOptionIndex: 0
  },
  {
    id: 60,
    text: "Energy is defined as:",
    options: ["The rate of doing work", "The capacity to do work", "Force times distance"],
    correctOptionIndex: 1
  },
  {
    id: 61,
    text: "An object of mass 4 slugs, 6 ft above ground, falling to 2 ft above ground has speed:",
    options: ["8 ft/sec", "16 ft/sec", "32 ft/sec"],
    correctOptionIndex: 1
  },
  {
    id: 62,
    text: "Object mass 10 kg falls from 300 m. Speed just before touching ground:",
    options: ["76.7 m/sec", "9.8 m/sec", "300 m/sec"],
    correctOptionIndex: 0
  },
  {
    id: 63,
    text: "The law of conservation of energy states:",
    options: ["Energy can be created and destroyed", "Energy can neither be created nor destroyed; it transforms from one form to another", "Energy is always lost"],
    correctOptionIndex: 1
  },
  {
    id: 64,
    text: "Heat is also known as:",
    options: ["Chemical energy", "Thermal energy", "Nuclear energy"],
    correctOptionIndex: 1
  },
  {
    id: 65,
    text: "The SI unit for heat is:",
    options: ["Calorie", "Joule", "BTU"],
    correctOptionIndex: 1
  },
  {
    id: 66,
    text: "One calorie is defined as heat required to raise 1g of water from:",
    options: ["0°C to 1°C", "14.5°C to 15.5°C", "20°C to 21°C"],
    correctOptionIndex: 1
  },
  {
    id: 67,
    text: "When energy is transferred from one form to another, efficiency is:",
    options: ["Always 100%", "Never 100% due to losses like heat and sound", "Always 50%"],
    correctOptionIndex: 1
  },
  {
    id: 68,
    text: "A cyclist with 1,000 J kinetic energy coasts up a hill and has 900 J potential energy. Efficiency is:",
    options: ["100%", "90%", "80%"],
    correctOptionIndex: 1
  },
  {
    id: 69,
    text: "Power formula using velocity is:",
    options: ["P = F/v", "P = Fv", "P = F × t"],
    correctOptionIndex: 1
  },
  {
    id: 70,
    text: "An aircraft engine weighing 4,000 lbs hoisted 9 ft in 5 minutes. Power in ft·lb/sec is:",
    options: ["120 ft·lb/sec", "550 ft·lb/sec", "33,000 ft·lb/sec"],
    correctOptionIndex: 0
  },
  {
    id: 71,
    text: "Same engine hoist, power in horsepower is:",
    options: ["0.218 hp", "2.18 hp", "21.8 hp"],
    correctOptionIndex: 0
  },
  {
    id: 72,
    text: "Elevator cab weighs 6,000 N, 5 kW motor lifts it 40 m. Time required:",
    options: ["48 sec", "60 sec", "120 sec"],
    correctOptionIndex: 0
  },
  {
    id: 73,
    text: "Thrust horsepower (THP) formula with speed in ft/sec is:",
    options: ["THP = (thrust × speed)/550", "THP = (thrust × speed)/375", "THP = thrust × speed × 550"],
    correctOptionIndex: 0
  },
  {
    id: 74,
    text: "THP formula with speed in mph is:",
    options: ["THP = (thrust × speed)/550", "THP = (thrust × speed)/375", "THP = thrust × speed × 375"],
    correctOptionIndex: 1
  },
  {
    id: 75,
    text: "Engine produces 5,500 lbs thrust at 450 mph. THP is:",
    options: ["6,600 hp", "660 hp", "66,000 hp"],
    correctOptionIndex: 0
  },
  {
    id: 76,
    text: "Momentum is defined as:",
    options: ["Mass × acceleration", "Mass × velocity", "Force × time"],
    correctOptionIndex: 1
  },
  {
    id: 77,
    text: "Momentum is a:",
    options: ["Scalar quantity", "Vector quantity", "Dimensionless quantity"],
    correctOptionIndex: 1
  },
  {
    id: 78,
    text: "The conservation of momentum principle states:",
    options: ["Momentum is always lost in collisions", "Momentum cannot be destroyed, only transferred", "Momentum increases in collisions"],
    correctOptionIndex: 1
  },
  {
    id: 79,
    text: "In a collision, total momentum before collision:",
    options: ["Is less than after collision", "Equals total momentum after collision", "Is greater than after collision"],
    correctOptionIndex: 1
  },
  {
    id: 80,
    text: "The momentum conservation equation is:",
    options: ["m₁V₁' + m₂V₂' = m₁V₁'' + m₂V₂''", "m₁V₁' = m₂V₂''", "m₁V₁' - m₂V₂' = 0"],
    correctOptionIndex: 0
  },
  {
    id: 81,
    text: "A girl (20 kg) and man (80 kg) push apart on ice. Girl recoils at 80 mm/sec. Man's velocity is:",
    options: ["20 mm/sec in same direction", "20 mm/sec in opposite direction", "80 mm/sec in opposite direction"],
    correctOptionIndex: 1
  },
  {
    id: 82,
    text: "The negative sign in the man's recoil velocity indicates:",
    options: ["Slower speed", "Opposite direction", "Error in calculation"],
    correctOptionIndex: 1
  },
  {
    id: 83,
    text: "Inelastic collisions occur when:",
    options: ["Objects bounce apart perfectly", "Objects stick together after collision", "No energy is lost"],
    correctOptionIndex: 1
  },
  {
    id: 84,
    text: "Perfectly inelastic collision equation is:",
    options: ["m₁V₁' + m₂V₂' = (m₁ + m₂)V''", "m₁V₁' = m₂V₂''", "m₁V₁' + m₂V₂' = 0"],
    correctOptionIndex: 0
  },
  {
    id: 85,
    text: "Truck (1,550 kg east at 60 m/s) and car (1,250 kg west at 90 m/s) collide and stick. Velocity after is:",
    options: ["6.96 m/s east", "6.96 m/s west", "Zero"],
    correctOptionIndex: 1
  },
  {
    id: 86,
    text: "Police use conservation of momentum to determine:",
    options: ["Vehicle colour", "Speed of vehicles in head-on collisions", "Driver identity"],
    correctOptionIndex: 1
  },
  {
    id: 87,
    text: "Elastic collisions occur between objects that:",
    options: ["Deform greatly", "Deform very little", "Always stick together"],
    correctOptionIndex: 1
  },
  {
    id: 88,
    text: "In elastic collisions, what two quantities are conserved?",
    options: ["Momentum and velocity", "Momentum and kinetic energy", "Kinetic energy and potential energy"],
    correctOptionIndex: 1
  },
  {
    id: 89,
    text: "In elastic collisions, the relative velocity equation is:",
    options: ["V₂' - V₁' = V₂'' - V₁''", "V₂' + V₁' = V₂'' + V₁''", "V₂' = V₁''"],
    correctOptionIndex: 0
  },
  {
    id: 90,
    text: "2 kg ball moving east at 3 m/s collides elastically with 3 kg ball moving west at 4 m/s. After collision, 2 kg ball moves:",
    options: ["East at 5.4 m/s", "West at 5.4 m/s", "East at 1.6 m/s"],
    correctOptionIndex: 1
  },
  {
    id: 91,
    text: "After the same collision, the 3 kg ball moves:",
    options: ["East at 1.6 m/s", "West at 1.6 m/s", "East at 5.4 m/s"],
    correctOptionIndex: 0
  },
  {
    id: 92,
    text: "Impulse is defined as:",
    options: ["Force × distance", "Force × time", "Mass × acceleration"],
    correctOptionIndex: 1
  },
  {
    id: 93,
    text: "The impulse-momentum equation is:",
    options: ["Ft = mΔv", "Ft = ma", "F = mΔv/t"],
    correctOptionIndex: 0
  },
  {
    id: 94,
    text: "Impulse equals:",
    options: ["Change in kinetic energy", "Change in momentum", "Change in velocity"],
    correctOptionIndex: 1
  },
  {
    id: 95,
    text: "A force of 10,000 lbs exerted for 3 sec on 90,000 slugs gives impulse of:",
    options: ["30,000 lb·s", "90,000 lb·s", "10,000 lb·s"],
    correctOptionIndex: 0
  },
  {
    id: 96,
    text: "The change in momentum from this impulse is:",
    options: ["10,000 lb·s", "30,000 lb·s", "90,000 lb·s"],
    correctOptionIndex: 1
  },
  {
    id: 97,
    text: "The change in velocity from this impulse is:",
    options: ["0.333 ft/s", "3.33 ft/s", "33.3 ft/s"],
    correctOptionIndex: 0
  },
  {
    id: 98,
    text: "In a collision, an object experiences an impulse that:",
    options: ["Destroys momentum", "Changes the object's momentum", "Creates new momentum"],
    correctOptionIndex: 1
  },
  {
    id: 99,
    text: "Billiard balls are an example of:",
    options: ["Inelastic collision", "Elastic collision", "Perfectly inelastic collision"],
    correctOptionIndex: 1
  },
  {
    id: 100,
    text: "Balls of putty colliding are an example of:",
    options: ["Elastic collision", "Perfectly inelastic collision", "Partially elastic collision"],
    correctOptionIndex: 1
  },
  {
    id: 101,
    text: "A gyroscope is a spinning wheel or disc in which:",
    options: ["The axis is fixed", "The axis of rotation is free to assume any orientation", "The wheel does not spin"],
    correctOptionIndex: 1
  },
  {
    id: 102,
    text: "Gyroscopes are useful for:",
    options: ["Measuring temperature", "Measuring or maintaining orientation", "Generating power"],
    correctOptionIndex: 1
  },
  {
    id: 103,
    text: "A gyroscope is mounted in:",
    options: ["Springs", "Gimbals", "Bearings"],
    correctOptionIndex: 1
  },
  {
    id: 104,
    text: "Gimbals are:",
    options: ["Spinning wheels", "Pivoted supports that allow rotation about a single axis", "Types of motors"],
    correctOptionIndex: 1
  },
  {
    id: 105,
    text: "A gyroscope with two gimbals has how many degrees of rotational freedom for the inner gimbal?",
    options: ["One", "Two", "Three"],
    correctOptionIndex: 1
  },
  {
    id: 106,
    text: "The spinning wheel's axle defines the:",
    options: ["Output axis", "Spin axis", "Input axis"],
    correctOptionIndex: 1
  },
  {
    id: 107,
    text: "The rotor possesses how many degrees of rotational freedom?",
    options: ["One", "Two", "Three"],
    correctOptionIndex: 2
  },
  {
    id: 108,
    text: "The behaviour of a gyroscope can be understood by considering:",
    options: ["A car wheel", "The front wheel of a bicycle", "A door hinge"],
    correctOptionIndex: 1
  },
  {
    id: 109,
    text: "Rigidity in a gyroscope is also called:",
    options: ["Precession", "Inertia", "Drift"],
    correctOptionIndex: 1
  },
  {
    id: 110,
    text: "Rigidity depends on:",
    options: ["Rotor mass, RPM, and distance of mass to axis", "Only RPM", "Only mass"],
    correctOptionIndex: 0
  },
  {
    id: 111,
    text: "Precession occurs when:",
    options: ["The gyro stops spinning", "A force is applied to the spinning rim, and the rotor tilts 90° further in direction of motion", "The gyro drifts"],
    correctOptionIndex: 1
  },
  {
    id: 112,
    text: "The amount of precession depends on:",
    options: ["Force strength and direction, inertia, diameter, and RPM", "Only force strength", "Only RPM"],
    correctOptionIndex: 0
  },
  {
    id: 113,
    text: "Rate of precession in a free gyro is:",
    options: ["Inversely proportional to force", "Directly proportional to force and inversely proportional to RPM and moment of inertia", "Independent of force"],
    correctOptionIndex: 1
  },
  {
    id: 114,
    text: "A rate gyro can move in:",
    options: ["All three planes", "One plane (not the plane of rotation)", "No planes"],
    correctOptionIndex: 1
  },
  {
    id: 115,
    text: "A rate gyro is used in:",
    options: ["Attitude indicator", "Turn coordinator or turn and slip indicator", "Heading indicator"],
    correctOptionIndex: 1
  },
  {
    id: 116,
    text: "A tied gyro moves in all three planes but is kept in one plane by:",
    options: ["Gravity", "Outside force, usually air jets", "Springs"],
    correctOptionIndex: 1
  },
  {
    id: 117,
    text: "A tied gyro is used in:",
    options: ["Attitude indicator", "Direction indicator (gyrocompass)", "Turn indicator"],
    correctOptionIndex: 1
  },
  {
    id: 118,
    text: "An earth gyro is held in one plane by:",
    options: ["Air jets", "Earth's gravity", "Magnetic field"],
    correctOptionIndex: 1
  },
  {
    id: 119,
    text: "An earth gyro is used in:",
    options: ["Attitude indicator", "Heading indicator", "Turn coordinator"],
    correctOptionIndex: 0
  },
  {
    id: 120,
    text: "A space gyro:",
    options: ["Has no freedom", "Moves in all three planes and is stabilised to a fixed point in space", "Only moves in one plane"],
    correctOptionIndex: 1
  },
  {
    id: 121,
    text: "Apparent drift (wander) is caused by:",
    options: ["Friction", "Earth's rotation", "Precession"],
    correctOptionIndex: 1
  },
  {
    id: 122,
    text: "A perfect gyro with spin axis parallel to Earth's spin axis at the North Pole will:",
    options: ["Drift significantly", "Maintain that position indefinitely", "Precess rapidly"],
    correctOptionIndex: 1
  },
  {
    id: 123,
    text: "Gyro C on the equator with spin axis parallel to Earth's surface will appear to:",
    options: ["Remain unchanged", "Gradually tilt over 6 hours until perpendicular", "Stop spinning"],
    correctOptionIndex: 1
  },
  {
    id: 124,
    text: "Transport drift occurs when:",
    options: ["The gyro is stationary", "An aircraft circles the Earth", "The gyro is damaged"],
    correctOptionIndex: 1
  },
  {
    id: 125,
    text: "In an attitude indicator, the gyro is kept in the horizontal plane through:",
    options: ["Only rigidity", "Rigidity and a pendulous unit", "Magnetic forces"],
    correctOptionIndex: 1
  },
  {
    id: 126,
    text: "The attitude indicator uses what type of gyro?",
    options: ["Rate gyro", "Earth gyro (vertical gyro)", "Tied gyro"],
    correctOptionIndex: 1
  },
  {
    id: 127,
    text: "In the attitude indicator, roll indications are shown:",
    options: ["At the bottom", "At the top", "On the sides"],
    correctOptionIndex: 1
  },
  {
    id: 128,
    text: "The heading indicator uses what type of gyro?",
    options: ["Vertical gyro", "Horizontal gyro (tied gyro)", "Rate gyro"],
    correctOptionIndex: 1
  },
  {
    id: 129,
    text: "In the heading indicator, the rotor axis is mounted:",
    options: ["Vertically", "Horizontally", "At 45°"],
    correctOptionIndex: 1
  },
  {
    id: 130,
    text: "A 'rate one' turn is:",
    options: ["1° per second", "3° per second", "10° per second"],
    correctOptionIndex: 1
  },
  {
    id: 131,
    text: "A rate one turn completes 360° in:",
    options: ["1 minute", "2 minutes", "3 minutes"],
    correctOptionIndex: 1
  },
  {
    id: 132,
    text: "Turn indicators use what type of gyro?",
    options: ["Earth gyro", "Rate gyro", "Space gyro"],
    correctOptionIndex: 1
  },
  {
    id: 133,
    text: "The turn and slip indicator has a:",
    options: ["Aircraft picture", "Vertical needle and slip ball", "Horizon bar"],
    correctOptionIndex: 1
  },
  {
    id: 134,
    text: "The turn coordinator has a:",
    options: ["Vertical needle", "Aircraft picture", "Heading card"],
    correctOptionIndex: 1
  },
  {
    id: 135,
    text: "The turn coordinator can indicate:",
    options: ["Only rate of turn", "Rate of turn and rate of roll", "Only bank angle"],
    correctOptionIndex: 1
  },
  {
    id: 136,
    text: "Friction always results in:",
    options: ["Useful work", "Wasted work as heat", "Increased efficiency"],
    correctOptionIndex: 1
  },
  {
    id: 137,
    text: "The normal force is:",
    options: ["The weight of the object", "The upward push of the surface on the object", "The force of friction"],
    correctOptionIndex: 1
  },
  {
    id: 138,
    text: "On a horizontal surface, the normal force equals:",
    options: ["Half the weight", "The weight", "Twice the weight"],
    correctOptionIndex: 1
  },
  {
    id: 139,
    text: "On an inclined plane, the normal force is:",
    options: ["Greater than weight", "Less than weight", "Equal to weight"],
    correctOptionIndex: 1
  },
  {
    id: 140,
    text: "The three types of friction are:",
    options: ["Air, water, ground", "Static, sliding, rolling", "Starting, stopping, moving"],
    correctOptionIndex: 1
  },
  {
    id: 141,
    text: "Static friction occurs between:",
    options: ["Moving objects", "Objects not moving relative to each other", "Objects in a vacuum"],
    correctOptionIndex: 1
  },
  {
    id: 142,
    text: "The coefficient of static friction is usually:",
    options: ["Lower than kinetic friction", "Higher than kinetic friction", "Equal to kinetic friction"],
    correctOptionIndex: 1
  },
  {
    id: 143,
    text: "Sliding friction is also called:",
    options: ["Static friction", "Kinetic or dynamic friction", "Rolling friction"],
    correctOptionIndex: 1
  },
  {
    id: 144,
    text: "The coefficient of sliding friction is typically denoted as:",
    options: ["μs", "μk", "μr"],
    correctOptionIndex: 1
  },
  {
    id: 145,
    text: "Rolling friction is also called:",
    options: ["Sliding resistance", "Rolling resistance", "Static resistance"],
    correctOptionIndex: 1
  },
  {
    id: 146,
    text: "Rolling friction is caused mainly by:",
    options: ["Surface roughness", "Non-elastic effects", "Air resistance"],
    correctOptionIndex: 1
  },
  {
    id: 147,
    text: "The friction equation is:",
    options: ["F = μ/N", "F = μN", "F = N/μ"],
    correctOptionIndex: 1
  },
  {
    id: 148,
    text: "The coefficient of friction μ is:",
    options: ["Always greater than 1", "Never greater than 1", "Always exactly 1"],
    correctOptionIndex: 1
  },
  {
    id: 149,
    text: "Force needed to start an object sliding is:",
    options: ["Less than force to keep it sliding", "Greater than force to keep it sliding", "Equal to force to keep it sliding"],
    correctOptionIndex: 1
  },
  {
    id: 150,
    text: "Rolling friction coefficients are:",
    options: ["Very large", "Very small", "Equal to sliding friction"],
    correctOptionIndex: 1
  },
  {
    id: 151,
    text: "Rubber tyres on dry concrete road, coefficient of rolling friction is approximately:",
    options: ["0.02", "0.2", "1.0"],
    correctOptionIndex: 0
  },
  {
    id: 152,
    text: "Roller bearings have coefficients of rolling friction between:",
    options: ["0.1 and 0.5", "0.001 and 0.003", "0.01 and 0.03"],
    correctOptionIndex: 1
  },
  {
    id: 153,
    text: "Steel object weighing 100 lbs on steel surface. Force to start sliding:",
    options: ["9 lbs", "15 lbs", "100 lbs"],
    correctOptionIndex: 1
  },
  {
    id: 154,
    text: "Force to keep same steel object sliding at constant speed:",
    options: ["9 lbs", "15 lbs", "100 lbs"],
    correctOptionIndex: 0
  },
  {
    id: 155,
    text: "Coefficient of friction for rubber on wet concrete is:",
    options: ["1.0", "0.7", "0.5"],
    correctOptionIndex: 1
  },
  {
    id: 156,
    text: "Coefficient of friction for rubber on dry concrete is:",
    options: ["1.0", "0.7", "0.5"],
    correctOptionIndex: 0
  },
  {
    id: 157,
    text: "Steel on ice (sliding) coefficient is:",
    options: ["0.15", "0.09", "0.01"],
    correctOptionIndex: 2
  },
  {
    id: 158,
    text: "Leather on wood (start) coefficient is:",
    options: ["0.4", "0.5", "0.6"],
    correctOptionIndex: 1
  },
  {
    id: 159,
    text: "Oak on oak (slide) coefficient is:",
    options: ["0.5", "0.4", "0.3"],
    correctOptionIndex: 1
  },
  {
    id: 160,
    text: "Friction increases as:",
    options: ["The force pushing surfaces together decreases", "The force pushing surfaces together increases", "Temperature decreases"],
    correctOptionIndex: 1
  }
];
