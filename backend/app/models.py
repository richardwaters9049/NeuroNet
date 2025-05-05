# backend/app/models.py

from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from .database import Base


class FlowRecord(Base):
    __tablename__ = "flow_records"

    id = Column(Integer, primary_key=True, index=True)
    src_ip = Column(String, index=True)
    dst_ip = Column(String, index=True)
    bytes = Column(Integer)
    packets = Column(Integer)
    timestamp = Column(DateTime, default=datetime.utcnow)
    anomaly_score = Column(Float)
    label = Column(String, default="normal")  # normal, suspicious, malicious


"""
This defines our database schema for a single flow record.
Each record includes source/destination IPs, data transfer stats, a timestamp,
and a machine-learned `anomaly_score`. The `label` can be updated by an analyst.
"""
