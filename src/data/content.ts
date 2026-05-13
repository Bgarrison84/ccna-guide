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
        content: 'When a frame enters a Cisco switch, the switch examines the Source MAC address to learn which device is connected to which port. This information is stored in the MAC Address Table (also called CAM table).'
      },
      {
        title: 'The MAC Address Table',
        content: 'The MAC address table stores the mapping between MAC addresses and physical ports. You can view this table using the command: show mac address-table.'
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
    id: 'vlans',
    title: 'VLANs (Virtual LANs)',
    description: 'Segmenting networks for performance and security.',
    sections: [
      {
        title: 'Purpose of VLANs',
        content: 'VLANs divide a single broadcast domain into multiple smaller broadcast domains. This improves network performance and security by reducing the size of the broadcast domains and isolating network traffic.'
      },
      {
        title: 'VLAN Defaults',
        content: 'On a Cisco switch, VLANs 1, 1002, 1003, 1004, and 1005 exist by default and cannot be deleted. All ports are assigned to VLAN 1 by default.'
      }
    ],
    quiz: [
      {
        question: 'Which of the following statements about VLANs is true?',
        options: [
          'VLANs divide a collision domain into multiple collision domains.',
          'VLANs divide a broadcast domain into multiple broadcast domains.'
        ],
        answer: 1,
        explanation: 'Virtual Local Area Networks (VLANs) divide a single broadcast domain into multiple smaller broadcast domains.'
      },
      {
        question: 'Which VLAN is untagged on a trunk port by default?',
        options: ['The default VLAN', 'The native VLAN', 'The access VLAN', 'VLAN 10'],
        answer: 1,
        explanation: 'The native VLAN is the one VLAN that is untagged on a 802.1Q trunk port.'
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
        content: 'An IPv4 address is a 32-bit logical address. The formula 2^N - 2 is used to calculate the number of hosts, where N is the number of host bits.'
      },
      {
        title: 'Subnet Masks',
        content: 'A subnet mask (e.g., 255.255.255.192 for a /26) tells the device which part of the IP address is the Network ID and which part is the Host ID.'
      }
    ],
    quiz: [
      {
        question: 'What is the subnet mask for a /26 prefix?',
        options: ['255.255.255.0', '255.255.255.128', '255.255.255.192', '255.255.255.224'],
        answer: 2,
        explanation: 'A /26 prefix uses 26 bits for the network portion. The 4th octet has 2 network bits (11000000 = 192). So the mask is 255.255.255.192.'
      },
      {
        question: 'Given the following address and mask 172.16.10.1 255.255.248.0, what is the broadcast address for the subnet?',
        options: ['172.16.15.255', '172.16.8.0', '172.16.16.255', '172.16.255.255'],
        answer: 0,
        explanation: 'The mask 255.255.248.0 is a /21. The increment in the 3rd octet is 8. The network address is 172.16.8.0, and the broadcast is 172.16.15.255.'
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
        title: 'Longest Prefix Match',
        content: 'When selecting which route should be used to forward a particular packet, the router only considers one thing: the most specific matching route (longest prefix match).'
      }
    ],
    quiz: [
      {
        question: 'What does the routing protocol code B indicate in the routing table?',
        options: ['EIGRP', 'RIP', 'OSPF', 'BGP'],
        answer: 3,
        explanation: 'The code "B" in the Cisco IOS routing table stands for BGP (Border Gateway Protocol).'
      },
      {
        question: 'What is the default administrative distance for OSPF?',
        options: ['90', '100', '110', '120'],
        answer: 2,
        explanation: 'The default AD for OSPF is 110. (Connected=0, Static=1, EIGRP=90, RIP=120).'
      }
    ]
  },
  {
    id: 'ipv6',
    title: 'IPv6 Addressing',
    description: 'The next generation of IP addressing.',
    sections: [
      {
        title: 'IPv6 Structure',
        content: 'IPv6 addresses are 128 bits long and written in hexadecimal. The :: may be used once in an address to represent consecutive sections of 0000.'
      },
      {
        title: 'Link-Local Addresses',
        content: 'Link-local addresses (fe80::/10) are used for communication within a single local segment and are not routable outside that segment.'
      }
    ],
    quiz: [
      {
        question: 'What prefix is reserved for IPv6 link-local addresses?',
        options: ['fe80::/10', 'fec0::/10', 'ff00::/8', '2001::/3'],
        answer: 0,
        explanation: 'fe80::/10 is the prefix reserved for link-local addressing in IPv6.'
      },
      {
        question: 'What command causes a router interface to autoconfigure its host portion using the EUI-64 method?',
        options: [
          'ipv6 address autoconfig',
          'ipv6 address eui-64',
          'ipv6 address 2001:db8::/64 eui-64',
          'ipv6 enable'
        ],
        answer: 2,
        explanation: 'The "ipv6 address [prefix]/64 eui-64" command enables the modified EUI-64 method on the interface.'
      }
    ]
  },
  {
    id: 'stp',
    title: 'STP (Spanning Tree Protocol)',
    description: 'Preventing loops in a switched network.',
    sections: [
      {
        title: 'Need for STP',
        content: 'STP prevents Layer 2 loops and the resulting broadcast storms and MAC table instability. It does this by placing redundant ports into a blocking state.'
      },
      {
        title: 'Port Roles',
        content: 'Designated ports point away from the root bridge and are in a forwarding state. Root ports point toward the root bridge. Alternate ports (in RSTP) provide a backup path.'
      }
    ],
    quiz: [
      {
        question: 'Which STP port role points away from the root bridge and is in a forwarding state?',
        options: ['Designated', 'Alternate', 'Root', 'Backup'],
        answer: 0,
        explanation: 'Designated ports point away from the root bridge and are in a forwarding state once the LAN has converged.'
      },
      {
        question: 'What happens when a switch port configured with BPDU Guard receives a BPDU?',
        options: [
          'The port ignores the BPDU.',
          'The port is error-disabled.',
          'BPDU Guard is disabled.',
          'The port moves to forwarding.'
        ],
        answer: 1,
        explanation: 'BPDU Guard error-disables a port if it receives a BPDU, preventing unauthorized switches from joining the topology.'
      }
    ]
  }
];
