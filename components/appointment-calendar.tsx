"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

interface AppointmentCalendarProps {
  salonId: string
  onSelectDate?: (date: Date) => void
  selectedDate?: Date | null
}

export default function AppointmentCalendar({
  salonId,
  onSelectDate,
  selectedDate: propSelectedDate,
}: AppointmentCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(propSelectedDate || null)

  // Gerçek uygulamada bu veriler API'den gelecek
  const disabledDates = [
    new Date(2023, 4, 10), // 10 Mayıs 2023
    new Date(2023, 4, 12), // 12 Mayıs 2023
    new Date(2023, 4, 20), // 20 Mayıs 2023
  ]

  const handleSelect = (date: Date | undefined) => {
    if (!date) return

    setSelectedDate(date)
    if (onSelectDate) {
      onSelectDate(date)
    }
  }

  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <Calendar
        mode="single"
        selected={selectedDate || undefined}
        onSelect={handleSelect}
        disabled={(date) => {
          // Geçmiş tarihleri devre dışı bırak
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          // Pazar günlerini devre dışı bırak
          const isSunday = date.getDay() === 0

          // Özel olarak devre dışı bırakılan tarihleri kontrol et
          const isDisabled = disabledDates.some(
            (disabledDate) =>
              disabledDate.getDate() === date.getDate() &&
              disabledDate.getMonth() === date.getMonth() &&
              disabledDate.getFullYear() === date.getFullYear(),
          )

          return date < today || isSunday || isDisabled
        }}
        className="rounded-md border-0"
      />

      {selectedDate && (
        <div className="mt-4">
          <h4 className="mb-2 font-medium text-gray-800">Müsait Saatler</h4>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            <Button
              variant="outline"
              className="border-gray-200 hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple"
            >
              09:00
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple"
            >
              09:30
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple"
            >
              10:00
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple"
            >
              10:30
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple"
            >
              11:00
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple"
            >
              11:30
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple"
            >
              13:00
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple"
            >
              13:30
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
