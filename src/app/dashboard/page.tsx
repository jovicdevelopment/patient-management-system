import {
  UserPlus,
  HeartPulse,
  Clock,
  Users2,
  Hospital,
  CircleX,
  ArrowRight,
} from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const STATS = [
  { label: "Today's Patients", value: "148", note: "+12% vs yesterday", icon: Users2 },
  { label: "In Queue", value: "34", note: "Avg wait time 14m", icon: Clock },
  { label: "In Consultation", value: "12", note: "6 active physicians", icon: HeartPulse },
  { label: "Admitted", value: "42", note: "85% bed occupancy", icon: Hospital },
  { label: "Discharged", value: "18", note: "Completed checkouts", icon: CircleX },
];

const PIPELINE = [
  { label: "Reception", count: 12 },
  { label: "Triage", count: 8 },
  { label: "Consultation", count: 6 },
  { label: "Lab / Imaging", count: 5 },
  { label: "Pharmacy", count: 3 },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Clinical Overview
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Real-time status of hospital patients and resources
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="sm">
              <UserPlus className="mr-2 h-4 w-4" />
              Register Patient
            </Button>
            <Button size="sm" variant="outline">
              <HeartPulse className="mr-2 h-4 w-4" />
              Start Triage
            </Button>
            <Button size="sm" variant="outline">
              <Clock className="mr-2 h-4 w-4" />
              View Queue Console
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map(({ label, value, note, icon: Icon }) => (
            <Card key={label} className="p-5">
              <div className="mb-4 flex items-start justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  {label}
                </p>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <p className="text-3xl font-semibold text-foreground">{value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{note}</p>
            </Card>
          ))}
        </div>

        {/* Pipeline */}
        <Card className="p-6">
          <h2 className="mb-5 text-base font-semibold text-foreground">
            Active Patient Flow Pipeline
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {PIPELINE.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-3">
                <div className="w-[186px] rounded-md border border-border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    {stage.label}
                  </p>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-xl font-semibold text-foreground">
                      {stage.count}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Patients
                    </span>
                  </div>
                </div>
                {i < PIPELINE.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
