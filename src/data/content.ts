export interface Question {
  question: string;
  options: string[];
  answer: number;
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
    id: 'fundamentals',
    title: 'Network Fundamentals',
    description: 'The foundation of all communication.',
    sections: [
      {
        title: 'TCP vs UDP',
        content: 'TCP (Transmission Control Protocol) is a connection-oriented, reliable protocol that uses a 3-way handshake. UDP (User Datagram Protocol) is connectionless and "best-effort", making it ideal for real-time traffic like VoIP.'
      },
      {
        title: 'Cabling & Media',
        content: 'Cat6 supports 10Gbps up to 55 meters. Multimode fiber uses LED/VCSEL light and is used for shorter distances (up to 550m), while Singlemode fiber uses lasers for long distances (up to 40km+).'
      }
    ],
    quiz: [
      {
        question: 'Which of the following is a characteristic of UDP?',
        options: ['Connection-oriented', 'Reliable delivery', 'Low overhead', '3-way handshake'],
        answer: 2,
        explanation: 'UDP is connectionless and has lower overhead because it does not provide reliability, ordering, or error recovery.'
      }
    ]
  },
  {
    id: 'osi-model',
    title: 'The OSI Model',
    description: 'The 7-layer framework for understanding data flow.',
    sections: [
      {
        title: 'The Upper Layers (5-7)',
        content: '7. Application: Network services for users.\n6. Presentation: Formatting and encryption.\n5. Session: Managing dialogues between hosts.'
      },
      {
        title: 'The Lower Layers (1-4)',
        content: '4. Transport: Segments data and provides flow control (TCP/UDP).\n3. Network: Routes packets using logical IP addressing.\n2. Data Link: Frames data using physical MAC addresses.\n1. Physical: Transmits bits over the wire.'
      }
    ],
    quiz: [
      {
        question: 'At which layer of the OSI model does a router operate?',
        options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
        answer: 2,
        explanation: 'Routers operate at Layer 3 (Network), using IP addresses to route packets.'
      }
    ]
  },
  {
    id: 'ethernet',
    title: 'Ethernet & Switching',
    description: 'Building the local area network.',
    sections: [
      {
        title: 'The MAC Address Table',
        content: 'Switches learn source MAC addresses and record them in the CAM table along with the port they were seen on. If a destination MAC is unknown, the switch floods the frame out all ports except the source.'
      }
    ],
    quiz: [
      {
        question: 'What does a switch do when it receives a frame with an unknown destination MAC address?',
        options: ['Drops the frame', 'Sends it to the default gateway', 'Floods it out all ports except the incoming port', 'Buffers the frame until it learns the address'],
        answer: 2,
        explanation: 'This process is known as Unknown Unicast Flooding.'
      }
    ]
  },
  {
    id: 'vlans',
    title: 'VLANs & Trunking',
    description: 'Segmentation and link aggregation.',
    sections: [
      {
        title: '802.1Q Trunking',
        content: 'Standard trunking protocol that inserts a 4-byte tag into the Ethernet frame header. The "Native VLAN" is the only VLAN that is untagged across the trunk.'
      }
    ],
    quiz: [
      {
        question: 'Which VLAN is untagged on a trunk by default?',
        options: ['VLAN 1', 'VLAN 10', 'Native VLAN', 'Management VLAN'],
        answer: 2,
        explanation: 'Frames in the Native VLAN are not tagged when sent across an 802.1Q trunk.'
      }
    ]
  },
  {
    id: 'stp',
    title: 'Spanning Tree Protocol (STP)',
    description: 'Eliminating Layer 2 loops.',
    sections: [
      {
        title: 'Root Bridge Election',
        content: 'The switch with the lowest Bridge ID (Priority + MAC Address) becomes the Root Bridge. Default priority is 32768.'
      }
    ],
    quiz: [
      {
        question: 'What is the default STP bridge priority?',
        options: ['4096', '16384', '32768', '65536'],
        answer: 2,
        explanation: 'The default priority is 32768. Lowering this makes a switch more likely to become the Root Bridge.'
      }
    ]
  },
  {
    id: 'etherchannel',
    title: 'EtherChannel',
    description: 'Bundling links for high bandwidth and redundancy.',
    sections: [
      {
        title: 'LACP vs PAgP',
        content: 'LACP (802.3ad) is industry standard. PAgP is Cisco proprietary. Both allow bundling up to 8 physical links into one logical interface.'
      }
    ],
    quiz: [
      {
        question: 'Which EtherChannel protocol is industry standard?',
        options: ['PAgP', 'LACP', 'STP', 'DTP'],
        answer: 1,
        explanation: 'LACP (Link Aggregation Control Protocol) is defined in 802.3ad and is vendor-neutral.'
      }
    ]
  },
  {
    id: 'subnetting',
    title: 'IPv4 Addressing & Subnetting',
    description: 'Mastering the math of networks.',
    sections: [
      {
        title: 'Subnet Math',
        content: 'Use the formula 2^N to find subnets and 2^H - 2 to find usable hosts (H = host bits). A /26 has 6 host bits, meaning 62 usable hosts (2^6 - 2 = 62).'
      }
    ],
    quiz: [
      {
        question: 'How many usable hosts are in a /28 subnet?',
        options: ['12', '14', '16', '30'],
        answer: 1,
        explanation: 'A /28 has 4 host bits. 2^4 = 16. Subtract 2 for network and broadcast = 14 usable hosts.'
      }
    ]
  },
  {
    id: 'ipv6',
    title: 'IPv6 Addressing',
    description: 'The future of the internet.',
    sections: [
      {
        title: 'Address Types',
        content: 'Global Unicast (2000::/3): Like public IPv4.\nLink-Local (FE80::/10): For local segment comms.\nMulticast (FF00::/8): Replaces broadcast.'
      }
    ],
    quiz: [
      {
        question: 'What is the prefix for IPv6 Link-Local addresses?',
        options: ['2000::/3', 'FC00::/7', 'FE80::/10', 'FF00::/8'],
        answer: 2,
        explanation: 'FE80::/10 is reserved for link-local traffic.'
      }
    ]
  },
  {
    id: 'routing-basics',
    title: 'Routing Fundamentals',
    description: 'How packets find their way.',
    sections: [
      {
        title: 'The Routing Table',
        content: 'C = Connected, S = Static, O = OSPF, D = EIGRP. Routers always prefer the Longest Prefix Match when multiple routes exist for the same destination.'
      }
    ],
    quiz: [
      {
        question: 'What does a router prioritize when selecting a route?',
        options: ['Lowest AD', 'Lowest Metric', 'Longest Prefix Match', 'Fastest Interface'],
        answer: 2,
        explanation: 'Longest Prefix Match is the primary decision factor, followed by AD then Metric.'
      }
    ]
  },
  {
    id: 'ospf',
    title: 'OSPFv2',
    description: 'Dynamic link-state routing.',
    sections: [
      {
        title: 'Adjacency Requirements',
        content: 'Neighbors must match on: Hello/Dead timers, Area ID, Authentication, Subnet Mask, and MTU.'
      }
    ],
    quiz: [
      {
        question: 'What is the default Administrative Distance for OSPF?',
        options: ['90', '100', '110', '120'],
        answer: 2,
        explanation: 'OSPF has an AD of 110. (Connected=0, Static=1, EIGRP=90, RIP=120).'
      }
    ]
  },
  {
    id: 'nat',
    title: 'NAT & PAT',
    description: 'Conserving IPv4 addresses.',
    sections: [
      {
        title: 'NAT Types',
        content: 'Static NAT: 1-to-1 mapping.\nDynamic NAT: Many-to-many from a pool.\nPAT (Overload): Many-to-one using unique port numbers.'
      }
    ],
    quiz: [
      {
        question: 'Which type of NAT allows thousands of hosts to share a single public IP?',
        options: ['Static NAT', 'Dynamic NAT', 'PAT (Overload)', 'NAT-PT'],
        answer: 2,
        explanation: 'Port Address Translation (PAT) uses source port numbers to distinguish between traffic flows from different hosts.'
      }
    ]
  },
  {
    id: 'acls',
    title: 'Access Control Lists (ACLs)',
    description: 'The foundation of network security.',
    sections: [
      {
        title: 'Standard vs Extended',
        content: 'Standard (1-99): Filters by Source IP only. Place near destination.\nExtended (100-199): Filters by Source/Dest IP, Protocol, and Port. Place near source.'
      }
    ],
    quiz: [
      {
        question: 'Where should a Standard ACL be placed?',
        options: ['Near the source', 'Near the destination', 'On the core switch', 'In the middle of the path'],
        answer: 1,
        explanation: 'Standard ACLs should be placed as close to the destination as possible because they only filter by source IP.'
      }
    ]
  },
  {
    id: 'dhcp-dns-ntp',
    title: 'IP Services',
    description: 'DHCP, DNS, and NTP.',
    sections: [
      {
        title: 'DHCP Process',
        content: 'DORA: Discover, Offer, Request, Acknowledge.'
      },
      {
        title: 'NTP Stratum',
        content: 'Stratum 0 is an atomic clock. Stratum 1 is a server directly connected to it. Lower numbers are more authoritative.'
      }
    ],
    quiz: [
      {
        question: 'What is the DHCP message sequence?',
        options: ['Discover, Request, Offer, Ack', 'Discover, Offer, Request, Ack', 'Request, Discover, Ack, Offer', 'Offer, Discover, Request, Ack'],
        answer: 1,
        explanation: 'DORA: Discover (Client), Offer (Server), Request (Client), Acknowledge (Server).'
      }
    ]
  },
  {
    id: 'wireless',
    title: 'Wireless Fundamentals',
    description: 'Networking without wires.',
    sections: [
      {
        title: 'Architecture',
        content: 'Autonomous APs: Self-contained.\nLightweight APs: Managed by a Wireless LAN Controller (WLC) using CAPWAP (UDP 5246/5247).'
      }
    ],
    quiz: [
      {
        question: 'Which protocol is used for communication between a WLC and an LAP?',
        options: ['STP', 'CAPWAP', 'CDP', 'LLDP'],
        answer: 1,
        explanation: 'CAPWAP (Control and Provisioning of Wireless Access Points) is the industry-standard protocol for WLC-AP communication.'
      }
    ]
  },
  {
    id: 'security-fundamentals',
    title: 'Security Fundamentals',
    description: 'Protecting the infrastructure.',
    sections: [
      {
        title: 'AAA',
        content: 'Authentication (Who?), Authorization (What can you do?), Accounting (What did you do?).'
      },
      {
        title: 'Threats',
        content: 'Phishing: Deceptive emails.\nSocial Engineering: Manipulating people into giving secrets.\nBrute Force: Trying every password combo.'
      }
    ],
    quiz: [
      {
        question: 'What does the first A in AAA stand for?',
        options: ['Accounting', 'Authorization', 'Authentication', 'Audit'],
        answer: 2,
        explanation: 'Authentication is the process of verifying a user\'s identity.'
      }
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Programmability',
    description: 'Modern network operations.',
    sections: [
      {
        title: 'Planes of Operation',
        content: 'Data Plane: Forwarding traffic.\nControl Plane: Routing decisions (OSPF, etc.).\nManagement Plane: Config and monitoring (SSH, SNMP).'
      },
      {
        title: 'API Formats',
        content: 'JSON: Key-value pairs used in modern APIs. Uses {} for objects and [] for arrays.'
      }
    ],
    quiz: [
      {
        question: 'Which plane is responsible for building the routing table?',
        options: ['Data Plane', 'Control Plane', 'Management Plane', 'User Plane'],
        answer: 1,
        explanation: 'The Control Plane handles the intelligence of the network, like routing protocols and neighbor adjacencies.'
      }
    ]
  }
];
