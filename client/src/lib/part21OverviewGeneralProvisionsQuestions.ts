import { Question } from "../../../shared/schema";

export const part21OverviewGeneralProvisionsQuestions: Question[] = [
  {
    id: 1,
    text: "What is the primary purpose of EASA Part-21?",
    options: [
      "To regulate air operations and flight crew licensing.",
      "To govern the certification and production of aircraft and aviation products.",
      "To establish standards for aerodrome design."
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "Part-21 is Annex I of which Regulation?",
    options: [
      "Regulation (EU) No 965/2012 (Air Operations)",
      "Regulation (EU) No 1321/2014 (Continuing Airworthiness)",
      "Regulation (EU) No 748/2012 (Initial Airworthiness)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 3,
    text: "Which of the following is within the scope of Part-21?",
    options: [
      "The issue of type certificates and supplemental type certificates.",
      "The licensing of maintenance engineers.",
      "The development of an aircraft maintenance programme."
    ],
    correctOptionIndex: 0
  },
  {
    id: 4,
    text: "According to Part-21.A.3A, who must establish a system for collecting and investigating occurrence reports?",
    options: [
      "All licensed aircraft maintenance engineers.",
      "Any natural or legal person who holds a type certificate, production approval, or other relevant approval.",
      "Only commercial air transport operators."
    ],
    correctOptionIndex: 1
  },
  {
    id: 5,
    text: "Within what timeframe must a report of an occurrence that may lead to an unsafe condition be dispatched?",
    options: [
      "24 hours.",
      "72 hours.",
      "7 days."
    ],
    correctOptionIndex: 1
  },
  {
    id: 6,
    text: "What is an Airworthiness Directive (AD)?",
    options: [
      "A manufacturer's recommendation for product improvement.",
      "A notification mandating actions to correct a known safety deficiency on an aircraft.",
      "A suggestion for alternative maintenance practices."
    ],
    correctOptionIndex: 1
  },
  {
    id: 7,
    text: "When does the EASA issue an Airworthiness Directive?",
    options: [
      "When a manufacturer releases a new service bulletin.",
      "When an unsafe condition is determined to exist and is likely to occur in other aircraft.",
      "When an airline requests a change to a maintenance schedule."
    ],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "If a certified aircraft has outstanding ADs that have not been complied with, it is considered:",
    options: [
      "To be in a ferry flight condition.",
      "Not airworthy.",
      "To be in a maintenance delay period."
    ],
    correctOptionIndex: 1
  },
  {
    id: 9,
    text: "ADs of an emergency nature require:",
    options: [
      "Compliance within a specified period, usually 30 days.",
      "Immediate compliance before further flight.",
      "Compliance at the next scheduled maintenance check."
    ],
    correctOptionIndex: 1
  },
  {
    id: 10,
    text: "Which entity proposes the corrective action when an AD is issued by the EASA?",
    options: [
      "The aircraft owner.",
      "The operator's CAMO.",
      "The holder of the type certificate, supplemental type certificate, or major repair design approval."
    ],
    correctOptionIndex: 2
  },
  {
    id: 11,
    text: "According to Part-21.A.6, what must the holder of a type certificate produce, maintain, and update?",
    options: [
      "A marketing brochure for the aircraft.",
      "Master copies of all manuals required for the product's continued airworthiness.",
      "A list of all aircraft operators."
    ],
    correctOptionIndex: 1
  },
  {
    id: 12,
    text: "When must the holder of a type certificate supply a set of Instructions for Continued Airworthiness to an aircraft owner?",
    options: [
      "Within 30 days of the owner's request.",
      "Upon the aircraft's delivery or the issue of the first C of A, whichever occurs later.",
      "Only when the aircraft is sold to a new owner."
    ],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "Manuals required for continued airworthiness include:",
    options: [
      "The in-flight entertainment guide.",
      "The Aircraft Maintenance Manual (AMM) and Wiring Diagram Manual (WDM).",
      "The passenger safety briefing card."
    ],
    correctOptionIndex: 1
  },
  {
    id: 14,
    text: "What does a Certificate of Airworthiness (C of A) attest?",
    options: [
      "That the pilot is qualified to fly the aircraft.",
      "That the aircraft conforms to its type design and is in a condition for safe operation.",
      "That the aircraft's maintenance program is approved."
    ],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "A Certificate of Airworthiness is issued for what duration?",
    options: [
      "One year.",
      "Five years.",
      "An unlimited period, subject to conditions."
    ],
    correctOptionIndex: 2
  },
  {
    id: 16,
    text: "For a used aircraft imported from a non-EASA member state, what document is required for a C of A application?",
    options: [
      "A statement from the exporting authority reflecting the airworthiness status.",
      "A letter from the previous owner.",
      "The original sales receipt."
    ],
    correctOptionIndex: 0
  },
  {
    id: 17,
    text: "A C of A remains valid subject to which condition?",
    options: [
      "The aircraft owner remaining the same.",
      "The aircraft continuing to comply with the applicable type design and continuing airworthiness requirements.",
      "The aircraft being flown at least once per year."
    ],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "Upon surrender or revocation, the C of A must be returned to:",
    options: [
      "The aircraft manufacturer.",
      "The competent authority of the member state of registry.",
      "The last maintenance organisation."
    ],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "A noise certificate is issued for what duration?",
    options: [
      "One year.",
      "Five years.",
      "An unlimited period, subject to conditions."
    ],
    correctOptionIndex: 2
  },
  {
    id: 20,
    text: "When ownership of an aircraft changes and it remains on the same register, the noise certificate is:",
    options: [
      "Invalid and a new one must be applied for.",
      "Transferred together with the aircraft.",
      "Returned to the authority for re-issuance."
    ],
    correctOptionIndex: 1
  },
  {
    id: 21,
    text: "A 'repair' is defined as:",
    options: [
      "Replacing a part with a new one from stock.",
      "Eliminating damage or restoration to an airworthy condition following initial release into service.",
      "Any maintenance task performed on an aircraft."
    ],
    correctOptionIndex: 1
  },
  {
    id: 22,
    text: "Eliminating damage by simply replacing a part without design activity is considered:",
    options: [
      "A major repair requiring Part-21 approval.",
      "A maintenance task and does not require Part-21 approval.",
      "A standard repair."
    ],
    correctOptionIndex: 1
  },
  {
    id: 23,
    text: "Who must design repairs that require design input?",
    options: [
      "Any licensed aircraft engineer.",
      "An approved design organisation (DOA) under Part-21 Subpart J.",
      "The aircraft owner."
    ],
    correctOptionIndex: 1
  },
  {
    id: 24,
    text: "A repair is classified as 'major' or 'minor' based on:",
    options: [
      "The cost of the repair.",
      "The time it takes to perform the repair.",
      "The criteria for a change in the type design."
    ],
    correctOptionIndex: 2
  },
  {
    id: 25,
    text: "'Standard repairs' as defined in CS-STAN concern aeroplanes of what maximum take-off mass or less?",
    options: [
      "2,730 kg.",
      "5,700 kg.",
      "12,500 kg."
    ],
    correctOptionIndex: 1
  },
  {
    id: 26,
    text: "Who must carry out standard repairs?",
    options: [
      "The pilot-owner.",
      "An approved maintenance organisation (Part-CAO or Part-145).",
      "Any certifying staff."
    ],
    correctOptionIndex: 1
  },
  {
    id: 27,
    text: "Parts and appliances used for a repair can be manufactured by:",
    options: [
      "An approved production organisation under Part-21 Subpart G.",
      "The aircraft owner's workshop.",
      "Any local machine shop."
    ],
    correctOptionIndex: 0
  },
  {
    id: 28,
    text: "What is the primary purpose of EASA Part-M?",
    options: [
      "To govern the initial certification of new aircraft.",
      "To establish rules for the continuing airworthiness of aircraft.",
      "To regulate the licensing of pilots."
    ],
    correctOptionIndex: 1
  },
  {
    id: 29,
    text: "'Continuing airworthiness' means all processes ensuring that, at any time, the aircraft:",
    options: [
      "Has a valid Certificate of Registration.",
      "Complies with airworthiness requirements and is in a condition for safe operation.",
      "Has been inspected within the last 30 days."
    ],
    correctOptionIndex: 1
  },
  {
    id: 30,
    text: "Part-M applies to:",
    options: [
      "Only large aircraft used in commercial operations.",
      "Only non-commercial aircraft.",
      "All aircraft, regardless of size or operation."
    ],
    correctOptionIndex: 2
  },
  {
    id: 31,
    text: "According to Part-M.A.201, who is primarily responsible for the continuing airworthiness of an aircraft?",
    options: [
      "The pilot-in-command.",
      "The owner/lessee.",
      "The maintenance organisation."
    ],
    correctOptionIndex: 1
  },
  {
    id: 32,
    text: "The responsibility for the satisfactory accomplishment of the pre-flight inspection lies with:",
    options: [
      "The CAMO.",
      "The pilot-in-command or the operator (for CAT).",
      "The Part-145 organisation."
    ],
    correctOptionIndex: 1
  },
  {
    id: 33,
    text: "For aircraft used by licensed air carriers (CAT), the operator must be approved as:",
    options: [
      "A Part-145 organisation.",
      "A Continuing Airworthiness Management Organisation (CAMO).",
      "A Design Organisation (DOA)."
    ],
    correctOptionIndex: 1
  },
  {
    id: 34,
    text: "An owner of a complex motor-powered aircraft not used in CAT must ensure that continuing airworthiness tasks are performed by:",
    options: [
      "Themselves, without any contract.",
      "A CAMO approved under Part-CAMO or Part-M Subpart G.",
      "Any licensed aircraft engineer."
    ],
    correctOptionIndex: 1
  },
  {
    id: 35,
    text: "According to Part-M.A.301, continuing airworthiness tasks include the accomplishment of:",
    options: [
      "All marketing activities for the aircraft.",
      "Pre-flight inspections, defect rectification, and all maintenance per the approved AMP.",
      "The financial audit of the operator."
    ],
    correctOptionIndex: 1
  },
  {
    id: 36,
    text: "What document outlines the necessary maintenance tasks to ensure aircraft airworthiness?",
    options: [
      "The Certificate of Airworthiness.",
      "The Aircraft Maintenance Programme (AMP).",
      "The Air Operator Certificate (AOC)."
    ],
    correctOptionIndex: 1
  },
  {
    id: 37,
    text: "The aircraft maintenance programme (AMP) must be:",
    options: [
      "Approved by the competent authority.",
      "Reviewed every 10 years.",
      "The same for all aircraft of a given type."
    ],
    correctOptionIndex: 0
  },
  {
    id: 38,
    text: "The maintenance programme must establish compliance with:",
    options: [
      "The operator's financial targets.",
      "Instructions for continued airworthiness issued by the Type Certificate holder.",
      "The flight crew's preferences."
    ],
    correctOptionIndex: 1
  },
  {
    id: 39,
    text: "If a maintenance programme is based on MSG logic, it must also include a:",
    options: [
      "Flight test schedule.",
      "Reliability programme.",
      "Fuel efficiency plan."
    ],
    correctOptionIndex: 1
  },
  {
    id: 40,
    text: "After maintenance, the Certificate of Release to Service (CRS) must be entered in the aircraft's continuing airworthiness records within:",
    options: [
      "7 days.",
      "30 days.",
      "90 days."
    ],
    correctOptionIndex: 1
  },
  {
    id: 41,
    text: "The aircraft continuing airworthiness records consist of, as appropriate:",
    options: [
      "The pilot's logbook.",
      "An aircraft logbook, engine logbook(s), and propeller logbook(s).",
      "The passenger manifest."
    ],
    correctOptionIndex: 1
  },
  {
    id: 42,
    text: "Detailed maintenance records for a life-limited component must be kept for at least how long after the component is permanently withdrawn from service?",
    options: [
      "12 months.",
      "24 months.",
      "36 months."
    ],
    correctOptionIndex: 1
  },
  {
    id: 43,
    text: "For commercial air transport, an operator must use an aircraft technical log system. How long must the technical log be retained after the last entry date?",
    options: [
      "12 months.",
      "24 months.",
      "36 months."
    ],
    correctOptionIndex: 2
  },
  {
    id: 44,
    text: "The person or organisation maintaining an aircraft must have access to and use only:",
    options: [
      "Their own past experience.",
      "Applicable current maintenance data.",
      "Information from the internet."
    ],
    correctOptionIndex: 1
  },
  {
    id: 45,
    text: "Before maintaining an aircraft, applicable maintenance data must be:",
    options: [
      "Archived and stored away.",
      "Current and readily available.",
      "Translated into the local language."
    ],
    correctOptionIndex: 1
  },
  {
    id: 46,
    text: "All maintenance must be performed using:",
    options: [
      "Any tools available in the hangar.",
      "The tools, equipment, and material specified in Part-M.",
      "The cheapest tools available."
    ],
    correctOptionIndex: 1
  },
  {
    id: 47,
    text: "An independent inspection is required after any:",
    options: [
      "Routine service check.",
      "Flight safety-sensitive maintenance task.",
      "Cleaning task."
    ],
    correctOptionIndex: 1
  },
  {
    id: 48,
    text: "Any aircraft defect that seriously hazards flight safety must be:",
    options: [
      "Recorded in the technical log for future rectification.",
      "Rectified before further flight.",
      "Reported to the manufacturer only."
    ],
    correctOptionIndex: 1
  },
  {
    id: 49,
    text: "Subpart E of Part-M establishes standards for:",
    options: [
      "Aircraft cleaning procedures.",
      "Components.",
      "Flight crew training."
    ],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "A Certificate of Release to Service (CRS) must be issued:",
    options: [
      "Only after a C-check.",
      "Before a flight after any maintenance.",
      "At the end of each calendar year."
    ],
    correctOptionIndex: 1
  },
  {
    id: 51,
    text: "For a privately-operated aircraft of simple design (MTOM < 2,730 kg), who may issue the CRS after limited pilot-owner maintenance?",
    options: [
      "Any licensed engineer.",
      "The pilot-owner.",
      "The CAMO manager."
    ],
    correctOptionIndex: 1
  },
  {
    id: 52,
    text: "The authorised release certificate identified as EASA Form 1 constitutes:",
    options: [
      "The aircraft's Certificate of Airworthiness.",
      "The aircraft component certificate of release to service.",
      "The pilot's license."
    ],
    correctOptionIndex: 1
  },
  {
    id: 53,
    text: "A CRS must not be issued in the case of any known non-compliance that:",
    options: [
      "Costs more than 1000 EUR to fix.",
      "Seriously hazards flight safety.",
      "Requires a specialized tool."
    ],
    correctOptionIndex: 1
  },
  {
    id: 54,
    text: "For a Certificate of Airworthiness (C of A) to be valid, what other document must be attached?",
    options: [
      "The Certificate of Registration.",
      "A current Airworthiness Review Certificate (ARC).",
      "The Noise Certificate."
    ],
    correctOptionIndex: 1
  },
  {
    id: 55,
    text: "An airworthiness review consists of:",
    options: [
      "A review of the aircraft records and a physical survey of the aircraft.",
      "Only a review of the maintenance logbooks.",
      "Only an external walk-around."
    ],
    correctOptionIndex: 0
  },
  {
    id: 56,
    text: "Who can issue an Airworthiness Review Certificate (ARC)?",
    options: [
      "Any licensed aircraft engineer.",
      "An approved CAMO with the appropriate privilege.",
      "The aircraft owner."
    ],
    correctOptionIndex: 1
  },
  {
    id: 57,
    text: "How long may an ARC be renewed without a further physical survey, provided the aircraft remains under the continuous control of a CAMO?",
    options: [
      "Once for an additional year.",
      "Twice at intervals of one year.",
      "Indefinitely."
    ],
    correctOptionIndex: 1
  },
  {
    id: 58,
    text: "An ARC is invalidated if:",
    options: [
      "The aircraft is flown.",
      "The aircraft is not on the register of an EASA member state.",
      "The owner changes the oil."
    ],
    correctOptionIndex: 1
  },
  {
    id: 59,
    text: "The C of A is valid indefinitely, providing:",
    options: [
      "It is stamped every year.",
      "A valid ARC is attached to it.",
      "The aircraft is hangared."
    ],
    correctOptionIndex: 1
  },
  {
    id: 60,
    text: "Part-ML applies to which category of aircraft?",
    options: [
      "All complex motor-powered aircraft.",
      "Light aircraft, such as aeroplanes of 2,730 kg MTOM or less.",
      "All commercial air transport aircraft."
    ],
    correctOptionIndex: 1
  },
  {
    id: 61,
    text: "A key benefit of Part-ML is that it:",
    options: [
      "Requires all maintenance to be approved by the national authority.",
      "Simplifies maintenance rules and offers a less prescriptive approach for light aircraft.",
      "Increases the regulatory burden on general aviation."
    ],
    correctOptionIndex: 1
  },
  {
    id: 62,
    text: "Under Part-ML, the airworthiness review certificate (ARC) can be issued by:",
    options: [
      "Only the competent authority.",
      "The competent authority, an approved organisation, or an independent Part-66 engineer with appropriate authorisation.",
      "Any pilot."
    ],
    correctOptionIndex: 1
  },
  {
    id: 63,
    text: "Part-T applies to which type of aircraft?",
    options: [
      "Aircraft registered in an EASA member state.",
      "Aircraft registered in a third country and dry leased-in by an EU licensed air carrier.",
      "Aircraft used for non-commercial operations."
    ],
    correctOptionIndex: 1
  },
  {
    id: 64,
    text: "For a short-term lease (less than 7 months), Part-T focuses on demonstrating compliance with:",
    options: [
      "All EASA requirements.",
      "ICAO requirements.",
      "The lessor's requirements."
    ],
    correctOptionIndex: 1
  },
  {
    id: 65,
    text: "The CAMO responsible for a Part-T aircraft must be satisfied that:",
    options: [
      "The lease agreement is profitable.",
      "A maintenance organisation has properly carried out all required maintenance.",
      "The aircraft's paint scheme is approved."
    ],
    correctOptionIndex: 1
  },
  {
    id: 66,
    text: "Part-CAMO contains requirements for an organisation to:",
    options: [
      "Design new aircraft.",
      "Manage the continuing airworthiness of an aircraft.",
      "Provide pilot training."
    ],
    correctOptionIndex: 1
  },
  {
    id: 67,
    text: "Which organisations were required to transfer to Part-CAMO as of 24 September 2021?",
    options: [
      "Part-145 organisations.",
      "Part-M Subpart G approved organisations.",
      "Part-21 design organisations."
    ],
    correctOptionIndex: 1
  },
  {
    id: 68,
    text: "A key requirement for a Part-CAMO organisation is to have a:",
    options: [
      "Large marketing department.",
      "Safety Management System (SMS).",
      "Fleet of company cars."
    ],
    correctOptionIndex: 1
  },
  {
    id: 69,
    text: "The duties of a CAMO include:",
    options: [
      "Piloting the aircraft.",
      "Developing and controlling an approved maintenance programme.",
      "Manufacturing spare parts."
    ],
    correctOptionIndex: 1
  },
  {
    id: 70,
    text: "A privilege of a CAMO with appropriate approval is to:",
    options: [
      "Issue an Airworthiness Review Certificate (ARC).",
      "Fly the aircraft on test flights.",
      "Sell the aircraft."
    ],
    correctOptionIndex: 0
  },
  {
    id: 71,
    text: "The nominated post-holder responsible for continuing airworthiness in a CAT operator's CAMO:",
    options: [
      "Can be the same person as the Part-145 organisation's manager.",
      "Must have five years of relevant work experience.",
      "Does not need any aviation experience."
    ],
    correctOptionIndex: 1
  },
  {
    id: 72,
    text: "An A-check is typically performed:",
    options: [
      "Every 20-24 months.",
      "Every 500-800 flight hours.",
      "Every 5 years."
    ],
    correctOptionIndex: 1
  },
  {
    id: 73,
    text: "A C-check is typically performed:",
    options: [
      "Every 500-800 flight hours.",
      "Every 4-6 months.",
      "Every 20-24 months."
    ],
    correctOptionIndex: 2
  },
  {
    id: 74,
    text: "A D-check is also known as a:",
    options: [
      "Transit check.",
      "Heavy Maintenance Visit (HMV).",
      "Pre-flight inspection."
    ],
    correctOptionIndex: 1
  },
  {
    id: 75,
    text: "Which maintenance check is the most comprehensive and requires the aircraft to be largely taken apart?",
    options: [
      "A-check.",
      "B-check.",
      "D-check."
    ],
    correctOptionIndex: 2
  },
  {
    id: 76,
    text: "Pre-flight inspections are a continuing airworthiness task regulated under Part-M and are performed by:",
    options: [
      "Only a Part-145 organisation.",
      "The pilot, flight crew, or nominated person.",
      "A design organisation."
    ],
    correctOptionIndex: 1
  },
  {
    id: 77,
    text: "ADs may be divided into two categories:",
    options: [
      "Major and minor.",
      "Those of an emergency nature and those of a less urgent nature.",
      "Structural and avionic."
    ],
    correctOptionIndex: 1
  },
  {
    id: 78,
    text: "An Emergency Airworthiness Directive (EAD) is issued when:",
    options: [
      "A new service bulletin is released.",
      "An unsafe condition requires an owner's or operator's immediate action.",
      "An aircraft reaches a certain age."
    ],
    correctOptionIndex: 1
  },
  {
    id: 79,
    text: "An application for an Alternative Means of Compliance (AMoC) to an EASA AD must be supported by:",
    options: [
      "The aircraft owner's signature.",
      "The organisation responsible for the type design.",
      "The local flight school."
    ],
    correctOptionIndex: 1
  },
  {
    id: 80,
    text: "The EASA issues an AD when an unsafe condition is determined and that condition:",
    options: [
      "Is unique to a single aircraft.",
      "Is likely to exist or develop in other aircraft.",
      "Has been fixed by the manufacturer."
    ],
    correctOptionIndex: 1
  },
  {
    id: 81,
    text: "What is a Service Bulletin (SB)?",
    options: [
      "A mandatory government regulation.",
      "A notice from a manufacturer notifying of a product improvement.",
      "A document required for aircraft registration."
    ],
    correctOptionIndex: 1
  },
  {
    id: 82,
    text: "An Alert Service Bulletin (ASB) is issued on matters that:",
    options: [
      "Are of minor importance.",
      "Require the operator's urgent attention, generally affecting safety.",
      "Only concern cabin comfort."
    ],
    correctOptionIndex: 1
  },
  {
    id: 83,
    text: "A Service Letter (SL) is used to:",
    options: [
      "Mandate an immediate safety action.",
      "Communicate details of advisory action or other useful information.",
      "Replace the need for an Airworthiness Directive."
    ],
    correctOptionIndex: 1
  },
  {
    id: 84,
    text: "A Vendor Service Bulletin (VSB) is issued by:",
    options: [
      "The aircraft manufacturer.",
      "An equipment or component manufacturer.",
      "The airline operator."
    ],
    correctOptionIndex: 1
  },
  {
    id: 85,
    text: "If a service bulletin is not an alert or referenced in an AD, it is considered:",
    options: [
      "Mandatory.",
      "Optional.",
      "Illegal to incorporate."
    ],
    correctOptionIndex: 1
  },
  {
    id: 86,
    text: "The ATA 100 chapter system was developed to:",
    options: [
      "Increase the cost of manuals.",
      "Standardise all aircraft manufacturers' manuals into a straightforward format.",
      "Complicate the maintenance process."
    ],
    correctOptionIndex: 1
  },
  {
    id: 87,
    text: "What is the unique aspect of ATA chapter numbers?",
    options: [
      "They are different for every aircraft manufacturer.",
      "They are relevant to all aircraft, so a chapter number is the same for any type.",
      "They are based on the aircraft's registration number."
    ],
    correctOptionIndex: 1
  },
  {
    id: 88,
    text: "According to ATA 100, Chapter 24 covers which system?",
    options: [
      "Fuel.",
      "Electrical Power.",
      "Lights."
    ],
    correctOptionIndex: 1
  },
  {
    id: 89,
    text: "According to ATA 100, Chapter 32 covers which system?",
    options: [
      "Landing Gear.",
      "Hydraulic Power.",
      "Doors."
    ],
    correctOptionIndex: 0
  },
  {
    id: 90,
    text: "According to ATA 100, Chapter 52 covers which system?",
    options: [
      "Doors.",
      "Wings.",
      "Stabilisers."
    ],
    correctOptionIndex: 0
  },
  {
    id: 91,
    text: "According to ATA 100, Chapter 71 covers which system?",
    options: [
      "Power Plant.",
      "Engine Controls.",
      "Ignition."
    ],
    correctOptionIndex: 0
  },
  {
    id: 92,
    text: "The Illustrated Parts Catalogue (IPC) uses the ATA 100 coding system to provide:",
    options: [
      "Wiring diagrams.",
      "Structure and equipment breakdown diagrams with part numbers.",
      "Troubleshooting charts."
    ],
    correctOptionIndex: 1
  },
  {
    id: 93,
    text: "The Component Maintenance Manual (CMM) is used by an overhaul shop and typically includes a section for:",
    options: [
      "In-flight entertainment.",
      "Disassembly and assembly.",
      "Passenger seating."
    ],
    correctOptionIndex: 1
  },
  {
    id: 94,
    text: "The Structural Repair Manual (SRM) contains information on repairing damage to:",
    options: [
      "The engine.",
      "The airframe structure (fuselage, wings, etc.).",
      "The avionics."
    ],
    correctOptionIndex: 1
  },
  {
    id: 95,
    text: "A Temporary Revision (TR) to a manual is often printed on what colour paper?",
    options: [
      "White.",
      "Yellow.",
      "Pink."
    ],
    correctOptionIndex: 1
  },
  {
    id: 96,
    text: "An Alert revision for urgent safety information is often printed on what colour paper?",
    options: [
      "White.",
      "Yellow.",
      "Pink."
    ],
    correctOptionIndex: 2
  },
  {
    id: 97,
    text: "The 'hard time' (HT) maintenance process requires:",
    options: [
      "Periodic inspections to determine if a part can continue in service.",
      "A component to be removed from service after a specified age for overhaul.",
      "Continuous monitoring of performance data."
    ],
    correctOptionIndex: 1
  },
  {
    id: 98,
    text: "'On-condition' (OC) maintenance requires:",
    options: [
      "Overhaul at a fixed time.",
      "Periodic inspections against a physical standard to prevent failure.",
      "Allowing failures to occur and then fixing them."
    ],
    correctOptionIndex: 1
  },
  {
    id: 99,
    text: "'Condition monitoring' (CM) involves:",
    options: [
      "Regular, scheduled overhauls.",
      "Trend analysis of operating characteristics to detect deterioration.",
      "Daily visual inspections."
    ],
    correctOptionIndex: 1
  },
  {
    id: 100,
    text: "The MSG-3 process is:",
    options: [
      "A process for designing aircraft.",
      "A task-oriented decision logic for developing scheduled maintenance.",
      "A method for calculating aircraft weight and balance."
    ],
    correctOptionIndex: 1
  },
  {
    id: 101,
    text: "The Maintenance Review Board Report (MRBR) is used as a framework for:",
    options: [
      "The aircraft's original type certification.",
      "Each air carrier to develop its own maintenance program.",
      "The pilot's pre-flight checklist."
    ],
    correctOptionIndex: 1
  },
  {
    id: 102,
    text: "The Maintenance Planning Document (MPD) includes:",
    options: [
      "The aircraft's selling price.",
      "Mandatory scheduled maintenance requirements.",
      "The airline's financial plan."
    ],
    correctOptionIndex: 1
  },
  {
    id: 103,
    text: "An Operator-Approved Maintenance Programme (OAMP) must consider:",
    options: [
      "Only the MRBR.",
      "MRBR, MPD, ADs, and service bulletins.",
      "Only the manufacturer's service letters."
    ],
    correctOptionIndex: 1
  },
  {
    id: 104,
    text: "The document that contains detailed procedural instructions for maintenance tasks is the:",
    options: [
      "Certificate of Airworthiness.",
      "Aircraft Maintenance Manual (AMM).",
      "Minimum Equipment List (MEL)."
    ],
    correctOptionIndex: 1
  },
  {
    id: 105,
    text: "Scheduled maintenance packages for commercial aircraft are often designated using:",
    options: [
      "Numbers (1, 2, 3).",
      "Alphabetic letters (A, C, D).",
      "Colours (Red, Blue, Green)."
    ],
    correctOptionIndex: 1
  },
  {
    id: 106,
    text: "The phased check method of maintenance aims to:",
    options: [
      "Increase the length of each downtime period.",
      "Balance the maintenance workload and reduce each period of downtime.",
      "Combine all checks into one massive visit."
    ],
    correctOptionIndex: 1
  },
  {
    id: 107,
    text: "A Functional Check Flight (FCF) is conducted to:",
    options: [
      "Train new pilots.",
      "Check specific aircraft systems for correct airborne function after maintenance.",
      "Transport passengers for revenue."
    ],
    correctOptionIndex: 1
  },
  {
    id: 108,
    text: "According to Part-M M.A.301, maintenance check flights are identified as:",
    options: [
      "An optional operator procedure.",
      "A continuing airworthiness task.",
      "A replacement for a C-check."
    ],
    correctOptionIndex: 1
  },
  {
    id: 109,
    text: "Before any test flight, it is mandatory to provide a:",
    options: [
      "Certificate of Release to Service (CRS).",
      "Passenger manifest.",
      "Weather forecast."
    ],
    correctOptionIndex: 0
  },
  {
    id: 110,
    text: "The purpose of an airworthiness check flight is to ensure that flight characteristics:",
    options: [
      "Are better than the competition's.",
      "Do not differ significantly from the typical characteristics for the type.",
      "Exceed the maximum limits of the flight manual."
    ],
    correctOptionIndex: 1
  },
  {
    id: 111,
    text: "Check flight schedules are used to establish that handling characteristics are satisfactory and:",
    options: [
      "The in-flight movie is working.",
      "The climb performance equals or exceeds the scheduled data.",
      "The coffee is hot."
    ],
    correctOptionIndex: 1
  },
  {
    id: 112,
    text: "The holder of a type certificate must make available to known operators of the product, upon request:",
    options: [
      "The marketing plan.",
      "Appropriate descriptive data and accomplishment instructions for an AD.",
      "The list of customers."
    ],
    correctOptionIndex: 1
  },
  {
    id: 113,
    text: "For an aircraft to be considered airworthy, it must comply with:",
    options: [
      "The operator's financial goals.",
      "The applicable type design and all ADs.",
      "The flight crew's preferences."
    ],
    correctOptionIndex: 1
  },
  {
    id: 114,
    text: "The 'letter of transmittal' accompanying a manual revision details:",
    options: [
      "The new features of the aircraft.",
      "The revision number, issue date, and a list of pages removed and added.",
      "The price of the new manual."
    ],
    correctOptionIndex: 1
  },
  {
    id: 115,
    text: "MyBoeingFleet.com and airbusworld.com are examples of:",
    options: [
      "Social media platforms for pilots.",
      "Secure online systems for accessing technical data.",
      "Aircraft sales websites."
    ],
    correctOptionIndex: 1
  },
  {
    id: 116,
    text: "A microfilm reader with a printing facility allows a mechanic to print a page, but this copy:",
    options: [
      "Can be kept as a permanent personal reference.",
      "Must be used only once and not retained for later work.",
      "Is valid for one year."
    ],
    correctOptionIndex: 1
  },
  {
    id: 117,
    text: "The primary advantage of using a computer CD-ROM or online data for maintenance manuals is:",
    options: [
      "The high cost.",
      "The ability to store a huge amount of information that can be quickly updated.",
      "The need for large physical storage space."
    ],
    correctOptionIndex: 1
  },
  {
    id: 118,
    text: "The Alaska Airlines MD83 crash in January 2000 highlighted the risk of:",
    options: [
      "In-flight fires.",
      "Maintenance task extensions without proper system safety evaluation.",
      "Pilot error."
    ],
    correctOptionIndex: 1
  },
  {
    id: 119,
    text: "Unscheduled maintenance needs may arise from:",
    options: [
      "A planned A-check.",
      "A pilot report of a defect or an unforeseen event like a tail strike.",
      "The annual reliability report."
    ],
    correctOptionIndex: 1
  },
  {
    id: 120,
    text: "For modern aircraft, the distinction between 'letter checks' is less critical due to:",
    options: [
      "The increased cost of fuel.",
      "The implementation of MSG-3 task-oriented maintenance programmes.",
      "The reduction in the number of flights."
    ],
    correctOptionIndex: 1
  },
  {
    id: 121,
    text: "The block check packaging method produces:",
    options: [
      "A large number of small work packages.",
      "A small number of relatively large work packages.",
      "No work packages at all."
    ],
    correctOptionIndex: 1
  },
  {
    id: 122,
    text: "A major disadvantage of the block check method is:",
    options: [
      "Simplified planning.",
      "Longer maintenance ground time.",
      "More efficient sequencing of jobs."
    ],
    correctOptionIndex: 1
  },
  {
    id: 123,
    text: "A major advantage of the phased check method is:",
    options: [
      "Sporadic manpower requirements.",
      "Increased airplane availability due to reduced ground time.",
      "Longer periods of downtime."
    ],
    correctOptionIndex: 1
  },
  {
    id: 124,
    text: "Functional check flights are vital but involve a:",
    options: [
      "Lower-than-average risk of accidents.",
      "Higher-than-average risk of accidents or serious incidents.",
      "Guarantee of no risk."
    ],
    correctOptionIndex: 1
  },
  {
    id: 125,
    text: "Factors like minimum/maximum crew, weather, and speeds for a functional check flight should be:",
    options: [
      "Decided by the pilot on the day.",
      "Taken into account and specified.",
      "Ignored as they are not important."
    ],
    correctOptionIndex: 1
  },
  {
    id: 126,
    text: "The ICAO Airworthiness Manual states that airworthiness check flights should be conducted according to:",
    options: [
      "The pilot's experience.",
      "Schedules approved by the State's competent authority.",
      "The operator's financial situation."
    ],
    correctOptionIndex: 1
  },
  {
    id: 127,
    text: "Handling tests during a check flight include evaluating the effectiveness of:",
    options: [
      "The in-flight entertainment system.",
      "Primary controls and trimmers.",
      "The galley."
    ],
    correctOptionIndex: 1
  },
  {
    id: 128,
    text: "Performance tests during a check flight may include:",
    options: [
      "Measurement of fuel burn for marketing purposes.",
      "Measurement of low-speed warnings and stall speeds.",
      "Testing the passenger reading lights."
    ],
    correctOptionIndex: 1
  },
  {
    id: 129,
    text: "Tests to check equipment functioning may include the safe operation of:",
    options: [
      "The coffee maker.",
      "Emergency gear lowering and alternate braking systems.",
      "The cabin intercom."
    ],
    correctOptionIndex: 1
  },
  {
    id: 130,
    text: "The CAMO and Part-145 organisation must keep a copy of the flight test report:",
    options: [
      "For 30 days.",
      "On file.",
      "Until the next flight."
    ],
    correctOptionIndex: 1
  },
  {
    id: 131,
    text: "A reduced flight test may be requested after corrective maintenance on essential items whose effects:",
    options: [
      "Are clearly visible from the ground.",
      "Ground checks or measurements cannot forecast.",
      "Have no impact on flight."
    ],
    correctOptionIndex: 1
  },
  {
    id: 132,
    text: "The responsibility for incorporating additional requirements like service bulletins into the maintenance programme lies with:",
    options: [
      "The aircraft manufacturer.",
      "The operator (AOC holder).",
      "The EASA."
    ],
    correctOptionIndex: 1
  }
];
