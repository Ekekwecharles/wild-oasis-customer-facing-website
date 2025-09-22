"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Range {
  from: Date | undefined;
  to: Date | undefined;
}

interface ReservationContextType {
  range: Range;
  setRange: React.Dispatch<React.SetStateAction<Range>>;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

const initialState: Range = { from: undefined, to: undefined };

function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<Range>(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used inside ReservationProvider");
  }
  return context;
}

export { ReservationProvider, useReservation };
