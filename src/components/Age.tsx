import React, { useState } from "react";
import styles from "./styles.module.css";
const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

type days = { value: string; label: string };
const days: days[] = [];
for (let i = 1; i <= 31; i++) {
  const value = String(i).padStart(2, "0");
  days.push({ value, label: value });
}

type years = { value: string; label: string };
const years: years[] = [];
const currentYear = new Date().getFullYear();
for (let i = 0; i < 100; i++) {
  const value = String(currentYear - i);
  years.push({ value, label: value });
}

function BirthdaySelects() {
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className={styles.ageContainer}>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Month</option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
      <select value={selectedDay} onChange={handleDayChange}>
        <option value="">Day</option>
        {days.map((day) => (
          <option key={day.value} value={day.value}>
            {day.label}
          </option>
        ))}
      </select>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year.value} value={year.value}>
            {year.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BirthdaySelects;
