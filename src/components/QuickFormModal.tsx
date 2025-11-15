'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Modal from './ui/Modal';
import { QuickForm } from './QuickForm';

interface QuickFormModalProps {
  triggerLabel?: string;
  onOpen?: () => void;
  buttonClassName?: string;
}

export const QuickFormModal = ({
  triggerLabel,
  onOpen,
  buttonClassName,
}: QuickFormModalProps) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('translation.translations');

  const handleOpen = () => {
    onOpen?.();
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={
          buttonClassName ??
          'px-6 py-3 rounded bg-teal-900 text-white text-sm font-medium'
        }>
        {triggerLabel ?? t('finalCta.buttons.form')}
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title={t('form.title')}>
        {/* QuickForm renders a section; it's fine inside modal context */}
        <QuickForm />
      </Modal>
    </>
  );
};

export default QuickFormModal;
