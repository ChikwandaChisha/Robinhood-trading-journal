import os
import sys

# Ensure the backend directory is on sys.path so "app" resolves
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
