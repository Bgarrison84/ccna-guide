export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: 'Ports' | 'Protocols' | 'Acronyms' | 'Commands';
}

export const flashcards: Flashcard[] = [
  { id: '1', category: 'Ports', question: 'SSH', answer: 'TCP 22' },
  { id: '2', category: 'Ports', question: 'Telnet', answer: 'TCP 23' },
  { id: '3', category: 'Ports', question: 'HTTP', answer: 'TCP 80' },
  { id: '4', category: 'Ports', question: 'HTTPS', answer: 'TCP 443' },
  { id: '5', category: 'Ports', question: 'DNS', answer: 'UDP/TCP 53' },
  { id: '6', category: 'Ports', question: 'DHCP Server', answer: 'UDP 67' },
  { id: '7', category: 'Ports', question: 'DHCP Client', answer: 'UDP 68' },
  { id: '8', category: 'Ports', question: 'TFTP', answer: 'UDP 69' },
  { id: '9', category: 'Ports', question: 'SNMP', answer: 'UDP 161/162' },
  { id: '10', category: 'Ports', question: 'BGP', answer: 'TCP 179' },
  { id: '11', category: 'Protocols', question: 'Administrative Distance: OSPF', answer: '110' },
  { id: '12', category: 'Protocols', question: 'Administrative Distance: EIGRP (Internal)', answer: '90' },
  { id: '13', category: 'Protocols', question: 'Administrative Distance: Static Route', answer: '1' },
  { id: '14', category: 'Protocols', question: 'Administrative Distance: RIP', answer: '120' },
  { id: '15', category: 'Acronyms', question: 'CSMA/CD', answer: 'Carrier Sense Multiple Access with Collision Detection' },
  { id: '16', category: 'Acronyms', question: 'LLDP', answer: 'Link Layer Discovery Protocol (802.1AB)' },
  { id: '17', category: 'Acronyms', question: 'HSRP', answer: 'Hot Standby Router Protocol' },
  { id: '18', category: 'Commands', question: 'View the MAC address table', answer: 'show mac address-table' },
  { id: '19', category: 'Commands', question: 'Check interface status and IP', answer: 'show ip interface brief' },
  { id: '20', category: 'Commands', question: 'View the routing table', answer: 'show ip route' },
];
