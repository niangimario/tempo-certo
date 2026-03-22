import type { Question } from "@shared/schema";

export const basicComputerArchitectureQuestions: Question[] = [
  {
    id: 1,
    text: "What does computer architecture primarily deal with?",
    options: [
      "The software programming languages used",
      "The physical design of a computer system",
      "The network connections between computers"
    ],
    correctOptionIndex: 1
  },
  {
    id: 2,
    text: "Which of the following is NOT listed as a core component required for a computer system?",
    options: [
      "Central Processing Unit (CPU)",
      "Keyboard and mouse",
      "System bus"
    ],
    correctOptionIndex: 1
  },
  {
    id: 3,
    text: "What is the motherboard in a computer system?",
    options: [
      "The software that controls the hardware",
      "A relatively large printed circuit board that provides electronic channels (buses) between components",
      "The main power supply unit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 4,
    text: "What is the term for the physical components and circuits that comprise a computer system?",
    options: [
      "Software",
      "Firmware",
      "Hardware"
    ],
    correctOptionIndex: 2
  },
  {
    id: 5,
    text: "What is a program?",
    options: [
      "An organised collection of elementary computer operations called instructions",
      "The physical components of a computer",
      "A type of memory used for permanent storage"
    ],
    correctOptionIndex: 0
  },
  {
    id: 6,
    text: "What is the primary role of the Central Processing Unit (CPU)?",
    options: [
      "To store large amounts of data permanently",
      "To execute programs",
      "To provide power to the computer"
    ],
    correctOptionIndex: 1
  },
  {
    id: 7,
    text: "Which two units together are customarily called the CPU?",
    options: [
      "Control unit and memory unit",
      "Arithmetic Logic Unit (ALU) and control unit",
      "Input unit and output unit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 8,
    text: "What is a \"word\" in computer terminology?",
    options: [
      "A group of 4 bits",
      "A group of 8 bits",
      "The primary logical unit of information, the group of bits handled simultaneously by the computer"
    ],
    correctOptionIndex: 2
  },
  {
    id: 9,
    text: "What is a computer bus?",
    options: [
      "A type of memory chip",
      "A set of lines over which information is transferred from several sources to several destinations",
      "The main software operating system"
    ],
    correctOptionIndex: 1
  },
  {
    id: 10,
    text: "What is the function of the address bus?",
    options: [
      "To carry data and instructions between units",
      "To transmit an address from the microprocessor to the memory, input, or output unit",
      "To carry timing and status signals"
    ],
    correctOptionIndex: 1
  },
  {
    id: 11,
    text: "How many parallel lines does a typical address bus consist of?",
    options: [
      "8",
      "Up to 16",
      "32"
    ],
    correctOptionIndex: 1
  },
  {
    id: 12,
    text: "Is the address bus unidirectional or bidirectional?",
    options: [
      "Bidirectional",
      "Unidirectional",
      "It varies depending on the processor"
    ],
    correctOptionIndex: 1
  },
  {
    id: 13,
    text: "What is the function of the data bus?",
    options: [
      "To carry timing and status information",
      "To carry data and instructions from one unit to another",
      "To transmit memory addresses"
    ],
    correctOptionIndex: 1
  },
  {
    id: 14,
    text: "Is the data bus unidirectional or bidirectional?",
    options: [
      "Unidirectional",
      "Bidirectional",
      "It is only used for output"
    ],
    correctOptionIndex: 1
  },
  {
    id: 15,
    text: "What is the function of the control bus?",
    options: [
      "To carry data between the CPU and memory",
      "To transmit addresses",
      "To carry signals that maintain timing and status information"
    ],
    correctOptionIndex: 2
  },
  {
    id: 16,
    text: "What is the function of the input section of a computer?",
    options: [
      "To send processed data to the outside world",
      "To sense and communicate with the outside world, converting inputs into the proper format for the CPU",
      "To store data permanently"
    ],
    correctOptionIndex: 1
  },
  {
    id: 17,
    text: "What are the three types of inputs a computer may receive?",
    options: [
      "Digital, binary, and hexadecimal",
      "Analogue, digital, and discrete",
      "Serial, parallel, and USB"
    ],
    correctOptionIndex: 1
  },
  {
    id: 18,
    text: "What device is used to convert an analogue input into a form the computer can use?",
    options: [
      "Digital to Analogue Converter (DAC)",
      "Analogue to Digital Converter (ADC)",
      "A discrete input buffer"
    ],
    correctOptionIndex: 1
  },
  {
    id: 19,
    text: "What is a discrete input?",
    options: [
      "A continuously varying voltage",
      "A varying signal that changes in steps",
      "An on/off condition, such as the closure of a switch or relay"
    ],
    correctOptionIndex: 2
  },
  {
    id: 20,
    text: "What is the purpose of the output section of a computer?",
    options: [
      "To convert inputs into a digital format",
      "To provide an interface between the computer and the outside world, including signal conditioning",
      "To store programs and data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 21,
    text: "What is a microprocessor?",
    options: [
      "A single integrated circuit containing all the central processing unit elements",
      "A type of memory chip",
      "A peripheral device like a printer"
    ],
    correctOptionIndex: 0
  },
  {
    id: 22,
    text: "What is the function of the Arithmetic Logic Unit (ALU)?",
    options: [
      "To direct and synchronise the execution of instructions",
      "To temporarily store data",
      "To perform all arithmetic operations and logic capabilities"
    ],
    correctOptionIndex: 2
  },
  {
    id: 23,
    text: "What are registers in a CPU?",
    options: [
      "The main memory of the computer",
      "Temporary storage units within the CPU",
      "The buses that connect components"
    ],
    correctOptionIndex: 1
  },
  {
    id: 24,
    text: "What is the function of the control unit in a CPU?",
    options: [
      "To perform arithmetic calculations",
      "To coordinate the units so that events occur in the correct sequence and at the right time",
      "To store data permanently"
    ],
    correctOptionIndex: 1
  },
  {
    id: 25,
    text: "What is the smallest unit of data in computing?",
    options: [
      "A byte",
      "A nibble",
      "A bit"
    ],
    correctOptionIndex: 2
  },
  {
    id: 26,
    text: "A group of 8 bits is called a:",
    options: [
      "Nibble",
      "Byte",
      "Word"
    ],
    correctOptionIndex: 1
  },
  {
    id: 27,
    text: "How many bytes are in a kilobyte (kB) in computer jargon (binary system)?",
    options: [
      "1,000",
      "1,024",
      "1,048,576"
    ],
    correctOptionIndex: 1
  },
  {
    id: 28,
    text: "How many bytes are in a megabyte (MB) in computer jargon?",
    options: [
      "1,000,000",
      "1,024,000",
      "1,048,576"
    ],
    correctOptionIndex: 2
  },
  {
    id: 29,
    text: "Why is a kilobyte 1,024 bytes and not 1,000?",
    options: [
      "Because it is a historical accident",
      "Because computers use binary (base two) maths instead of a decimal (base ten) system",
      "Because it was a marketing decision"
    ],
    correctOptionIndex: 1
  },
  {
    id: 30,
    text: "In computer jargon, what is the correct order of units from smallest to largest?",
    options: [
      "Megabyte, Gigabyte, Kilobyte, Terabyte",
      "Kilobyte, Megabyte, Gigabyte, Terabyte",
      "Gigabyte, Megabyte, Kilobyte, Terabyte"
    ],
    correctOptionIndex: 1
  },
  {
    id: 31,
    text: "What is the difference between Mbps and MBps?",
    options: [
      "There is no difference; they are the same",
      "Mbps is megabits per second, MBps is megabytes per second (1 byte = 8 bits)",
      "Mbps is megabytes per second, MBps is megabits per second"
    ],
    correctOptionIndex: 1
  },
  {
    id: 32,
    text: "Why might a computer acknowledge a hard drive as having less capacity than advertised?",
    options: [
      "Because some space is used by the operating system",
      "Because the manufacturer uses a decimal system (1 GB = 1 billion bytes) and the computer uses a binary system (1 GB = 1,073,741,824 bytes)",
      "Because the hard drive is faulty"
    ],
    correctOptionIndex: 1
  },
  {
    id: 33,
    text: "What is the binary representation of the decimal number 65 in ASCII encoding?",
    options: [
      "01000001",
      "10000010",
      "00101010"
    ],
    correctOptionIndex: 0
  },
  {
    id: 34,
    text: "What does the ASCII code 01000001 represent?",
    options: [
      "The number 1",
      "The character 'A'",
      "The colour red in an image"
    ],
    correctOptionIndex: 1
  },
  {
    id: 35,
    text: "What is the purpose of computer memory?",
    options: [
      "To supply power to the CPU",
      "To store program instructions and data",
      "To provide input to the computer"
    ],
    correctOptionIndex: 1
  },
  {
    id: 36,
    text: "Which of the following is NOT one of the three main types of memory mentioned?",
    options: [
      "Semiconductor",
      "Magnetic",
      "Electrostatic"
    ],
    correctOptionIndex: 2
  },
  {
    id: 37,
    text: "What is volatile memory?",
    options: [
      "Memory that retains data when power is removed",
      "Memory that loses its data when power is removed",
      "Memory that can only be written to once"
    ],
    correctOptionIndex: 1
  },
  {
    id: 38,
    text: "What is non-volatile memory?",
    options: [
      "Memory that loses its data when power is removed",
      "Memory that retains data when power is removed",
      "Memory that is very fast"
    ],
    correctOptionIndex: 1
  },
  {
    id: 39,
    text: "What is magnetic tape typically used for in computer systems?",
    options: [
      "Primary, fast-access memory",
      "Bulk data storage, permanent records, or backup",
      "CPU cache memory"
    ],
    correctOptionIndex: 1
  },
  {
    id: 40,
    text: "In a digital flight data recorder, how is recording achieved?",
    options: [
      "By using a single track in one direction",
      "By using a multi-track, bi-directional recording method",
      "By using optical discs"
    ],
    correctOptionIndex: 1
  },
  {
    id: 41,
    text: "How is information stored on a magnetic disc?",
    options: [
      "In pits and lands",
      "In magnetic tracks, divided into sectors",
      "In a single continuous spiral track"
    ],
    correctOptionIndex: 1
  },
  {
    id: 42,
    text: "What is the advantage of magnetic discs over magnetic tape?",
    options: [
      "They are cheaper",
      "They have a much faster access time (milliseconds vs seconds/minutes)",
      "They can store more data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 43,
    text: "What is a sector on a hard disc?",
    options: [
      "A circular band on the disc surface",
      "The smallest physical storage unit on a disc, almost always 512 bytes",
      "A stack of tracks"
    ],
    correctOptionIndex: 1
  },
  {
    id: 44,
    text: "What is a cylinder on a hard disc?",
    options: [
      "A single track on a platter",
      "A pie-shaped section of a track",
      "The set of tracks at the same position on all platters, stacked on top of each other"
    ],
    correctOptionIndex: 2
  },
  {
    id: 45,
    text: "What is file fragmentation?",
    options: [
      "When a file is stored in contiguous clusters",
      "When a file is stored in non-contiguous clusters, causing slower performance",
      "When a file is deleted from the hard drive"
    ],
    correctOptionIndex: 1
  },
  {
    id: 46,
    text: "What does \"CD ROM\" stand for?",
    options: [
      "Compact Disc, Read-Only Memory",
      "Compact Disc, Random-Only Memory",
      "Compact Disc, Read-Optical Memory"
    ],
    correctOptionIndex: 0
  },
  {
    id: 47,
    text: "What is a WORM optical disc (CD R)?",
    options: [
      "A disc that can be written to and erased many times",
      "A disc that can be written onto only once but read many times",
      "A disc that can only be read, never written to"
    ],
    correctOptionIndex: 1
  },
  {
    id: 48,
    text: "What is the typical storage capacity of a standard DVD?",
    options: [
      "650 MB",
      "4.7 GB",
      "25 GB"
    ],
    correctOptionIndex: 1
  },
  {
    id: 49,
    text: "How is information stored on an optical disc?",
    options: [
      "As magnetised areas",
      "As 'pits' or 'bumps' on a dye polymer coating",
      "As electrical charges in transistors"
    ],
    correctOptionIndex: 1
  },
  {
    id: 50,
    text: "What are the two principal types of solid-state memory devices?",
    options: [
      "EPROM and EEPROM",
      "Magnetic tape and magnetic disc",
      "Random Access Memory (RAM) and Read-Only Memory (ROM)"
    ],
    correctOptionIndex: 2
  },
  {
    id: 51,
    text: "What is the main difference between RAM and ROM?",
    options: [
      "RAM is non-volatile, ROM is volatile",
      "RAM is volatile and can be written to; ROM is non-volatile and can only be read",
      "RAM is slower than ROM"
    ],
    correctOptionIndex: 1
  },
  {
    id: 52,
    text: "What was magnetic core memory?",
    options: [
      "A type of solid-state memory",
      "An historic type of memory using tiny ferrite rings to store bits",
      "A type of optical memory"
    ],
    correctOptionIndex: 1
  },
  {
    id: 53,
    text: "What was the principle of reading a magnetic core?",
    options: [
      "It was a non-destructive read",
      "It was a destructive read that required a write to restore the original data",
      "It used a laser to read the core's state"
    ],
    correctOptionIndex: 1
  },
  {
    id: 54,
    text: "What is bubble memory?",
    options: [
      "A type of volatile semiconductor memory",
      "A non-volatile memory using thin films of magnetic material to hold small magnetised areas (bubbles)",
      "A type of optical disc"
    ],
    correctOptionIndex: 1
  },
  {
    id: 55,
    text: "What technology rendered bubble memory obsolete?",
    options: [
      "Magnetic tape",
      "Flash RAM",
      "Magnetic core memory"
    ],
    correctOptionIndex: 1
  },
  {
    id: 56,
    text: "Why is ROM commonly called firmware?",
    options: [
      "Because it is software that is frequently updated",
      "Because its programming is fully embedded into the ROM chip, making it hardware and software in one",
      "Because it is a type of hardware that can be easily changed"
    ],
    correctOptionIndex: 1
  },
  {
    id: 57,
    text: "What is the main characteristic of ROM?",
    options: [
      "It is volatile and can be written to easily",
      "Data is permanent and cannot be erased or replaced after manufacture",
      "It is used for temporary data storage"
    ],
    correctOptionIndex: 1
  },
  {
    id: 58,
    text: "What is a Programmable Read-Only Memory (PROM)?",
    options: [
      "A ROM that can be erased by UV light",
      "A ROM that can be programmed once by the user using a PROM programmer",
      "A ROM that is electrically erasable"
    ],
    correctOptionIndex: 1
  },
  {
    id: 59,
    text: "How is a PROM programmed?",
    options: [
      "By exposing it to UV light",
      "By using a programming machine that blows unwanted fusible links",
      "By applying an electrical charge to erase and rewrite it"
    ],
    correctOptionIndex: 1
  },
  {
    id: 60,
    text: "What is the main disadvantage of a PROM?",
    options: [
      "It is non-volatile",
      "It is very slow",
      "If a mistake is made during programming, it cannot be corrected or erased"
    ],
    correctOptionIndex: 2
  },
  {
    id: 61,
    text: "How is an Erasable Programmable Read-Only Memory (EPROM) erased?",
    options: [
      "By exposing it to an electrical charge",
      "By exposing it to ultraviolet (UV) light through a quartz window",
      "By heating it to a high temperature"
    ],
    correctOptionIndex: 1
  },
  {
    id: 62,
    text: "What is the main advantage of an EPROM over a PROM?",
    options: [
      "It is faster",
      "It can be erased and reprogrammed",
      "It is non-volatile"
    ],
    correctOptionIndex: 1
  },
  {
    id: 63,
    text: "How is an Electrically Erasable Programmable Read-Only Memory (EEPROM) erased?",
    options: [
      "By exposing it to UV light",
      "By exposing it to an electrical charge",
      "By using a PROM programmer"
    ],
    correctOptionIndex: 1
  },
  {
    id: 64,
    text: "What is a typical write cycle lifespan for EEPROMs?",
    options: [
      "1 to 10 cycles",
      "100 to 1,000 cycles",
      "10,000 to 100,000 cycles"
    ],
    correctOptionIndex: 2
  },
  {
    id: 65,
    text: "What is the primary characteristic of RAM?",
    options: [
      "It is non-volatile and used for permanent storage",
      "It is volatile read/write memory used to store data, programs, and program results while the machine is working",
      "It can only be read, not written to"
    ],
    correctOptionIndex: 1
  },
  {
    id: 66,
    text: "What does \"random access\" mean in the context of RAM?",
    options: [
      "Data is accessed in a specific order",
      "Each storage location is as easy to reach as any other and takes the same amount of time",
      "The CPU randomly chooses which memory location to access"
    ],
    correctOptionIndex: 1
  },
  {
    id: 67,
    text: "What are the two main types of RAM?",
    options: [
      "PROM and EPROM",
      "Static RAM (SRAM) and Dynamic RAM (DRAM)",
      "SDRAM and DDR SDRAM"
    ],
    correctOptionIndex: 1
  },
  {
    id: 68,
    text: "How does Static RAM (SRAM) store bits?",
    options: [
      "In a capacitor under a transistor",
      "In a flip-flop (cross-coupled gates)",
      "In a magnetic bubble"
    ],
    correctOptionIndex: 1
  },
  {
    id: 69,
    text: "What is a key characteristic of SRAM?",
    options: [
      "It needs to be refreshed continuously",
      "It is the fastest type of memory",
      "It is very cheap per bit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 70,
    text: "How does Dynamic RAM (DRAM) store bits?",
    options: [
      "In a flip-flop",
      "In a memory cell composed of one capacitor and one transistor",
      "In a magnetic core"
    ],
    correctOptionIndex: 1
  },
  {
    id: 71,
    text: "Why does DRAM need to be continually refreshed?",
    options: [
      "Because the flip-flops lose their state",
      "Because the charge on the capacitor gradually leaks out over time",
      "Because it is volatile"
    ],
    correctOptionIndex: 1
  },
  {
    id: 72,
    text: "What is an advantage of DRAM over SRAM?",
    options: [
      "It is faster",
      "It is cheaper and smaller because it uses one transistor per cell instead of six",
      "It does not require refreshing"
    ],
    correctOptionIndex: 1
  },
  {
    id: 73,
    text: "What does Synchronous DRAM (SDRAM) synchronise with?",
    options: [
      "The memory refresh cycle",
      "The CPU's bus",
      "The hard drive"
    ],
    correctOptionIndex: 1
  },
  {
    id: 74,
    text: "What feature defines Double Data Rate SDRAM (DDR SDRAM)?",
    options: [
      "It operates at double the voltage",
      "It supports data transfers on both the rising and falling edges of each clock cycle",
      "It has twice the number of memory cells"
    ],
    correctOptionIndex: 1
  },
  {
    id: 75,
    text: "What is flash memory?",
    options: [
      "A type of volatile memory",
      "A non-volatile memory that evolved from EEPROM and erases data in units called blocks",
      "A type of magnetic memory"
    ],
    correctOptionIndex: 1
  },
  {
    id: 76,
    text: "Who is credited with the invention of flash memory?",
    options: [
      "Bill Gates",
      "Dr Fujio Masuoka",
      "Steve Jobs"
    ],
    correctOptionIndex: 1
  },
  {
    id: 77,
    text: "What is a primary advantage of flash memory?",
    options: [
      "It is the fastest type of memory",
      "It is the least expensive form of semiconductor memory and is non-volatile",
      "It has an unlimited number of write cycles"
    ],
    correctOptionIndex: 1
  },
  {
    id: 78,
    text: "What is a major disadvantage of flash memory?",
    options: [
      "It is volatile",
      "It has a wear-out mechanism where bits can fail after a high number of program-erase cycles",
      "It is very slow"
    ],
    correctOptionIndex: 1
  },
  {
    id: 79,
    text: "What is the purpose of cache memory?",
    options: [
      "To provide permanent storage for the operating system",
      "To decrease the mismatch in operating speed between the CPU and main memory",
      "To store input from peripheral devices"
    ],
    correctOptionIndex: 1
  },
  {
    id: 80,
    text: "Cache memory is typically:",
    options: [
      "Large and slow",
      "Small and fast",
      "Used for long-term storage"
    ],
    correctOptionIndex: 1
  },
  {
    id: 81,
    text: "What are registers in a computer?",
    options: [
      "The main memory",
      "Special memory units that temporarily store data and pass it on as directed by the control unit",
      "The buses that connect the CPU to memory"
    ],
    correctOptionIndex: 1
  },
  {
    id: 82,
    text: "What is computer software?",
    options: [
      "The physical components of a computer",
      "Any set of machine-readable instructions that directs a computer's processor to perform specific operations",
      "The power supply unit"
    ],
    correctOptionIndex: 1
  },
  {
    id: 83,
    text: "At the lowest level, executable code consists of:",
    options: [
      "High-level language instructions",
      "Machine language instructions specific to an individual processor",
      "Assembly language mnemonics"
    ],
    correctOptionIndex: 1
  },
  {
    id: 84,
    text: "What are the two main categories of computer software?",
    options: [
      "System software and application software",
      "Operating systems and utilities",
      "Compilers and interpreters"
    ],
    correctOptionIndex: 0
  },
  {
    id: 85,
    text: "What is the role of system software?",
    options: [
      "To perform particular functions for the user",
      "To directly operate the computer hardware and provide a platform for running application software",
      "To provide entertainment functions"
    ],
    correctOptionIndex: 1
  },
  {
    id: 86,
    text: "What is an operating system?",
    options: [
      "An application that helps with word processing",
      "An essential collection of software that manages resources and provides common services for other software",
      "A type of utility program"
    ],
    correctOptionIndex: 1
  },
  {
    id: 87,
    text: "What is a low-level language?",
    options: [
      "A language like BASIC or C++",
      "A string of 1s and 0s (machine code) or a language very close to it",
      "A language that uses English words"
    ],
    correctOptionIndex: 1
  },
  {
    id: 88,
    text: "What is machine language?",
    options: [
      "A language using mnemonics like ADD and SUB",
      "The lowest and most elementary programming language, consisting of binary digits (0 and 1)",
      "A high-level language used for business applications"
    ],
    correctOptionIndex: 1
  },
  {
    id: 89,
    text: "What is assembly language?",
    options: [
      "A high-level language that uses English words",
      "A low-level language where operation codes and operands are given alphanumeric symbols (mnemonics)",
      "A language that is directly interpreted by the hardware"
    ],
    correctOptionIndex: 1
  },
  {
    id: 90,
    text: "What is the purpose of high-level languages?",
    options: [
      "To provide the most efficient code possible",
      "To enable people to write programs quickly in a language closer to natural language (English)",
      "To write device drivers"
    ],
    correctOptionIndex: 1
  },
  {
    id: 91,
    text: "Which of the following is an example of a high-level language?",
    options: [
      "Machine language",
      "Assembly language",
      "C++"
    ],
    correctOptionIndex: 2
  },
  {
    id: 92,
    text: "What is the CPU of an aircraft computer system typically called?",
    options: [
      "A motherboard",
      "A line replaceable unit (LRU) or line replaceable module (LRM)",
      "A peripheral device"
    ],
    correctOptionIndex: 1
  },
  {
    id: 93,
    text: "What does HMI stand for in the context of aircraft computers?",
    options: [
      "Hardware Memory Interface",
      "Human/Machine Interface",
      "High-level Machine Instruction"
    ],
    correctOptionIndex: 1
  },
  {
    id: 94,
    text: "What is an LRU?",
    options: [
      "A type of software",
      "A modular component of an aircraft designed to be replaced quickly at an operating location",
      "A data bus protocol"
    ],
    correctOptionIndex: 1
  },
  {
    id: 95,
    text: "How are LRUs typically mounted on an aircraft?",
    options: [
      "By soldering them directly to the airframe",
      "In racks within a dedicated area where temperature can be controlled",
      "Loose inside the avionics bay"
    ],
    correctOptionIndex: 1
  },
  {
    id: 96,
    text: "What facilitates quick replacement of an LRU?",
    options: [
      "Soldered connections",
      "Quick-release clamps, built-in test buttons, and LED displays",
      "A dedicated software uninstall routine"
    ],
    correctOptionIndex: 1
  },
  {
    id: 97,
    text: "When computers on an aircraft communicate, what is a data 'word' carried on?",
    options: [
      "A power bus",
      "A data bus that complies with a standard protocol",
      "A serial cable only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 98,
    text: "What is a common data bus protocol used on civil transport aircraft?",
    options: [
      "MIL-STD-1553B",
      "ARINC 429",
      "USB"
    ],
    correctOptionIndex: 1
  },
  {
    id: 99,
    text: "What is the main difference between a parallel bus and a serial bus?",
    options: [
      "Parallel buses are slower than serial buses",
      "Serial buses transfer each data word bit on the same wire, while parallel buses use a specific wire for each bit",
      "Parallel buses are used for external communication only"
    ],
    correctOptionIndex: 1
  },
  {
    id: 100,
    text: "What does a \"single source - multiple sink\" data bus describe?",
    options: [
      "Where multiple transmitters send data to multiple receivers",
      "A dedicated link from one piece of equipment to another",
      "Where one piece of transmitting equipment can send data to several recipient pieces of equipment"
    ],
    correctOptionIndex: 2
  },
  {
    id: 101,
    text: "What does full-duplex (duplex) mean in the context of a data bus?",
    options: [
      "Data can be transmitted in only one direction",
      "Data can be transmitted in both directions but not simultaneously",
      "All LRUs can send and receive data simultaneously"
    ],
    correctOptionIndex: 2
  },
  {
    id: 102,
    text: "What does the term \"address\" refer to?",
    options: [
      "The location of the computer",
      "The number used to identify a storage location",
      "The name of the software program"
    ],
    correctOptionIndex: 1
  },
  {
    id: 103,
    text: "What is \"access time\"?",
    options: [
      "The time it takes to boot the computer",
      "The time between a request for data from a storage device and the time the data is delivered",
      "The time it takes to write a program"
    ],
    correctOptionIndex: 1
  },
  {
    id: 104,
    text: "What is a \"bus\"?",
    options: [
      "A type of memory chip",
      "A common data pathway connecting several components of a computer system",
      "A programming language"
    ],
    correctOptionIndex: 1
  },
  {
    id: 105,
    text: "What does \"baud rate\" measure?",
    options: [
      "The capacity of a hard drive",
      "The speed with which data is transmitted (bits per second)",
      "The clock speed of the CPU"
    ],
    correctOptionIndex: 1
  },
  {
    id: 106,
    text: "What is a \"compiler\"?",
    options: [
      "A program that translates source programs written in a high-level language into machine language",
      "A type of memory",
      "An input device"
    ],
    correctOptionIndex: 0
  },
  {
    id: 107,
    text: "What is a \"port\"?",
    options: [
      "A type of software",
      "A connector used to link devices to a computer",
      "A memory location"
    ],
    correctOptionIndex: 1
  },
  {
    id: 108,
    text: "What is \"firmware\"?",
    options: [
      "A set of program instructions permanently stored in read-only memory",
      "The physical components of a computer",
      "A type of application software"
    ],
    correctOptionIndex: 0
  },
  {
    id: 109,
    text: "What does \"handshaking\" refer to?",
    options: [
      "A type of physical connection",
      "The process through which the rules for exchanging data over a communications line are defined for the two devices involved",
      "A method of storing data"
    ],
    correctOptionIndex: 1
  },
  {
    id: 110,
    text: "What is a \"peripheral device\"?",
    options: [
      "The CPU",
      "Any input, output, or storage device connected to the central processing unit",
      "The main memory"
    ],
    correctOptionIndex: 1
  },
  {
    id: 111,
    text: "What is a \"real-time system\"?",
    options: [
      "A system that processes data in batches",
      "A computer system that can receive input data and process that data quickly enough to output signals to control the input source",
      "A system that runs one program at a time"
    ],
    correctOptionIndex: 1
  },
  {
    id: 112,
    text: "What is \"serial data transmission\"?",
    options: [
      "A method where all bits of a character are transmitted simultaneously",
      "A method where bits representing a character are sent one after the other along a single wire",
      "A method of storing data on a disc"
    ],
    correctOptionIndex: 1
  }
];
