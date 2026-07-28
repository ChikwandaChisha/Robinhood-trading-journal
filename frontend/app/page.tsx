"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/lib/api-client";
import { Activity, ShieldCheck, TrendingUp, Zap, BarChart3, UploadCloud } from "lucide-react";

interface HealthResponse {
  status: string;
  service: string;
  environment: string;
}

export default function Home() {
  const { data: health, isLoading, error } = useQuery<HealthResponse>({
    queryKey: ["health"],
    queryFn: () => fetchApi<HealthResponse>("/health"),
  });

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto space-y-8">
      {/* Top Navbar Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
              Trading Journal <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold tracking-wide uppercase">AI Powered</span>
            </h1>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Automated lot matching, FIFO trade construction & quantitative analytics
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-mono">
            <div className={`w-2 h-2 rounded-full ${health?.status === "healthy" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
            <span className="text-slate-400">API Status:</span>
            <span className="text-slate-200 uppercase font-semibold">
              {isLoading ? "Checking..." : error ? "Offline" : health?.status}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Welcome Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card glass-card-hover p-6 rounded-2xl space-y-3">
          <div className="p-3 w-fit rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <UploadCloud className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">1. Import Executions</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Upload Robinhood CSV exports containing buy/sell fills, option assignments, exercises, and expirations.
          </p>
        </div>

        <div className="glass-card glass-card-hover p-6 rounded-2xl space-y-3">
          <div className="p-3 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">2. FIFO Trade Construction</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Automatic lot matching converts raw execution fills into structured round-trip trades with accurate net P&L calculations.
          </p>
        </div>

        <div className="glass-card glass-card-hover p-6 rounded-2xl space-y-3">
          <div className="p-3 w-fit rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">3. Performance Analytics</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Analyze win rate, profit factor, drawdown, equity curves, holding times, and rule compliance.
          </p>
        </div>
      </div>

      {/* System Status Summary */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800/80 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-semibold text-slate-200 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Environment Health Check
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-500 block">Frontend</span>
            <span className="text-slate-200 font-bold">Next.js 15 (React 19)</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-500 block">Backend</span>
            <span className="text-slate-200 font-bold">FastAPI + Python 3.14</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-500 block">Database</span>
            <span className="text-slate-200 font-bold">PostgreSQL 16</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-500 block">Theme</span>
            <span className="text-emerald-400 font-bold">Futuristic Dark Glass</span>
          </div>
        </div>
      </div>
    </main>
  );
}
