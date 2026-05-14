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
        question: 'During a TFTP transfer using Cisco Routers what is the numeric value, in decimal, of the destination port field of the User Datagram Protocol (UDP) header?',
        options: ['96', '47', 'random above 1024', '69'],
        answer: 3,
        explanation: 'TFTP (Trivial File Transfer Protocol) uses UDP port 69 for the initial connection. Source material: CCNAPrep Q1.'
      },
      {
        question: 'Which of the following is the correct sequence for the TCP three-way handshake?',
        options: ['SYN, ACK, SYN-ACK', 'SYN, SYN-ACK, ACK', 'ACK, SYN, SYN-ACK', 'SYN, SYN, ACK'],
        answer: 1,
        explanation: 'The TCP 3-way handshake consists of SYN, followed by SYN-ACK, and finally ACK to establish a connection.'
      },
      {
        question: 'What is the maximum distance for 10Gbps transmission over Category 6 (Cat6) cabling?',
        options: ['37 meters', '55 meters', '100 meters', '150 meters'],
        answer: 1,
        explanation: 'Cat6 supports 10Gbps up to 55 meters. For 100 meters at 10Gbps, Cat6a is required.'
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
      },
      {
        question: 'What is the Protocol Data Unit (PDU) at the Data Link layer?',
        options: ['Segment', 'Packet', 'Frame', 'Bit'],
        answer: 2,
        explanation: 'The PDU at Layer 2 is a Frame. Segments are Layer 4, Packets are Layer 3, and Bits are Layer 1.'
      },
      {
        question: 'Which OSI layer is responsible for data compression and encryption?',
        options: ['Application', 'Presentation', 'Session', 'Transport'],
        answer: 1,
        explanation: 'The Presentation layer (Layer 6) handles how data is represented, including encryption and compression.'
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
      },
      {
        title: 'Standard Encapsulation',
        content: 'Cisco routers use ARPA as the default encapsulation method for Ethernet interfaces when using IP. (Source: CCNAPrep Q2)'
      }
    ],
    quiz: [
      {
        question: 'What is the standard encapsulation method used by Cisco routers for the Internet Protocol (IP) on its Ethernet interfaces?',
        options: ['SNAP', 'ARPA', 'NOVELL-ETHER', 'DARPA', 'Ethernet_802.3'],
        answer: 1,
        explanation: 'The default Ethernet encapsulation on Cisco routers is ARPA (Advanced Research Projects Agency).'
      },
      {
        question: 'How many bits are in a standard MAC address?',
        options: ['32', '48', '64', '128'],
        answer: 1,
        explanation: 'A MAC address is 48 bits long, usually represented as 12 hexadecimal digits.'
      },
      {
        question: 'What action does a switch take when it receives a frame with an unknown destination MAC address?',
        options: ['Drops the frame', 'Sends it to the default gateway', 'Floods it out all ports except the source', 'Buffers it until the MAC is learned'],
        answer: 2,
        explanation: 'If the destination MAC is not in the CAM table, the switch performs "unknown unicast flooding".'
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
      },
      {
        question: 'What is the size of the 802.1Q tag added to an Ethernet frame?',
        options: ['2 bytes', '4 bytes', '8 bytes', '12 bytes'],
        answer: 1,
        explanation: 'The 802.1Q tag is 4 bytes (32 bits) long, inserted between the Source MAC and EtherType fields.'
      },
      {
        question: 'Which command is used to assign a port to a specific VLAN?',
        options: ['switchport access vlan X', 'vlan X', 'switchport mode trunk', 'switchport trunk allowed vlan X'],
        answer: 0,
        explanation: 'The command "switchport access vlan [id]" assigns an access port to a specific VLAN.'
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
      },
      {
        question: 'Which STP state is characterized by not forwarding frames and not learning MAC addresses, but still receiving BPDUs?',
        options: ['Forwarding', 'Listening', 'Learning', 'Blocking'],
        answer: 3,
        explanation: 'In the Blocking state, the port only processes BPDUs to ensure it remains loop-free.'
      },
      {
        question: 'What is the purpose of STP PortFast?',
        options: ['Increases port speed', 'Bypasses listening and learning states', 'Protects against BPDUs', 'Enables EtherChannel'],
        answer: 1,
        explanation: 'PortFast allows an access port to transition immediately to the forwarding state, skipping STP convergence states.'
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
      },
      {
        question: 'Which LACP mode will actively initiate negotiation with a partner port?',
        options: ['Passive', 'Auto', 'Desirable', 'Active'],
        answer: 3,
        explanation: 'In Active mode, the port actively sends LACP packets to negotiate the EtherChannel. Passive only responds.'
      },
      {
        question: 'What is the maximum number of active physical links that can be bundled into a single LACP EtherChannel?',
        options: ['2', '4', '8', '16'],
        answer: 2,
        explanation: 'LACP supports up to 8 active links in a single bundle (plus up to 8 standby links).'
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
      },
      {
        question: 'What is the network address for the IP 192.168.10.45/27?',
        options: ['192.168.10.0', '192.168.10.16', '192.168.10.32', '192.168.10.40'],
        answer: 2,
        explanation: 'A /27 has a block size of 32. Subnets are .0, .32, .64. .45 falls in the .32 subnet.'
      },
      {
        question: 'Which of the following is a valid Class B private IP address range?',
        options: ['10.0.0.0 - 10.255.255.255', '172.16.0.0 - 172.31.255.255', '192.168.0.0 - 192.168.255.255', '169.254.0.0 - 169.254.255.255'],
        answer: 1,
        explanation: 'The Class B private range is 172.16.0.0 through 172.31.255.255 (RFC 1918).'
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
      },
      {
        question: 'Which of the following represents the shortened version of the IPv6 address 2001:0db8:0000:0000:0000:ff00:0042:8329?',
        options: ['2001:db8::ff00:42:8329', '2001:db8:0:0:0:ff:42:8329', '2001:db8::ff:42:8329', '2001:db8:0000::ff00:42:8329'],
        answer: 0,
        explanation: 'Leading zeros are removed, and the longest string of consecutive zeros is replaced by double colons (::).'
      },
      {
        question: 'When using EUI-64 to generate an interface ID, what value is inserted in the middle of the MAC address?',
        options: ['FFFF', 'EEEE', 'FFFE', 'FEFF'],
        answer: 2,
        explanation: 'EUI-64 inserts FFFE into the middle of the 48-bit MAC address to create a 64-bit interface ID.'
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
      },
      {
        question: 'What is the Administrative Distance of a static route?',
        options: ['0', '1', '90', '110'],
        answer: 1,
        explanation: 'Static routes have a default AD of 1. Directly connected interfaces have an AD of 0.'
      },
      {
        question: 'What is a "floating static route"?',
        options: ['A route that changes based on traffic', 'A backup route with a higher AD', 'A route learned via DHCP', 'A route used for load balancing'],
        answer: 1,
        explanation: 'A floating static route is a backup route configured with a higher Administrative Distance than the primary route.'
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
      },
      {
        question: 'OSPF uses which algorithm to calculate the shortest path?',
        options: ['DUAL', 'Bellman-Ford', 'Dijkstra', 'Spanning Tree'],
        answer: 2,
        explanation: 'OSPF uses the Dijkstra SPF (Shortest Path First) algorithm.'
      },
      {
        question: 'In OSPF, which area is known as the backbone area?',
        options: ['Area 0', 'Area 1', 'Area 10', 'Area 100'],
        answer: 0,
        explanation: 'Area 0 is the mandatory backbone area that all other areas must connect to.'
      }
    ]
  },
  {
    id: 'wan',
    title: 'WAN Architectures',
    description: 'Connecting the enterprise to the world.',
    sections: [
      {
        title: 'SD-WAN',
        content: 'SD-WAN abstracts the transport layer. Policies route traffic based on application type, path quality metrics, and cost. Can use broadband + MPLS + LTE simultaneously. (Source: Jeremy\'s IT Lab)'
      },
      {
        title: 'The Demarc',
        content: 'The demarc is the physical boundary between customer equipment (CPE) and the service provider network. (Source: Exam Cram)'
      }
    ],
    quiz: [
      {
        question: 'What differentiates SD-WAN from traditional WAN architecture?',
        options: [
          'SD-WAN requires dedicated MPLS',
          'SD-WAN uses software policies to route traffic across any transport intelligently',
          'SD-WAN eliminates the need for routers',
          'SD-WAN is a wireless-only technology'
        ],
        answer: 1,
        explanation: 'SD-WAN provides transport independence and intelligent path selection based on business policy.'
      },
      {
        question: 'What is the purpose of a VPN?',
        options: ['To increase internet speed', 'To provide a secure, encrypted tunnel over a public network', 'To replace the need for an ISP', 'To assign public IP addresses to local hosts'],
        answer: 1,
        explanation: 'Virtual Private Networks (VPNs) create secure connections over untrusted networks like the internet.'
      },
      {
        question: 'Which WAN technology uses labels to make forwarding decisions?',
        options: ['Frame Relay', 'ATM', 'MPLS', 'Metro Ethernet'],
        answer: 2,
        explanation: 'MPLS (Multi-Protocol Label Switching) uses short path labels rather than long network addresses to forward packets.'
      }
    ]
  },
  {
    id: 'hsrp',
    title: 'HSRP & Redundancy',
    description: 'First-hop redundancy protocols.',
    sections: [
      {
        title: 'HSRP Overview',
        content: 'Hot Standby Router Protocol (HSRP) is a Cisco-proprietary redundancy protocol that allows multiple routers to appear as a single gateway IP. One is Active, one is Standby.'
      }
    ],
    quiz: [
      {
        question: 'In HSRP, which router is responsible for forwarding traffic sent to the virtual IP?',
        options: ['Standby router', 'Listening router', 'Active router', 'Backup router'],
        answer: 2,
        explanation: 'The Active router forwards packets; the Standby router monitors the Active router.'
      },
      {
        question: 'What is the default HSRP priority?',
        options: ['1', '50', '100', '255'],
        answer: 2,
        explanation: 'The default HSRP priority is 100. The router with the highest priority becomes Active.'
      },
      {
        question: 'Which command enables a higher-priority HSRP router to take over the Active role from a lower-priority router?',
        options: ['standby X preempt', 'standby X priority', 'standby X track', 'standby X timers'],
        answer: 0,
        explanation: 'The "preempt" command allows a router with a higher priority to immediately become the Active router.'
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
        explanation: 'Port Address Translation (PAT) uses source port numbers to distinguish between traffic flows.'
      },
      {
        question: 'In NAT terminology, what is the "Inside Global" address?',
        options: ['The private IP of the internal host', 'The public IP representing the internal host to the outside world', 'The IP of the external destination', 'The MAC address of the router'],
        answer: 1,
        explanation: 'Inside Global is the public address used to represent an internal host on the internet.'
      },
      {
        question: 'Which command is required to enable PAT when using an IP address pool?',
        options: ['overload', 'pat-enable', 'port-translation', 'dynamic'],
        answer: 0,
        explanation: 'The "overload" keyword at the end of the "ip nat inside source" command enables PAT.'
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
        explanation: 'Standard ACLs should be placed as close to the destination as possible.'
      },
      {
        question: 'What is the implicit final line of every ACL?',
        options: ['permit any', 'deny all', 'log all', 'redirect to management'],
        answer: 1,
        explanation: 'All Cisco ACLs end with an invisible "deny all" statement. If no lines match, the traffic is dropped.'
      },
      {
        question: 'Which range of numbers is used for Extended ACLs?',
        options: ['1-99', '100-199', '200-299', '1000-1999'],
        answer: 1,
        explanation: 'Extended ACLs use the range 100-199 and 2000-2699.'
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
        content: 'Stratum 0 is an atomic clock. Stratum 1 is a server directly connected to it.'
      }
    ],
    quiz: [
      {
        question: 'What is the DHCP message sequence?',
        options: ['Discover, Request, Offer, Ack', 'Discover, Offer, Request, Ack', 'Request, Discover, Ack, Offer', 'Offer, Discover, Request, Ack'],
        answer: 1,
        explanation: 'DORA sequence ensures the client and server agree on the lease.'
      },
      {
        question: 'What is the purpose of the "ip helper-address" command?',
        options: ['To speed up routing', 'To relay DHCP requests across different subnets', 'To assign static IPs', 'To enable DNS resolution'],
        answer: 1,
        explanation: 'The helper-address command converts local DHCP broadcasts into unicast packets to reach a DHCP server in a different subnet.'
      },
      {
        question: 'Which NTP Stratum level is considered the most accurate (e.g., an atomic clock)?',
        options: ['Stratum 0', 'Stratum 1', 'Stratum 10', 'Stratum 15'],
        answer: 0,
        explanation: 'Stratum 0 devices are the actual time sources (atomic clocks, GPS). Stratum 1 is directly connected to a Stratum 0 device.'
      }
    ]
  },
  {
    id: 'qos',
    title: 'Quality of Service (QoS)',
    description: 'Managing traffic priority.',
    sections: [
      {
        title: 'Voice Requirements',
        content: 'One-way delay < 150ms, Jitter < 30ms, Packet loss < 1%. (Source: Jeremy\'s IT Lab)'
      },
      {
        title: 'LLQ (Low Latency Queuing)',
        content: 'LLQ adds a strict priority queue to CBWFQ, ensuring voice is always dequeued first.'
      }
    ],
    quiz: [
      {
        question: 'What is the one-way delay requirement for VoIP traffic?',
        options: ['< 50ms', '< 150ms', '< 300ms', '< 500ms'],
        answer: 1,
        explanation: 'Conversational voice requires delay below 150ms to feel natural.'
      },
      {
        question: 'Which QoS mechanism is used to manage congestion by dropping packets before the queue is full?',
        options: ['FIFO', 'WRED', 'Shaping', 'Policing'],
        answer: 1,
        explanation: 'Weighted Random Early Detection (WRED) drops lower-priority packets when congestion begins to occur to prevent tail drop.'
      },
      {
        question: 'What is the difference between Traffic Shaping and Traffic Policing?',
        options: [
          'Shaping drops traffic, Policing buffers it',
          'Shaping buffers traffic, Policing drops it',
          'Shaping only works on input, Policing only on output',
          'There is no difference'
        ],
        answer: 1,
        explanation: 'Traffic Shaping buffers excess traffic to smooth out bursts, while Policing drops or re-marks traffic that exceeds the rate limit.'
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
        content: 'Autonomous APs: Self-contained.\nLightweight APs: Managed by a Wireless LAN Controller (WLC) using CAPWAP.'
      }
    ],
    quiz: [
      {
        question: 'Which protocol is used for communication between a WLC and an LAP?',
        options: ['STP', 'CAPWAP', 'CDP', 'LLDP'],
        answer: 1,
        explanation: 'CAPWAP is the standard protocol for WLC-AP management.'
      },
      {
        question: 'Which frequency band is most susceptible to interference from household devices like microwaves and Bluetooth?',
        options: ['2.4 GHz', '5 GHz', '6 GHz', '60 GHz'],
        answer: 0,
        explanation: 'The 2.4 GHz band is crowded with many non-Wi-Fi devices, leading to high interference.'
      },
      {
        question: 'What is the purpose of an SSID?',
        options: ['To encrypt wireless traffic', 'To identify a specific wireless network', 'To manage AP power levels', 'To route wireless packets'],
        answer: 1,
        explanation: 'The Service Set Identifier (SSID) is the name of the wireless network that clients see.'
      }
    ]
  },
  {
    id: 'security-threats',
    title: 'Security Threat Landscape',
    description: 'Understanding the enemies.',
    sections: [
      {
        title: 'Common Threats',
        content: 'Phishing: Deceptive emails. Social Engineering: Manipulating people into giving secrets. Brute Force: Trying every password combo.'
      }
    ],
    quiz: [
      {
        question: 'Which of the following are examples of social engineering?',
        options: ['Backdoor', 'Whaling', 'Trojan horse', 'Phishing'],
        answer: 3,
        explanation: 'Phishing (and its variants like Whaling) are social engineering attacks. (Source material: Acing the CCNA)'
      },
      {
        question: 'What is a "Man-in-the-Middle" (MitM) attack?',
        options: [
          'An attack that floods a server with traffic',
          'An attack where the attacker secretly intercepts and relays communication between two parties',
          'An attack that guesses passwords',
          'An attack that physically destroys hardware'
        ],
        answer: 1,
        explanation: 'In a MitM attack, the attacker positions themselves between two hosts to eavesdrop or modify data.'
      },
      {
        question: 'Which type of malware encrypts a user\'s files and demands payment for the decryption key?',
        options: ['Spyware', 'Adware', 'Ransomware', 'Rootkit'],
        answer: 2,
        explanation: 'Ransomware is designed to hold data hostage until a ransom is paid.'
      }
    ]
  },
  {
    id: 'device-security',
    title: 'Cisco Device Security',
    description: 'Hardening the infrastructure.',
    sections: [
      {
        title: 'AAA',
        content: 'Authentication (Who?), Authorization (What?), Accounting (What did they do?).'
      },
      {
        title: 'Port Security',
        content: 'Default violation mode is shutdown. "Sticky" MAC addresses are saved to the running-config.'
      }
    ],
    quiz: [
      {
        question: 'What is the default Port Security violation mode?',
        options: ['Protect', 'Restrict', 'Shutdown', 'Block'],
        answer: 2,
        explanation: 'Shutdown is the default mode, which err-disables the port.'
      },
      {
        question: 'Which command is used to encrypt all clear-text passwords in the configuration file?',
        options: ['enable secret', 'service password-encryption', 'encrypt-all', 'password-policy secure'],
        answer: 1,
        explanation: 'The "service password-encryption" command applies a weak (Type 7) encryption to all plain-text passwords.'
      },
      {
        question: 'What are the three components of AAA?',
        options: [
          'Access, Authorization, Accounting',
          'Authentication, Authorization, Accounting',
          'Authentication, Administration, Auditing',
          'Access, Administration, Auditing'
        ],
        answer: 1,
        explanation: 'AAA stands for Authentication (who), Authorization (what), and Accounting (actions taken).'
      }
    ]
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Virtualization and the cloud.',
    sections: [
      {
        title: 'Service Models',
        content: 'SaaS: Finished software (Email). PaaS: Development platform (Azure). IaaS: Infrastructure (VMs/Storage).'
      }
    ],
    quiz: [
      {
        question: 'Which cloud service model is most likely to be purchased to install your own applications?',
        options: ['IaaS', 'PaaS', 'SaaS', 'SLBaaS'],
        answer: 0,
        explanation: 'Infrastructure as a Service (IaaS) provides the underlying compute resources for your own OS and apps.'
      },
      {
        question: 'What is a Hypervisor?',
        options: [
          'A high-speed router',
          'Software that creates and runs virtual machines',
          'A type of cloud storage',
          'A security firewall'
        ],
        answer: 1,
        explanation: 'A hypervisor (or Virtual Machine Monitor) is the software layer that allows multiple operating systems to share a single hardware host.'
      },
      {
        question: 'In the Shared Responsibility Model for IaaS, who is typically responsible for patching the guest Operating System?',
        options: ['The Cloud Provider', 'The Customer', 'The Hardware Vendor', 'The ISP'],
        answer: 1,
        explanation: 'In IaaS, the customer is responsible for managing the OS, applications, and data.'
      }
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Programmability',
    description: 'The SDN revolution.',
    sections: [
      {
        title: 'Planes of Operation',
        content: 'Data Plane: Forwarding bits. Control Plane: Making decisions (Routing protocols). Management Plane: Managing devices (SSH).'
      },
      {
        title: 'API Formats',
        content: 'JSON uses curly braces {} for objects and double quotes for keys. (Source material: CCNA Study Notes)'
      }
    ],
    quiz: [
      {
        question: 'Which plane is responsible for building the routing table?',
        options: ['Data Plane', 'Control Plane', 'Management Plane', 'User Plane'],
        answer: 1,
        explanation: 'The Control Plane handles the intelligence and routing logic.'
      },
      {
        question: 'Which HTTP method is used to retrieve data from an API?',
        options: ['POST', 'PUT', 'GET', 'DELETE'],
        answer: 2,
        explanation: 'The GET method is used to request data from a specified resource.'
      },
      {
        question: 'Which automation tool is considered "agentless" and uses SSH for communication?',
        options: ['Puppet', 'Chef', 'Ansible', 'SaltStack'],
        answer: 2,
        explanation: 'Ansible is agentless, meaning no software needs to be installed on the managed nodes; it uses SSH by default.'
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI, ML & Future Networking',
    description: 'The cutting edge of IT.',
    sections: [
      {
        title: 'AI in Networking',
        content: 'AI/ML is used for predictive analytics, anomaly detection, and automated troubleshooting in modern controller-based networks like Cisco DNA Center.'
      }
    ],
    quiz: [
      {
        question: 'Which of the following is a use case for AI in networking?',
        options: ['Running STP', 'Predictive anomaly detection', 'Manual configuration', 'Cabling standards'],
        answer: 1,
        explanation: 'AI and Machine Learning enable networks to predict and prevent issues before they occur.'
      },
      {
        question: 'What is "Intent-Based Networking" (IBN)?',
        options: [
          'A network that requires manual configuration for every change',
          'A network architecture that translates business goals into network configurations automatically',
          'A network that only supports IPv6',
          'A network that uses no cables'
        ],
        answer: 1,
        explanation: 'IBN uses automation and AI to align the network with business intent, providing continuous validation and optimization.'
      },
      {
        question: 'How does Machine Learning improve network security?',
        options: [
          'By creating longer passwords',
          'By identifying patterns and anomalies that indicate a zero-day attack',
          'By disabling all open ports',
          'By requiring multi-factor authentication for everyone'
        ],
        answer: 1,
        explanation: 'ML can analyze massive amounts of traffic data to identify subtle patterns of malicious behavior that traditional signature-based systems might miss.'
      }
    ]
  }
];
