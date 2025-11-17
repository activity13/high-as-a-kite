'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/Button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    lastFocusedRef.current = document.activeElement as HTMLElement;

    const focusable = contentRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Tab' && focusable && focusable.length > 0) {
        const focusArray = Array.from(focusable);
        const idx = focusArray.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey) {
          if (idx <= 0) {
            e.preventDefault();
            focusArray[focusArray.length - 1].focus();
          }
        } else {
          if (idx === focusArray.length - 1) {
            e.preventDefault();
            focusArray[0].focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      lastFocusedRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!mounted) return null;
  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={contentRef}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        <Button
          variant="ghost"
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded hover:bg-neutral-100 text-neutral-500">
          <span aria-hidden>×</span>
        </Button>
        {title && <h3 className="text-lg font-semibold mb-4 pr-8">{title}</h3>}
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
