import { AlertCard } from "@/components/alert-card";
import { Alert } from "@/types/alert";

async function fetchAlerts(): Promise<Alert[]> {
    const res = await fetch("http://127.0.0.1:8000/alerts", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch alerts");
    }

    return res.json();
}

export default async function AlertsPage() {
    const alerts = await fetchAlerts();

    return (
        <main className="p-8 space-y-4">
            <h1 className="text-3xl font-bold mb-4">Anomaly Alerts</h1>

            {alerts.length === 0 ? (
                <p className="text-gray-500">No alerts yet.</p>
            ) : (
                alerts.map((alert: Alert, idx: number) => (
                    <AlertCard key={idx} alert={alert} />
                ))
            )}
        </main>
    );
}
