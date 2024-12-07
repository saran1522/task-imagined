import React from "react";
import DaySelector from "./components/DaySelector";
import AllTodos from "./components/AllTodos";
import AddButton from "./components/AddButton";

function Page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white">
      <DaySelector />
      <AllTodos />
      <AddButton />
    </div>
  );
}

export default Page;
