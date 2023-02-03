# Use an official Python runtime as the base image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the backend code into the container
COPY backend/ /app

# Install the dependencies for the backend
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy the frontend code into the container
COPY frontend/ /app/frontend

# Change to the frontend directory
WORKDIR /app/frontend

# Install the dependencies for the frontend
RUN npm install

# Build the frontend
RUN npm run build

# Change back to the backend directory
WORKDIR /app

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Expose the default Django port
EXPOSE 8000

# Define the command to run the backend server
CMD ["python", "backend/manage.py", "runserver", "0.0.0.0:8000"]
