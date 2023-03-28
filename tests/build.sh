#!/bin/bash

# Install dependencies
pip install -r requirements.txt

# Build the Docker image
docker build -t my_app .

# Tag the Docker image with the latest version number
docker tag my_app my_app:latest
