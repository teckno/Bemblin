#!/bin/bash

# activate virtual environment
source venv/bin/activate

# run unit tests
python manage.py test

# exit virtual environment
deactivate
