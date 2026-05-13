export interface Question {
  question: string;
  options: string[];
  answer: number; // Index of the correct option
  explanation: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  sections: Section[];
  quiz?: Question[];
}

export const modules: Module[] = [
  {
    id: 'intro',
    title: 'Introduction to Networking',
    description: 'Learn the basic components of a computer and its role in a networking system.',
    sections: [
      {
        title: 'Overview',
        content: 'In this introductory chapter, you will look at the components of a computer and at the role of computers in a networking system. You will use the "ground up" approach to learning networking, starting with the most basic component of a network – the computer.'
      },
      {
        title: 'The Internet Analogy',
        content: 'You can think of the Internet as a tree, and computers as the leaves on the tree. Computers are the sources and receivers of information, both giving to and taking from the Internet. Note that computers can function without the Internet, but that the Internet cannot exist without computers.'
      }
    ]
  },
  {
    id: 'osi-model',
    title: 'The OSI Model',
    description: 'Understanding the 7 layers of the OSI model.',
    sections: [
      {
        title: 'Background',
        content: 'To address the problem of network incompatibility, the International Organization for Standardization (ISO) researched many network schemes and released the OSI reference model in 1984. This model serves as a foundation for understanding how data travels through a network.'
      },
      {
        title: 'The 7 Layers',
        content: '7. Application: User interface and network services.\n6. Presentation: Data representation and encryption.\n5. Session: Inter-host communication management.\n4. Transport: End-to-end connections and reliability.\n3. Network: Path determination and IP (Logical) addressing.\n2. Data Link: Error detection and MAC (Physical) addressing.\n1. Physical: Binary transmission over media.'
      }
    ],
    quiz: [
      {
        question: 'Which layer of the OSI model is responsible for path determination and logical addressing?',
        options: ['Data Link', 'Transport', 'Network', 'Physical'],
        answer: 2,
        explanation: 'The Network layer (Layer 3) is responsible for path determination and IP (logical) addressing.'
      }
    ]
  },
  {
    id: 'switching',
    title: 'Ethernet & Switching',
    description: 'How switches move data within a local network.',
    sections: [
      {
        title: 'Switching Basics',
        content: 'When a frame enters a Cisco switch, the switch examines the Source MAC address to learn which device is connected to which port. This information is stored in the MAC Address Table.'
      },
      {
        title: 'The MAC Address Table',
        content: 'The MAC address table (also called CAM table) stores the mapping between MAC addresses and physical ports. You can view this table using the command: show mac address-table.'
      }
    ],
    quiz: [
      {
        question: 'When a frame enters a Cisco switch, what field does the switch learn from?',
        options: ['Preamble', 'FCS', 'Source MAC', 'Destination MAC'],
        answer: 2,
        explanation: 'The switch examines and learns the source MAC addresses of incoming frames to populate its MAC address table.'
      },
      {
        question: 'What command allows you to view the addresses learned by a Cisco switch?',
        options: ['show mac-address-table', 'show mac address-table', 'show addresses', 'show mac addresses'],
        answer: 1,
        explanation: 'The standard Cisco IOS command is "show mac address-table".'
      }
    ]
  },
  {
    id: 'subnetting',
    title: 'IP Addressing & Subnetting',
    description: 'Master the art of dividing networks into smaller sub-networks.',
    sections: [
      {
        title: 'IPv4 Addressing',
        content: 'An IPv4 address is a 32-bit logical address. It is usually written in dotted-decimal notation (e.g., 192.168.1.1).'
      },
      {
        title: 'Subnet Masks',
        content: 'A subnet mask (e.g., 255.255.255.0) tells the device which part of the IP address is the Network ID and which part is the Host ID.'
      }
    ],
    quiz: [
      {
        question: 'What is the subnet mask for a /26 prefix?',
        options: ['255.255.255.0', '255.255.255.128', '255.255.255.192', '255.255.255.224'],
        answer: 2,
        explanation: 'A /26 prefix uses 26 bits for the network portion. The 4th octet has 2 network bits (11000000 = 192). So the mask is 255.255.255.192.'
      }
    ]
  },
  {
    id: 'routing',
    title: 'Routing Fundamentals',
    description: 'How routers connect different networks and choose the best path.',
    sections: [
      {
        title: 'The Role of a Router',
        content: 'Routers operate at Layer 3 of the OSI model. Their primary job is to forward packets between different networks based on the destination IP address.'
      },
      {
        title: 'Administrative Distance',
        content: 'If a router learns multiple routes to the same destination from different sources, it uses Administrative Distance (AD) to decide which one to trust. Lower AD is better.'
      }
    ],
    quiz: [
      {
        question: 'Which of the following explains the correct definition of administrative distance?',
        options: [
          'The physical distance between two routers.',
          'The time it takes for a packet to reach its destination.',
          'The number of hops a packet takes.',
          'The process where a router prioritizes routing protocols to select the best path.'
        ],
        answer: 3,
        explanation: 'Administrative Distance is the feature that routers use in order to select the best path when there are two or more different routes to the same destination from two different routing protocols.'
      },
      {
        question: 'What is the default administrative distance for OSPF?',
        options: ['90', '100', '110', '120'],
        answer: 2,
        explanation: 'The default AD for OSPF is 110. (Connected is 0, Static is 1, EIGRP is 90, RIP is 120).'
      }
    ]
  }
];
