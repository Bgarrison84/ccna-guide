import { useState, useEffect } from 'react';
import { loreEntries } from '../data/lore';

const TechnicianLog = () => {
  const [syncData, setSyncData] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem('silicon_renaissance_sync');
    if (raw) {
      try {
        setSyncData(JSON.parse(raw));
      } catch (e) {
        console.error("Failed to parse sync data", e);
      }
    }
  }, []);

  const milestones = syncData?.milestones || {};

  return (
    <div>
      <h1>📜 Technician's Log</h1>
      <p>Decoded archives from the Sector 7 wasteland. Solve challenges in <strong>Silicon-Reborn</strong> to unlock more entries.</p>
      
      {loreEntries.map(entry => {
        const isUnlocked = milestones[entry.milestone];
        return (
          <div key={entry.id} className="card" style={{ opacity: isUnlocked ? 1 : 0.6, borderLeft: isUnlocked ? '5px solid #ffcc00' : '5px solid #ccc' }}>
            <h2>{entry.title} {isUnlocked ? '✅' : '🔒'}</h2>
            {isUnlocked ? (
              <>
                <p style={{ fontStyle: 'italic', borderLeft: '4px solid var(--cisco-blue)', paddingLeft: '15px' }}>
                  {entry.content}
                </p>
                <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e6f7ff', borderRadius: '4px' }}>
                  <strong>🛠️ Wasteland Pro-Tip:</strong> {entry.proTip}
                </div>
              </>
            ) : (
              <p><em>Requirement: Achieve "{entry.milestone.replace(/_/g, ' ')}" in Silicon-Reborn to decode this entry.</em></p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechnicianLog;
