# backend/app/logic.py


def score_anomaly(flow):
    """
    Simple rule-based heuristic for anomaly scoring.
    Will later be replaced with GNN-based inference.

    Returns:
        A float between 0 and 1 indicating risk level.
    """
    score = 0.0

    # Heuristic 1: Large data transfer
    if flow["bytes"] > 1000000:
        score += 0.5

    # Heuristic 2: Too many packets
    if flow["packets"] > 1000:
        score += 0.3

    # Heuristic 3: External destination
    if not flow["dst_ip"].startswith("10."):
        score += 0.2

    return min(score, 1.0)


"""
This module contains our anomaly scoring logic.
Initially, we use simple rules to flag potentially suspicious flows.
This sets the foundation for later machine learning models.
"""
