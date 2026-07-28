# Robinhood Trading Journal 📈🤖

> A modern, high-performance, single-user AI trading journal that imports Robinhood CSV exports, derives round-trip trades using **FIFO lot matching**, visualizes performance analytics, and provides AI-powered behavioral coaching.

---

## 🌟 Key Features

- **Monorepo Architecture**: Clean separation between Next.js 15 frontend and FastAPI backend.
- **Robust Trade Construction**: Converts raw execution fills (buys, sells, options assignments, exercises, expirations) into accurate round-trip trades with FIFO lot matching.
- **Futuristic & Dark Mode First UI**: Built with React 19, Tailwind CSS, shadcn/ui, glassmorphism aesthetics, electric emerald/crimson data highlights, and dynamic Recharts.
- **Analytics Engine**: Calculates Win Rate, Profit Factor, Expectancy, Sharpe/Sortino Ratios, Maximum Drawdown, Holding Times, and Strategy breakdowns.
- **AI Performance Insights**: Evaluates trade behavior against customized trading rules (`docs/trading-rules.md`).

---

## 📁 Repository Structure

```text
trading-journal/
├── frontend/             # Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui
├── backend/              # FastAPI, SQLAlchemy, Alembic, Pydantic, PostgreSQL
│   ├── app/
│   │   ├── api/          # REST Endpoints
│   │   ├── db/           # Session & Base Models
│   │   ├── models/       # Database Entities
│   │   ├── schemas/      # Pydantic Schemas
│   │   ├── services/     # Business Logic
│   │   ├── parsers/      # Robinhood & Broker CSV Parsers
│   │   ├── matching/     # FIFO Lot Matching & Trade Construction
│   │   ├── analytics/    # Quantitative Metrics
│   │   ├── ai/           # AI Insight & Reasoning Engine
│   │   └── utils/
│   ├── migrations/       # Alembic Database Migrations
│   └── tests/            # Pytest suite
├── docs/                 # Trading rules & documentation
├── Makefile              # Development command shortcuts
├── docker-compose.yml    # PostgreSQL container specification
├── .env.example          # Environment variables template
└── README.md
```

---

## 🛠️ Quick Start

### 1. Prerequisites
- **Node.js**: v20+
- **Python**: 3.10+
- **Docker & Docker Compose**: For local PostgreSQL container

### 2. Setup Environment
```bash
cp .env.example .env
```

### 3. Start Database (PostgreSQL)
```bash
make db-up
# or
docker compose up -d
```

### 4. Setup Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

### 5. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Running Tests & Quality Checks

```bash
# Run pytest backend suite
make test

# Run code linter
make lint
```
