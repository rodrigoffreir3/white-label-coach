import { useState } from "react";
import TrainerSidebar from "@/components/trainer/TrainerSidebar";
import StudentsView from "@/components/trainer/StudentsView";
import WorkoutsView from "@/components/trainer/WorkoutsView";
import ExercisesView from "@/components/trainer/ExercisesView";
import ChatView from "@/components/trainer/ChatView";
import AnnouncementsView from "@/components/trainer/AnnouncementsView";
import WhiteLabelSettings from "@/components/trainer/WhiteLabelSettings";

const Dashboard = () => {
  const [activeView, setActiveView] = useState("students");

  const renderView = () => {
    switch (activeView) {
      case "students":
        return <StudentsView />;
      case "workouts":
        return <WorkoutsView />;
      case "exercises":
        return <ExercisesView />;
      case "chat":
        return <ChatView />;
      case "announcements":
        return <AnnouncementsView />;
      case "settings":
        return <WhiteLabelSettings />;
      default:
        return <StudentsView />;
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <TrainerSidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
        {renderView()}
      </main>
    </div>
  );
};

export default Dashboard;
