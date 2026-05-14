export interface LoreEntry {
  id: string;
  title: string;
  milestone: string;
  content: string;
  proTip: string;
}

export const loreEntries: LoreEntry[] = [
  {
    id: 'entry-1',
    title: 'The First Link',
    milestone: 'link_restored',
    content: 'When the first communication link was restored in Sector 7, we realized the ancients used "Layer 3" logic for everything. It wasn\'t just a protocol; it was their nervous system.',
    proTip: 'In the Wasteland, always remember that "Enable" is your key to power. Without Privileged EXEC mode, you are just a spectator.'
  },
  {
    id: 'entry-2',
    title: 'The Charter Crisis',
    milestone: 'pm_charter_approved',
    content: 'The reconstruction of Haven almost failed before it began. Everyone wanted to build, but no one had authority. The discovery of the "Project Charter" methodology changed everything.',
    proTip: 'Never start a rebuilding quest without a clear Charter. It defines your scope and gives you the "Reputation" needed to lead scavengers.'
  },
  {
    id: 'entry-3',
    title: 'VLAN Silence',
    milestone: 'vlan_isolated',
    content: 'The broadcast storms in Haven were deafening—digital chaos that fried our remaining life support modules. VLAN isolation was the only cure.',
    proTip: 'Use "show vlan brief" frequently. In complex topologies, hidden VLAN mismatches are more dangerous than a group of Raiders.'
  }
];
