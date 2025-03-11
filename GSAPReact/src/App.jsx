import { useEffect, useState } from "react";
import gsap from "gsap";
import { Switch } from "@headlessui/react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    gsap.to("body", {
      backgroundColor: darkMode ? "#1a202c" : "#f3f4f6",
      color: darkMode ? "#f3f4f6" : "#1a202c",
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [darkMode]);

  useEffect(() => {
    gsap.to(".toggle-circle", {
      x: darkMode ? 20 : 0,
      backgroundColor: darkMode ? "#1a202c" : "#ffffff",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
        <Sun className="text-yellow-500" />
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className="relative inline-flex items-center h-6 w-11 rounded-full bg-gray-300 dark:bg-gray-600 p-1"
        >
          <span className="sr-only">Toggle Dark Mode</span>
          <span className="toggle-circle inline-block w-5 h-5 transform bg-white rounded-full shadow-lg"></span>
        </Switch>
        <Moon className="text-gray-500" />
      </div>
    </div>
  );
}
