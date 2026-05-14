const Home = () => (
  <div className="card">
    <h1>Welcome to the CCNA Guide</h1>
    <p>This application is designed to help you learn the fundamentals of networking and prepare for the CCNA certification.</p>
    <p>All information is derived from official CCNA source materials to ensure accuracy.</p>
    
    <div className="card" style={{ border: '1px dashed #ffcc00', backgroundColor: '#fff9e6' }}>
      <h3>🚀 Silicon Renaissance Ecosystem</h3>
      <p>Progress made in <strong>Silicon-Reborn</strong> will unlock secret lore and "Wasteland Pro-Tips" in the <strong>Technician's Log</strong>.</p>
      <a href="https://Bgarrison84.github.io/silicon-reborn/" target="_blank" rel="noreferrer" style={{ color: 'var(--cisco-blue)', fontWeight: 'bold' }}>
        Play Silicon-Reborn to unlock content &gt;
      </a>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
      <div className="card" style={{ margin: 0 }}>
        <h3>Certification Sim</h3>
        <p>Ready for the real thing? Try our timed Exam Simulator with a pool of hundreds of source-accurate questions.</p>
      </div>
      <div className="card" style={{ margin: 0 }}>
        <h3>Interactive Quizzes</h3>
        <p>Test your knowledge after each module with real-world exam questions.</p>
      </div>
    </div>
  </div>
);

export default Home;
