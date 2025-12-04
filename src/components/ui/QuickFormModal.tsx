'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Modal from './Modal';
import { QuickForm } from '../QuickForm';
import { CTAButton } from '@/components/ui/CTAButton';

interface QuickFormModalProps {
  triggerLabel?: string;
  onOpen?: () => void;
  buttonClassName?: string;
}

export const QuickFormModal = ({
  triggerLabel,
  onOpen,
}: QuickFormModalProps) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('translation.translations');

  const handleOpen = () => {
    onOpen?.();
    setOpen(true);
  };

  return (
    <>
      <CTAButton
        type="button"
        variant="secondary"
        size="lg"
        onClick={handleOpen}>
        {triggerLabel ?? t('finalCta.buttons.form')}
      </CTAButton>
      <Modal open={open} onClose={() => setOpen(false)} title={t('form.title')}>
        {/* QuickForm renders a section; it's fine inside modal context */}
        <QuickForm />
      </Modal>
    </>
  );
};

export default QuickFormModal;
