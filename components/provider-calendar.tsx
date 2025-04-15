"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function ProviderCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Gerçek uygulamada bu veriler API'den gelecek
  const appointments = [
    { date: new Date(2023, 4, 15), count: 2 }, // 15 Mayıs 2023
    { date: new Date(2023, 4, 16), count: 1 }, // 16 Mayıs 2023
    { date: new Date(2023, 4, 18), count: 3 }, // 18 Mayıs 2023
    { date: new Date(2023, 4, 22), count: 2 }, // 22 Mayıs 2023
  ]

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border-0"
        modifiers={{
          booked: appointments.map((a) => a.date),
        }}
        modifiersStyles={{
          booked: {
            fontWeight: "bold",
            backgroundColor: "rgba(51, 0, 140, 0.1)",
            color: "#33008c",
            borderRadius: "0.25rem",
          },
        }}
        components={{
          DayContent: (props) => {
            const appointment = appointments.find(
              (a) =>
                a.date.getDate() === props.date.getDate() &&
                a.date.getMonth() === props.date.getMonth() &&
                a.date.getFullYear() === props.date.getFullYear(),
            )

            return (
              <div className="relative flex h-full w-full items-center justify-center">
                {props.date.getDate()}
                {appointment && (
                  <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-purple"></div>
                )}
              </div>
            )
          },
        }}
      />

      {date && (
        <div className="mt-4">
          <h4 className="mb-2 font-medium text-gray-800">
            {date.toLocaleDateString("tr-TR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h4>

          <div className="space-y-2">
            <div className="rounded-lg border border-gray-100 bg-white p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-800">09:00 - 09:30</div>
                <div className="text-sm text-gray-800">Saç Kesimi</div>
              </div>
              <div className="text-sm text-gray-800">Ayşe Yılmaz</div>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-800">11:00 - 12:00</div>
                <div className="text-sm text-gray-800">Saç Boyama</div>
              </div>
              <div className="text-sm text-gray-800">Fatma Demir</div>
            </div>

            <div className="rounded-lg border border-dashed border-gray-200 p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-800">14:00 - 14:30</div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-brand-purple hover:bg-gray-50 hover:text-brand-700"
                >
                  Bloke Et
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
