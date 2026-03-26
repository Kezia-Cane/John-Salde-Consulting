"use client";

import { useState, useRef, useEffect } from "react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
const MINUTES = ["00", "15", "30", "45"];

interface DateTimePickerProps {
    value: string; // ISO datetime-local string
    onChange: (value: string) => void;
    error?: string;
    id?: string;
}

function toLocalISO(date: Date, hour: number, minute: number, ampm: "AM" | "PM"): string {
    let h = hour;
    if (ampm === "AM" && h === 12) h = 0;
    if (ampm === "PM" && h !== 12) h += 12;
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(h)}:${pad(minute)}`;
}

export default function DateTimePicker({ value, onChange, error, id }: DateTimePickerProps) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [open, setOpen] = useState(false);
    const [view, setView] = useState<"calendar" | "time">("calendar");

    // Parse initial value
    const parseValue = () => {
        if (!value) return null;
        const d = new Date(value);
        if (isNaN(d.getTime())) return null;
        return d;
    };

    const parsed = parseValue();
    const [selectedDate, setSelectedDate] = useState<Date | null>(parsed);
    const [calYear, setCalYear] = useState(parsed?.getFullYear() ?? today.getFullYear());
    const [calMonth, setCalMonth] = useState(parsed?.getMonth() ?? today.getMonth());
    const [selectedHour, setSelectedHour] = useState(parsed ? (() => {
        const h = parsed.getHours() % 12; return h === 0 ? 12 : h;
    })() : 9);
    const [selectedMinute, setSelectedMinute] = useState(parsed ? Math.floor(parsed.getMinutes() / 15) * 15 : 0);
    const [ampm, setAmpm] = useState<"AM" | "PM">(parsed ? (parsed.getHours() >= 12 ? "PM" : "AM") : "AM");

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const formatDisplay = () => {
        if (!selectedDate) return "";
        const d = selectedDate;
        const h = selectedHour;
        const m = String(selectedMinute).padStart(2, "0");
        return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} at ${h}:${m} ${ampm}`;
    };

    const commitSelection = (date: Date, h: number, min: number, ap: "AM" | "PM") => {
        const iso = toLocalISO(date, h, min, ap);
        onChange(iso);
    };

    const handleDayClick = (day: number) => {
        const d = new Date(calYear, calMonth, day);
        d.setHours(0, 0, 0, 0);
        if (d < today) return;
        setSelectedDate(d);
        commitSelection(d, selectedHour, selectedMinute, ampm);
        setView("time");
    };

    const handleTimeConfirm = () => {
        if (selectedDate) {
            commitSelection(selectedDate, selectedHour, selectedMinute, ampm);
        }
        setOpen(false);
    };

    const prevMonth = () => {
        if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); }
        else setCalMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); }
        else setCalMonth(m => m + 1);
    };

    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDayOfMonth(calYear, calMonth);

    const isToday = (day: number) => {
        const now = new Date();
        return calYear === now.getFullYear() && calMonth === now.getMonth() && day === now.getDate();
    };
    const isSelected = (day: number) =>
        selectedDate?.getFullYear() === calYear &&
        selectedDate?.getMonth() === calMonth &&
        selectedDate?.getDate() === day;
    const isPast = (day: number) => {
        const d = new Date(calYear, calMonth, day);
        d.setHours(0, 0, 0, 0);
        return d < today;
    };

    return (
        <div ref={containerRef} style={{ position: "relative" }}>
            {/* Trigger input */}
            <button
                type="button"
                id={id}
                onClick={() => { setOpen(o => !o); setView("calendar"); }}
                style={{
                    width: "100%",
                    background: "white",
                    border: `2px solid ${open ? "var(--color-accent)" : "transparent"}`,
                    padding: "15px 20px",
                    borderRadius: "20px",
                    boxShadow: "rgba(29, 59, 145, 0.04) 0px 10px 10px -5px",
                    fontFamily: "var(--font-body)",
                    color: selectedDate ? "var(--color-primary)" : "#a0aec0",
                    fontSize: "1rem",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    transition: "border-color 0.2s ease",
                }}
            >
                <span>{formatDisplay() || "Select date & time"}</span>
                <span className="material-symbols-outlined" style={{ fontSize: "1.2rem", color: "var(--color-accent)", flexShrink: 0 }}>
                    calendar_month
                </span>
            </button>

            {/* Picker Dropdown */}
            {open && (
                <div style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: 0,
                    right: 0,
                    background: "white",
                    borderRadius: "20px",
                    boxShadow: "0 20px 60px rgba(29,59,145,0.18)",
                    zIndex: 1000,
                    overflow: "hidden",
                    border: "1px solid rgba(29,59,145,0.08)",
                }}>
                    {/* Tab bar */}
                    <div style={{ display: "flex", borderBottom: "1px solid #f1f5f9" }}>
                        {(["calendar", "time"] as const).map(v => (
                            <button
                                key={v}
                                type="button"
                                onClick={() => setView(v)}
                                style={{
                                    flex: 1,
                                    padding: "12px",
                                    background: view === v ? "var(--color-primary)" : "white",
                                    color: view === v ? "white" : "#94a3b8",
                                    border: "none",
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 700,
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.4rem",
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
                                    {v === "calendar" ? "calendar_month" : "schedule"}
                                </span>
                                {v === "calendar" ? "Date" : "Time"}
                            </button>
                        ))}
                    </div>

                    {/* Calendar View */}
                    {view === "calendar" && (
                        <div style={{ padding: "1.25rem" }}>
                            {/* Month navigation */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                                <button type="button" onClick={prevMonth} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", borderRadius: "8px", color: "var(--color-primary)" }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>chevron_left</span>
                                </button>
                                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-primary)", fontSize: "0.95rem" }}>
                                    {MONTHS[calMonth]} {calYear}
                                </span>
                                <button type="button" onClick={nextMonth} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", borderRadius: "8px", color: "var(--color-primary)" }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>chevron_right</span>
                                </button>
                            </div>

                            {/* Day headers */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", marginBottom: "4px" }}>
                                {DAYS.map(d => (
                                    <div key={d} style={{ textAlign: "center", fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", fontFamily: "var(--font-display)", padding: "4px 0", letterSpacing: "0.05em" }}>
                                        {d}
                                    </div>
                                ))}
                            </div>

                            {/* Day grid */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                                {/* Empty cells for first day offset */}
                                {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                                    const past = isPast(day);
                                    const sel = isSelected(day);
                                    const tod = isToday(day);
                                    return (
                                        <button
                                            key={day}
                                            type="button"
                                            disabled={past}
                                            onClick={() => handleDayClick(day)}
                                            style={{
                                                width: "100%",
                                                aspectRatio: "1",
                                                borderRadius: "10px",
                                                border: tod && !sel ? "2px solid var(--color-accent)" : "2px solid transparent",
                                                background: sel ? "var(--color-primary)" : "transparent",
                                                color: sel ? "white" : past ? "#cbd5e1" : "var(--color-primary)",
                                                fontFamily: "var(--font-display)",
                                                fontWeight: sel ? 700 : 500,
                                                fontSize: "0.85rem",
                                                cursor: past ? "not-allowed" : "pointer",
                                                transition: "all 0.15s",
                                                opacity: past ? 0.35 : 1,
                                            }}
                                            onMouseEnter={e => { if (!past && !sel) (e.currentTarget as HTMLButtonElement).style.background = "#eef2ff"; }}
                                            onMouseLeave={e => { if (!sel) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Time View */}
                    {view === "time" && (
                        <div style={{ padding: "1.25rem" }}>
                            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-primary)", fontSize: "0.85rem", marginBottom: "1rem", textAlign: "center" }}>
                                {selectedDate ? `${MONTHS[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}` : "Pick a date first"}
                            </p>

                            {/* Hour */}
                            <div style={{ marginBottom: "1rem" }}>
                                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "var(--font-display)" }}>Hour</div>
                                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                    {HOURS.map(h => {
                                        const hNum = parseInt(h);
                                        const sel = selectedHour === hNum;
                                        return (
                                            <button key={h} type="button"
                                                onClick={() => { setSelectedHour(hNum); if (selectedDate) commitSelection(selectedDate, hNum, selectedMinute, ampm); }}
                                                style={{
                                                    width: "40px", height: "36px", borderRadius: "10px",
                                                    border: "none",
                                                    background: sel ? "var(--color-primary)" : "#f1f5f9",
                                                    color: sel ? "white" : "var(--color-primary)",
                                                    fontWeight: 700, fontSize: "0.85rem",
                                                    cursor: "pointer", transition: "all 0.15s",
                                                    fontFamily: "var(--font-display)",
                                                }}
                                            >{h}</button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Minute */}
                            <div style={{ marginBottom: "1rem" }}>
                                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "var(--font-display)" }}>Minute</div>
                                <div style={{ display: "flex", gap: "6px" }}>
                                    {MINUTES.map(m => {
                                        const mNum = parseInt(m);
                                        const sel = selectedMinute === mNum;
                                        return (
                                            <button key={m} type="button"
                                                onClick={() => { setSelectedMinute(mNum); if (selectedDate) commitSelection(selectedDate, selectedHour, mNum, ampm); }}
                                                style={{
                                                    flex: 1, height: "36px", borderRadius: "10px",
                                                    border: "none",
                                                    background: sel ? "var(--color-primary)" : "#f1f5f9",
                                                    color: sel ? "white" : "var(--color-primary)",
                                                    fontWeight: 700, fontSize: "0.85rem",
                                                    cursor: "pointer", transition: "all 0.15s",
                                                    fontFamily: "var(--font-display)",
                                                }}
                                            >{m}</button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* AM/PM */}
                            <div style={{ marginBottom: "1.25rem" }}>
                                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "var(--font-display)" }}>AM / PM</div>
                                <div style={{ display: "flex", gap: "6px" }}>
                                    {(["AM", "PM"] as const).map(ap => (
                                        <button key={ap} type="button"
                                            onClick={() => { setAmpm(ap); if (selectedDate) commitSelection(selectedDate, selectedHour, selectedMinute, ap); }}
                                            style={{
                                                flex: 1, height: "36px", borderRadius: "10px",
                                                border: "none",
                                                background: ampm === ap ? "var(--color-accent)" : "#f1f5f9",
                                                color: ampm === ap ? "var(--color-primary)" : "#64748b",
                                                fontWeight: 700, fontSize: "0.85rem",
                                                cursor: "pointer", transition: "all 0.15s",
                                                fontFamily: "var(--font-display)",
                                            }}
                                        >{ap}</button>
                                    ))}
                                </div>
                            </div>

                            {/* Confirm */}
                            <button
                                type="button"
                                onClick={handleTimeConfirm}
                                disabled={!selectedDate}
                                style={{
                                    width: "100%", padding: "12px",
                                    background: "linear-gradient(45deg, var(--color-accent) 0%, #d4ec4f 100%)",
                                    border: "none", borderRadius: "14px",
                                    fontFamily: "var(--font-display)", fontWeight: 700,
                                    color: "var(--color-primary)", fontSize: "0.9rem",
                                    cursor: selectedDate ? "pointer" : "not-allowed",
                                    opacity: selectedDate ? 1 : 0.5,
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>check_circle</span>
                                Confirm Selection
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
