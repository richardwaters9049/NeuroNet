# backend/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime

# Create a FastAPI instance
app = FastAPI()

# -------------------------------
# Add CORS Middleware
# -------------------------------
# This middleware will allow requests from the frontend (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],  # Allow requests from the frontend (Next.js app)
    allow_credentials=True,  # Allow credentials (cookies, HTTP auth headers)
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


# -------------------------------
# Define the Alert response model
# -------------------------------
# This class defines the shape and types of alert data the API will return.
# Pydantic ensures validation, and FastAPI uses it to auto-generate docs.
class Alert(BaseModel):
    id: int
    source_ip: str
    dest_ip: str
    protocol: str
    threat_type: str
    risk_score: float
    timestamp: str


# ---------------------------------------
# Mock data for alerts (stand-in dataset)
# ---------------------------------------
# This is static data to simulate alerts until the real detection engine is integrated.
mock_alerts = [
    Alert(
        id=1,
        source_ip="10.0.0.5",
        dest_ip="192.168.1.20",
        protocol="TCP",
        threat_type="Lateral Movement",
        risk_score=8.7,
        timestamp=datetime.now().isoformat(),
    ),
    Alert(
        id=2,
        source_ip="172.16.0.3",
        dest_ip="192.168.1.100",
        protocol="UDP",
        threat_type="Data Exfiltration",
        risk_score=9.2,
        timestamp=datetime.now().isoformat(),
    ),
]


# --------------------------------
# API route: /alerts (GET request)
# --------------------------------
# This endpoint returns all simulated alert records.
# It is used by the frontend to populate the alert dashboard.
@app.get("/alerts", response_model=List[Alert])
def get_alerts():
    # Return the mock data list; response will be automatically converted to JSON.
    return mock_alerts
