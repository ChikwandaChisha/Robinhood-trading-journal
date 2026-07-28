.PHONY: help dev db-up db-down backend frontend migrate test lint clean

help:
	@echo "Robinhood Trading Journal - Developer Commands"
	@echo "--------------------------------------------------"
	@echo "  make dev       : Start both backend and frontend"
	@echo "  make db-up     : Start local PostgreSQL container"
	@echo "  make db-down   : Stop local PostgreSQL container"
	@echo "  make backend   : Run FastAPI dev server (port 8000)"
	@echo "  make frontend  : Run Next.js dev server (port 3000)"
	@echo "  make migrate   : Run Alembic migrations"
	@echo "  make test      : Run backend tests"
	@echo "  make lint      : Run ruff & eslint"

db-up:
	docker compose up -d

db-down:
	docker compose down

backend:
	cd backend && uvicorn app.main:app --reload --port 8000

frontend:
	cd frontend && npm run dev

dev: db-up
	@echo "Starting backend and frontend..."

migrate:
	cd backend && alembic upgrade head

test:
	cd backend && pytest

lint:
	cd backend && ruff check .
	cd frontend && npm run lint
