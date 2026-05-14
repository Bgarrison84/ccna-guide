import React, { useState, useEffect } from 'react';
import { Binary, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

const SubnettingTool = () => {
  const [problem, setProblem] = useState({ ip: '', cidr: 24 });
  const [answers, setAnswers] = useState({
    network: '',
    broadcast: '',
    firstUsable: '',
  });
  const [result, setResult] = useState<{ status: 'idle' | 'success' | 'failure'; message: string }>({
    status: 'idle',
    message: '',
  });

  const generateProblem = () => {
    const ip = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
    const cidr = Math.floor(Math.random() * 15) + 16; // /16 to /30
    setProblem({ ip, cidr });
    setAnswers({ network: '', broadcast: '', firstUsable: '' });
    setResult({ status: 'idle', message: '' });
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const ipToLong = (ip: string) => {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
  };

  const longToIp = (long: number) => {
    return [
      (long >>> 24) & 0xff,
      (long >>> 16) & 0xff,
      (long >>> 8) & 0xff,
      long & 0xff,
    ].join('.');
  };

  const calculateSubnet = (ip: string, cidr: number) => {
    const ipLong = ipToLong(ip);
    const mask = (0xffffffff << (32 - cidr)) >>> 0;
    const networkLong = (ipLong & mask) >>> 0;
    const broadcastLong = (networkLong | (~mask >>> 0)) >>> 0;
    const firstUsableLong = (networkLong + 1) >>> 0;

    return {
      network: longToIp(networkLong),
      broadcast: longToIp(broadcastLong),
      firstUsable: longToIp(firstUsableLong),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = calculateSubnet(problem.ip, problem.cidr);

    if (
      answers.network === correct.network &&
      answers.broadcast === correct.broadcast &&
      answers.firstUsable === correct.firstUsable
    ) {
      setResult({ status: 'success', message: 'Correct! Great job!' });
    } else {
      setResult({
        status: 'failure',
        message: `Incorrect. Expected: Net: ${correct.network}, Broadcast: ${correct.broadcast}, First: ${correct.firstUsable}`,
      });
    }
  };

  return (
    <div className="page-container">
      <div className="flex items-center gap-3 mb-6">
        <Binary className="text-blue-500 w-8 h-8" />
        <h1 className="text-3xl font-bold">Subnetting Challenge</h1>
      </div>

      <div className="card mb-8 p-8 text-center bg-gray-900/50 border border-gray-700 rounded-xl">
        <p className="text-gray-400 mb-2 uppercase tracking-wider text-sm font-semibold">Current Challenge</p>
        <div className="text-4xl font-mono font-bold text-blue-400">
          {problem.ip} <span className="text-gray-500">/{problem.cidr}</span>
        </div>
        <button
          onClick={generateProblem}
          className="mt-6 flex items-center gap-2 mx-auto px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
        >
          <RefreshCw size={18} /> Generate New
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Network Address</label>
            <input
              type="text"
              value={answers.network}
              onChange={(e) => setAnswers({ ...answers, network: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. 192.168.1.0"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Broadcast Address</label>
            <input
              type="text"
              value={answers.broadcast}
              onChange={(e) => setAnswers({ ...answers, broadcast: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. 192.168.1.255"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">First Usable IP</label>
            <input
              type="text"
              value={answers.firstUsable}
              onChange={(e) => setAnswers({ ...answers, firstUsable: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. 192.168.1.1"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.01]"
        >
          Check Answers
        </button>
      </form>

      {result.status !== 'idle' && (
        <div
          className={`mt-8 p-6 rounded-xl border flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300 ${
            result.status === 'success'
              ? 'bg-green-500/10 border-green-500/50 text-green-400'
              : 'bg-red-500/10 border-red-500/50 text-red-400'
          }`}
        >
          {result.status === 'success' ? <CheckCircle className="shrink-0" /> : <XCircle className="shrink-0" />}
          <div>
            <p className="font-bold text-lg mb-1">{result.status === 'success' ? 'Brilliant!' : 'Not quite right'}</p>
            <p className="opacity-90">{result.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubnettingTool;
