# Fase Baby Ecommerce

Projeto base de e-commerce com:
- Frontend: React + Vite
- Backend: FastAPI

## Rodar o Backend
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000