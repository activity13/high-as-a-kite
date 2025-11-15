declare global {
  interface Window {
    dataLayer?: { push: (data: Record<string, any>) => void };
  }
}

export const track = (name: string, payload?: Record<string, any>) => {
  if (window?.dataLayer) {
    window.dataLayer.push({ event: name, ...payload });
  }
  // fallback
  console.log('[track]', name, payload || {});
};
