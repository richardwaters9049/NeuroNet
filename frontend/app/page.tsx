import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to NeuroNet</h1>
        <p className="text-gray-600">The real-time network anomaly detection platform.</p>
        <Button>Get Started</Button>
      </div>
    </main>
  );
}
