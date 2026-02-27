# Fase Baby Ecommerce

Projeto base de e-commerce (fase 1):
- Frontend: React + Vite
- Backend: FastAPI

## Estrutura
- `front-end/` -> app React
- `backend/` -> API FastAPI

---

## Requisitos
- Node.js (npm)
- Python 3.x

---

## Rodar o Backend (FastAPI)
Abra um terminal na raiz do projeto e rode:

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
