#!/bin/bash

# Copy Docker Compose file to remote server
scp docker-compose.yml user@remote_server:/path/to/app/

# SSH into remote server and start Docker Compose
ssh user@remote_server "cd /path/to/app/ && docker-compose up -d"
