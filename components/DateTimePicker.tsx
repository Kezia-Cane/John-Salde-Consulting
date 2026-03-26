"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

interface DateTimePickerProps {
    value: string;
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

// ── Dark mode hook ──────────────────────────────────────────
function usePrefersDark() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mq.matches);
        const handler = (e: MediaQueryListEvent) => setDark(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);
    return dark;
}

// ── Theme tokens ────────────────────────────────────────────
function useTheme(dark: boolean) {
    return {
        // Card background
        cardBg: dark ? "#1e2130" : "#f4f6fb",
        // Calendar body bg
        calBg: dark ? "#1e2130" : "#f4f6fb",
        // Tab bar bg
        tabBg: dark ? "#151827" : "white",
        tabActive: dark ? "#C6E03D" : "#1D3B91",
        tabActiveText: dark ? "#1D3B91" : "white",
        tabInactiveText: dark ? "#6b7280" : "#94a3b8",
        // Trigger button
        triggerBg: dark ? "#1e2130" : "white",
        triggerBorder: dark ? "#3b4160" : "transparent",
        triggerBorderFocus: "#C6E03D",
        triggerColor: dark ? "#e2e8f0" : "var(--color-primary)",
        triggerPlaceholder: dark ? "#6b7280" : "#a0aec0",
        // Calendar
        monthNavColor: dark ? "#C6E03D" : "#1D3B91",
        monthLabel: dark ? "#e2e8f0" : "#1D3B91",
        dayHeader: dark ? "#6b7280" : "#94a3b8",
        dayColor: dark ? "#e2e8f0" : "#1D3B91",
        dayPastColor: dark ? "#3b4160" : "#cbd5e1",
        dayHoverBg: dark ? "#2a2f47" : "#dde3f8",
        daySelectedBg: dark ? "#C6E03D" : "#1D3B91",
        daySelectedColor: dark ? "#1D3B91" : "white",
        dayTodayBorder: "#C6E03D",
        // Clock header
        clockHeaderBg: dark ? "#0d1022" : "#0F2560",
        clockBodyBg: dark ? "#1e2130" : "#f4f6fb",
        // Divider
        divider: dark ? "#2a2f47" : "#e2e8f0",
        // Cancel/OK
        cancelColor: dark ? "#a0aec0" : "#1D3B91",
        cancelHover: dark ? "#2a2f47" : "#e2e8f0",
        okActiveBg: "#C6E03D",
        okActiveColor: "#1D3B91",
    };
}

// ── Clock Face ──────────────────────────────────────────────
function ClockFace({
    mode, hour, minute, onHourChange, onMinuteChange, onModeChange, dark,
}: {
    mode: "hours" | "minutes";
    hour: number; minute: number;
    onHourChange: (h: number) => void;
    onMinuteChange: (m: number) => void;
    onModeChange: (m: "hours" | "minutes") => void;
    dark: boolean;
}) {
    const svgRef = useRef<SVGSVGElement>(null);
    const SIZE = 240;
    const CX = SIZE / 2; const CY = SIZE / 2;
    const R = 88; const DOT_R = 18;

    const getValueFromPoint = useCallback((clientX: number, clientY: number) => {
        const svg = svgRef.current;
        if (!svg) return;
        const rect = svg.getBoundingClientRect();
        const x = clientX - rect.left - CX;
        const y = clientY - rect.top - CY;
        let angle = (Math.atan2(y, x) * 180) / Math.PI + 90;
        if (angle < 0) angle += 360;
        if (mode === "hours") {
            let h = Math.round(angle / 30); if (h === 0) h = 12;
            onHourChange(h);
        } else {
            let m = Math.round(angle / 6); if (m === 60) m = 0;
            onMinuteChange(m);
        }
    }, [mode, onHourChange, onMinuteChange]);

    const handlePointerEvent = (e: React.PointerEvent<SVGSVGElement>) => {
        e.preventDefault();
        getValueFromPoint(e.clientX, e.clientY);
        if (e.type === "pointerup" && mode === "hours") onModeChange("minutes");
    };

    const toPos = (val: number, total: number, radius: number) => {
        const angle = ((val / total) * 360 - 90) * (Math.PI / 180);
        return { x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
    };

    const activeVal = mode === "hours" ? (hour === 12 ? 0 : hour) : minute;
    const activeTotal = mode === "hours" ? 12 : 60;
    const lineEnd = toPos(activeVal, activeTotal, R);

    const faceColor = dark ? "#252940" : "#e8ecf4";
    const handColor = dark ? "#C6E03D" : "#1D3B91";
    const dotFill = dark ? "#C6E03D" : "#1D3B91";
    const numColor = dark ? "#e2e8f0" : "#1D3B91";

    const hourPositions = Array.from({ length: 12 }, (_, i) => {
        const h = i + 1;
        const angle = ((h / 12) * 360 - 90) * (Math.PI / 180);
        return { h, x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
    });
    const minutePositions = Array.from({ length: 12 }, (_, i) => {
        const m = i * 5;
        const angle = ((m / 60) * 360 - 90) * (Math.PI / 180);
        return { m, x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
    });

    return (
        <svg ref={svgRef} width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}
            style={{ touchAction: "none", cursor: "pointer", userSelect: "none", display: "block", margin: "0 auto" }}
            onPointerDown={handlePointerEvent}
            onPointerMove={(e) => { if (e.buttons === 1) handlePointerEvent(e); }}
            onPointerUp={handlePointerEvent}
        >
            <circle cx={CX} cy={CY} r={CX - 4} fill={faceColor} />
            <circle cx={CX} cy={CY} r={4} fill={handColor} />
            <line x1={CX} y1={CY} x2={lineEnd.x} y2={lineEnd.y} stroke={handColor} strokeWidth={2} strokeLinecap="round" />
            {mode === "hours"
                ? hourPositions.map(({ h, x, y }) => {
                    const sel = h === hour;
                    return (
                        <g key={h}>
                            {sel && <circle cx={x} cy={y} r={DOT_R} fill={dotFill} />}
                            <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
                                fill={sel ? (dark ? "#1D3B91" : "white") : numColor}
                                fontSize="13" fontWeight={sel ? "700" : "500"}
                                fontFamily="var(--font-display, sans-serif)">{h}</text>
                        </g>
                    );
                })
                : minutePositions.map(({ m, x, y }) => {
                    const sel = m === minute;
                    return (
                        <g key={m}>
                            {sel && <circle cx={x} cy={y} r={DOT_R} fill={dotFill} />}
                            <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
                                fill={sel ? (dark ? "#1D3B91" : "white") : numColor}
                                fontSize="12" fontWeight={sel ? "700" : "500"}
                                fontFamily="var(--font-display, san-serif)">{String(m).padStart(2, "0")}</text>
                        </g>
                    );
                })
            }
        </svg>
    );
}

// ── Main Component ──────────────────────────────────────────
export default function DateTimePicker({ value, onChange, error, id }: DateTimePickerProps) {
    const dark = usePrefersDark();
    const t = useTheme(dark);

    const today = new Date(); today.setHours(0, 0, 0, 0);

    const [open, setOpen] = useState(false);
    const [view, setView] = useState<"calendar" | "time">("calendar");
    const [clockMode, setClockMode] = useState<"hours" | "minutes">("hours");

    const parseValue = () => { if (!value) return null; const d = new Date(value); return isNaN(d.getTime()) ? null : d; };
    const parsed = parseValue();

    const [selectedDate, setSelectedDate] = useState<Date | null>(parsed);
    const [calYear, setCalYear] = useState(parsed?.getFullYear() ?? today.getFullYear());
    const [calMonth, setCalMonth] = useState(parsed?.getMonth() ?? today.getMonth());
    const [selectedHour, setSelectedHour] = useState(parsed ? (() => { const h = parsed.getHours() % 12; return h === 0 ? 12 : h; })() : 9);
    const [selectedMinute, setSelectedMinute] = useState(parsed?.getMinutes() ?? 0);
    const [ampm, setAmpm] = useState<"AM" | "PM">(parsed ? (parsed.getHours() >= 12 ? "PM" : "AM") : "AM");

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const getDaysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
    const getFirstDay = (y: number, m: number) => new Date(y, m, 1).getDay();

    const formatDisplay = () => {
        if (!selectedDate) return "";
        return `${MONTHS[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()} — ${String(selectedHour).padStart(2, "0")}:${String(selectedMinute).padStart(2, "0")} ${ampm}`;
    };

    const commit = (date: Date, h: number, min: number, ap: "AM" | "PM") => onChange(toLocalISO(date, h, min, ap));

    const handleDayClick = (day: number) => {
        const d = new Date(calYear, calMonth, day); d.setHours(0, 0, 0, 0);
        if (d < today) return;
        setSelectedDate(d); commit(d, selectedHour, selectedMinute, ampm);
        setView("time"); setClockMode("hours");
    };

    const prevMonth = () => { if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); } else setCalMonth(m => m - 1); };
    const nextMonth = () => { if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); } else setCalMonth(m => m + 1); };

    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDay(calYear, calMonth);

    const isToday = (d: number) => { const n = new Date(); return calYear === n.getFullYear() && calMonth === n.getMonth() && d === n.getDate(); };
    const isSelected = (d: number) => selectedDate?.getFullYear() === calYear && selectedDate?.getMonth() === calMonth && selectedDate?.getDate() === d;
    const isPast = (d: number) => { const dt = new Date(calYear, calMonth, d); dt.setHours(0, 0, 0, 0); return dt < today; };

    const hDisp = String(selectedHour).padStart(2, "0");
    const mDisp = String(selectedMinute).padStart(2, "0");

    const tabStyle = (active: boolean) => ({
        flex: 1, padding: "12px 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
        background: active ? t.tabActive : t.tabBg,
        color: active ? t.tabActiveText : t.tabInactiveText,
        border: "none", cursor: "pointer",
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" as const,
        transition: "all 0.2s",
    });

    return (
        <div ref={containerRef} style={{ position: "relative" }}>
            {/* ── Trigger ── */}
            <button type="button" id={id}
                onClick={() => { setOpen(o => !o); setView("calendar"); setClockMode("hours"); }}
                style={{
                    width: "100%", background: t.triggerBg,
                    border: `2px solid ${open ? t.triggerBorderFocus : t.triggerBorder}`,
                    padding: "15px 20px", borderRadius: "20px",
                    boxShadow: dark ? "0 4px 20px rgba(0,0,0,0.3)" : "rgba(29,59,145,0.04) 0px 10px 10px -5px",
                    fontFamily: "var(--font-body)",
                    color: selectedDate ? t.triggerColor : t.triggerPlaceholder,
                    fontSize: "1rem", textAlign: "left", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem",
                    transition: "border-color 0.2s",
                }}
            >
                <span>{formatDisplay() || "Select date & time"}</span>
                <span className="material-symbols-outlined" style={{ fontSize: "1.2rem", color: "#C6E03D", flexShrink: 0 }}>calendar_month</span>
            </button>

            {/* ── Overlay ── */}
            {open && (
                <>
                    <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: dark ? "rgba(0,0,0,0.7)" : "rgba(10,20,60,0.45)", zIndex: 99998, backdropFilter: "blur(4px)" }} />

                    <div style={{
                        position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
                        width: "min(420px, calc(100vw - 24px))",
                        maxHeight: "calc(100vh - 40px)", overflowY: "auto",
                        background: t.cardBg,
                        borderRadius: "24px",
                        boxShadow: dark ? "0 32px 80px rgba(0,0,0,0.6)" : "0 32px 80px rgba(29,59,145,0.25)",
                        zIndex: 99999, overflow: "hidden",
                        border: `1px solid ${dark ? "#2a2f47" : "rgba(29,59,145,0.10)"}`,
                    }}>
                        {/* Tab bar */}
                        <div style={{ display: "flex", borderBottom: `2px solid ${t.divider}` }}>
                            <button type="button" onClick={() => setView("calendar")} style={tabStyle(view === "calendar")}>
                                <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>calendar_month</span>
                                Date
                            </button>
                            <button type="button" onClick={() => setView("time")} style={tabStyle(view === "time")}>
                                <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>schedule</span>
                                Time
                            </button>
                        </div>

                        {/* ── CALENDAR VIEW ── */}
                        {view === "calendar" && (
                            <div style={{ padding: "1.25rem", background: t.calBg }}>
                                {/* Month nav */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                                    <button type="button" onClick={prevMonth}
                                        style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", borderRadius: "10px", color: t.monthNavColor, minWidth: 44, minHeight: 44 }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>chevron_left</span>
                                    </button>
                                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: t.monthLabel, fontSize: "0.95rem" }}>
                                        {MONTHS[calMonth]} {calYear}
                                    </span>
                                    <button type="button" onClick={nextMonth}
                                        style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", borderRadius: "10px", color: t.monthNavColor, minWidth: 44, minHeight: 44 }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>chevron_right</span>
                                    </button>
                                </div>

                                {/* Day headers */}
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "2px", marginBottom: "4px" }}>
                                    {DAYS.map(d => <div key={d} style={{ textAlign: "center", fontSize: "0.7rem", fontWeight: 700, color: t.dayHeader, fontFamily: "var(--font-display)", padding: "4px 0", letterSpacing: "0.05em" }}>{d}</div>)}
                                </div>

                                {/* Days */}
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "3px" }}>
                                    {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
                                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                                        const past = isPast(day), sel = isSelected(day), tod = isToday(day);
                                        return (
                                            <button key={day} type="button" disabled={past} onClick={() => handleDayClick(day)}
                                                style={{
                                                    width: "100%", aspectRatio: "1", borderRadius: "10px",
                                                    border: `2px solid ${tod && !sel ? t.dayTodayBorder : "transparent"}`,
                                                    background: sel ? t.daySelectedBg : "transparent",
                                                    color: sel ? t.daySelectedColor : past ? t.dayPastColor : t.dayColor,
                                                    fontFamily: "var(--font-display)", fontWeight: sel ? 700 : 500,
                                                    fontSize: "0.85rem", cursor: past ? "not-allowed" : "pointer",
                                                    transition: "all 0.15s", opacity: past ? 0.3 : 1,
                                                    minHeight: "36px",
                                                }}
                                                onMouseEnter={e => { if (!past && !sel) (e.currentTarget as HTMLButtonElement).style.background = t.dayHoverBg; }}
                                                onMouseLeave={e => { if (!sel) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                                            >{day}</button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ── TIME VIEW ── */}
                        {view === "time" && (
                            <div>
                                {/* Clock header */}
                                <div style={{ padding: "18px 24px 12px", background: t.clockHeaderBg, textAlign: "center" }}>
                                    <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "10px", fontFamily: "var(--font-display)" }}>
                                        Select Time
                                    </div>
                                    {/* Time display */}
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", marginBottom: "10px" }}>
                                        <button type="button" onClick={() => setClockMode("hours")} style={{
                                            background: clockMode === "hours" ? "rgba(198,224,61,0.18)" : "none",
                                            border: "none", cursor: "pointer", padding: "4px 12px", borderRadius: "10px",
                                            fontSize: "3rem", fontWeight: 800, lineHeight: 1,
                                            color: clockMode === "hours" ? "#C6E03D" : "rgba(255,255,255,0.4)",
                                            fontFamily: "var(--font-display)", transition: "all 0.2s",
                                            minHeight: "44px",
                                        }}>{hDisp}</button>
                                        <span style={{ fontSize: "3rem", fontWeight: 800, color: "rgba(255,255,255,0.3)", lineHeight: 1 }}>:</span>
                                        <button type="button" onClick={() => setClockMode("minutes")} style={{
                                            background: clockMode === "minutes" ? "rgba(198,224,61,0.18)" : "none",
                                            border: "none", cursor: "pointer", padding: "4px 12px", borderRadius: "10px",
                                            fontSize: "3rem", fontWeight: 800, lineHeight: 1,
                                            color: clockMode === "minutes" ? "#C6E03D" : "rgba(255,255,255,0.4)",
                                            fontFamily: "var(--font-display)", transition: "all 0.2s",
                                            minHeight: "44px",
                                        }}>{mDisp}</button>
                                        {/* AM / PM */}
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "8px", gap: "6px" }}>
                                            {(["AM", "PM"] as const).map(ap => (
                                                <button key={ap} type="button"
                                                    onClick={() => { setAmpm(ap); if (selectedDate) commit(selectedDate, selectedHour, selectedMinute, ap); }}
                                                    style={{
                                                        background: ampm === ap ? "rgba(198,224,61,0.2)" : "rgba(255,255,255,0.05)",
                                                        border: `1.5px solid ${ampm === ap ? "#C6E03D" : "rgba(255,255,255,0.15)"}`,
                                                        borderRadius: "8px", padding: "4px 10px",
                                                        color: ampm === ap ? "#C6E03D" : "rgba(255,255,255,0.35)",
                                                        fontWeight: 700, fontSize: "0.78rem", cursor: "pointer",
                                                        fontFamily: "var(--font-display)", transition: "all 0.15s",
                                                        minWidth: "48px", minHeight: "36px",
                                                    }}>{ap}</button>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Mode arrows */}
                                    <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                                        {(["hours", "minutes"] as const).map((m, i) => (
                                            <button key={m} type="button" onClick={() => setClockMode(m)} style={{
                                                background: clockMode === m ? "rgba(255,255,255,0.1)" : "none",
                                                border: "none", cursor: "pointer", padding: "6px 16px", minHeight: "44px",
                                                color: "rgba(255,255,255,0.6)", borderRadius: "8px",
                                                display: "flex", alignItems: "center", gap: "4px",
                                                fontFamily: "var(--font-display)", fontSize: "0.7rem", fontWeight: 700,
                                            }}>
                                                {i === 0 && <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>chevron_left</span>}
                                                {m.charAt(0).toUpperCase() + m.slice(1)}
                                                {i === 1 && <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>chevron_right</span>}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Clock face */}
                                <div style={{ background: t.clockBodyBg, padding: "20px 16px 8px", display: "flex", justifyContent: "center" }}>
                                    <ClockFace
                                        mode={clockMode} hour={selectedHour} minute={selectedMinute} dark={dark}
                                        onHourChange={h => { setSelectedHour(h); if (selectedDate) commit(selectedDate, h, selectedMinute, ampm); }}
                                        onMinuteChange={m => { setSelectedMinute(m); if (selectedDate) commit(selectedDate, selectedHour, m, ampm); }}
                                        onModeChange={setClockMode}
                                    />
                                </div>

                                {/* Cancel / OK */}
                                <div style={{ background: t.clockBodyBg, display: "flex", justifyContent: "flex-end", gap: "6px", padding: "8px 16px 18px", borderTop: `1px solid ${t.divider}` }}>
                                    <button type="button" onClick={() => { setView("calendar"); setClockMode("hours"); }}
                                        style={{ background: "none", border: "none", cursor: "pointer", padding: "12px 20px", minHeight: "44px", minWidth: "80px", color: t.cancelColor, fontWeight: 700, fontSize: "0.85rem", fontFamily: "var(--font-display)", letterSpacing: "0.06em", borderRadius: "10px", transition: "background 0.15s" }}
                                        onMouseEnter={e => (e.currentTarget.style.background = t.cancelHover)}
                                        onMouseLeave={e => (e.currentTarget.style.background = "none")}
                                    >CANCEL</button>
                                    <button type="button" onClick={() => { if (selectedDate) commit(selectedDate, selectedHour, selectedMinute, ampm); setOpen(false); }} disabled={!selectedDate}
                                        style={{ background: selectedDate ? t.okActiveBg : "transparent", border: "none", cursor: selectedDate ? "pointer" : "not-allowed", padding: "12px 24px", minHeight: "44px", minWidth: "60px", color: selectedDate ? t.okActiveColor : "#6b7280", fontWeight: 900, fontSize: "0.85rem", fontFamily: "var(--font-display)", letterSpacing: "0.08em", borderRadius: "10px", transition: "opacity 0.15s" }}
                                        onMouseEnter={e => { if (selectedDate) e.currentTarget.style.opacity = "0.85"; }}
                                        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                                    >OK</button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
