export type Alert = {
  id: number;
  source_ip: string;
  dest_ip: string;
  protocol: string;
  threat_type: string;
  risk_score: number;
  timestamp: string;
};
