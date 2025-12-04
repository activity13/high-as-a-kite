declare global {
  interface Window {
    dataLayer?: { push: (data: Record<string, unknown>) => void };
  }
}

export const track = (name: string, payload?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: name, ...payload });
  }
  // fallback
  console.log('[track]', name, payload || {});
};
