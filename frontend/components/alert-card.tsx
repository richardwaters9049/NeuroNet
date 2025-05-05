"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Alert } from "@/types/alert";

export function AlertCard({ alert }: { alert: Alert }) {
    return (
        <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-red-600">{alert.threat_type}</h3>
                <p className="text-sm text-gray-700">
                    <strong>Source:</strong> {alert.source_ip} → <strong>Destination:</strong> {alert.dest_ip}
                </p>
                <p className="text-sm">
                    <strong>Protocol:</strong> {alert.protocol} | <strong>Risk Score:</strong> {alert.risk_score}
                </p>
                <p className="text-xs text-gray-400">{new Date(alert.timestamp).toLocaleString()}</p>
            </CardContent>
        </Card>
    );
}
