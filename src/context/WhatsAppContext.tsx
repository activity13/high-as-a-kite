'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WhatsAppContextType {
  message: string | null;
  setWhatsAppMessage: (message: string | null) => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(
  undefined,
);

export const WhatsAppProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  const setWhatsAppMessage = (msg: string | null) => {
    setMessage(msg);
  };

  return (
    <WhatsAppContext.Provider value={{ message, setWhatsAppMessage }}>
      {children}
    </WhatsAppContext.Provider>
  );
};

export const useWhatsApp = () => {
  const context = useContext(WhatsAppContext);
  if (context === undefined) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
};
