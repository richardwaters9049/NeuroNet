// frontend/app/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import { Alert } from "@/types/alert";
import Navbar from "../../components/Navbar";
import { Card } from "@/components/ui/card";

const DashboardPage = () => {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/alerts");
                if (!response.ok) throw new Error("Failed to fetch alerts");
                const data = await response.json();
                setAlerts(data);
            } catch (error) {
                console.error("Error fetching alerts:", error);
            }
        };

        fetchAlerts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Alerts Dashboard</h1>

                {/* Alerts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {alerts.map((alert) => (
                        <Card key={alert.id} className="bg-white shadow-lg dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg text-primary dark:text-primary-400">{alert.threat_type}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300">Source: {alert.source_ip}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-300">Destination: {alert.dest_ip}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-300">Risk Score: {alert.risk_score}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-300">Timestamp: {new Date(alert.timestamp).toLocaleString()}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
