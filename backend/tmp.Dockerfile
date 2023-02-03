FROM python:3.8-slim

# Set the working directory to the backend directory
WORKDIR /app/backend

# Install Django and other required Python packages
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the Django project files
COPY . .

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Expose the port that the Django development server runs on
EXPOSE 8000
