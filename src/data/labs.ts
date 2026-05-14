export interface Lab {
  id: string;
  title: string;
  objective: string;
  tasks: string[];
  topologyDesc: string;
}

export const labs: Lab[] = [
  {
    id: 'basic-switch',
    title: 'Basic Switch Configuration',
    objective: 'Configure hostnames, passwords, and management IP on a Cisco switch.',
    topologyDesc: '1x Switch (2960), 2x PCs connected via Straight-through cables.',
    tasks: [
      'Change hostname to "SW1"',
      'Set enable secret password to "cisco123"',
      'Configure VTY lines (0-15) with password "cisco"',
      'Assign IP 192.168.1.2/24 to VLAN 1 interface',
      'Enable the interface with "no shutdown"'
    ]
  },
  {
    id: 'inter-vlan',
    title: 'Inter-VLAN Routing (Router-on-a-Stick)',
    objective: 'Enable communication between VLAN 10 and VLAN 20 using sub-interfaces.',
    topologyDesc: '1x Router, 1x Switch (Trunk link), 2x PCs (VLAN 10 and 20).',
    tasks: [
      'Create VLAN 10 and 20 on the switch',
      'Assign switch ports to respective VLANs',
      'Configure the switch port to the router as a trunk (switchport mode trunk)',
      'On the router, create sub-interfaces G0/0.10 and G0/0.20',
      'Use encapsulation dot1q [vlan_id] on sub-interfaces',
      'Assign gateway IPs: 192.168.10.1 and 192.168.20.1'
    ]
  },
  {
    id: 'ospf-basics',
    title: 'Single-Area OSPFv2',
    objective: 'Configure dynamic routing between two routers.',
    topologyDesc: '2x Routers connected via Serial or Ethernet link.',
    tasks: [
      'Assign IPs to router-to-router link',
      'Enable OSPF process: "router ospf 1"',
      'Configure Router ID',
      'Advertise networks using "network [net] [wildcard] area 0"',
      'Verify adjacency with "show ip ospf neighbor"'
    ]
  }
];
