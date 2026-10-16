import "@scss/components/_calendarPicker.scss";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { ko } from 'date-fns/locale'
import React from "react";

interface Props {
    calendarMode: string;
    setCalendarMode: React.Dispatch<React.SetStateAction<"" | "start" | "end">>;
    startDate: Date;
    endDate: Date;
    setStartDate: React.Dispatch<React.SetStateAction<Date>>;
    setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}


const CalendarPicker: React.FC<Props> = ({ calendarMode, setCalendarMode, startDate, endDate, setStartDate, setEndDate }) => {
    const [month, setMonth] = React.useState<Date>(calendarMode === 'start' ? startDate : endDate);


    return <>
        <div className="calendarArea">
            <section className="calendar-container">
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                    <h2 style={{ color: "white" }}>{calendarMode === 'start' ? '시작' : '종료'}일 설정</h2>
                    <div className="close-btn">
                        <img
                            src='/img/list_btn_close.png'
                            onClick={() => {
                                setCalendarMode('');
                            }}
                        />
                    </div>
                </div>
                <DayPicker
                    mode="single"
                    locale={ko}
                    disabled={calendarMode === 'start' ? { before: new Date() } : { before: startDate }}
                    month={month}
                    onMonthChange={(date) => {
                        console.log(date);
                        setMonth(date!);
                    }}
                    selected={calendarMode === 'start' ? startDate : endDate}
                    onSelect={(date) => {
                        if (calendarMode === 'start') setStartDate(date!);
                        else setEndDate(date!);
                        setCalendarMode('');
                    }}
                />
            </section>
        </div>
    </>
}
export default CalendarPicker