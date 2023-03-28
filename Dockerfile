# Build stage
FROM node:14 AS build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Production stage
FROM python:3.9-slim

WORKDIR /app

# Install dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy built frontend files into backend static directory
COPY --from=build /app/frontend/build/ /app/backend/static/

# Copy backend code
COPY backend/ ./

# Start the server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
