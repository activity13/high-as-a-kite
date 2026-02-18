import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  level: string;
  persons: number;
  phone: string;
  message: string;
  marketingConsent: boolean;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  level,
  persons,
  phone,
  message,
  marketingConsent,
}) => (
  <div
    style={{
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6,
    }}>
    {/* Header with HAAK branding */}
    <div
      style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
      <h1
        style={{
          margin: 0,
          fontSize: '28px',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: 'Helvetica, Arial, sans-serif',
        }}>
        HAAK
      </h1>
      <p
        style={{
          margin: '8px 0 0 0',
          fontSize: '12px',
          fontWeight: '300',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          opacity: 0.9,
        }}>
        High As A Kite - Contact Form Submission
      </p>
    </div>

    {/* Content */}
    <div style={{ padding: '24px' }}>
      <h2
        style={{
          margin: '0 0 24px 0',
          fontSize: '20px',
          fontWeight: '600',
          color: '#3b82f6',
        }}>
        Nuevo Contacto desde la Web
      </h2>

      {/* Contact Details Card */}
      <div
        style={{
          backgroundColor: '#262626',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '24px',
          border: '1px solid #404040',
        }}>
        <div style={{ marginBottom: '16px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: '#9ca3af',
              letterSpacing: '0.5px',
              marginBottom: '4px',
            }}>
            Nombre
          </label>
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: '500',
              color: '#ffffff',
            }}>
            {name}
          </p>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: '#9ca3af',
              letterSpacing: '0.5px',
              marginBottom: '4px',
            }}>
            Email
          </label>
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: '500',
              color: '#3b82f6',
            }}>
            {email}
          </p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: '#9ca3af',
              letterSpacing: '0.5px',
              marginBottom: '4px',
            }}>
            Personas
          </label>
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: '500',
              color: '#3b82f6',
            }}>
            {persons}
          </p>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: '#9ca3af',
              letterSpacing: '0.5px',
              marginBottom: '4px',
            }}>
            Teléfono
          </label>
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: '500',
              color: '#3b82f6',
            }}>
            {phone}
          </p>
        </div>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: '#9ca3af',
              letterSpacing: '0.5px',
              marginBottom: '4px',
            }}>
            Nivel de Experiencia
          </label>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500',
            }}>
            {level}
          </span>
        </div>
      </div>

      {/* Message Section */}
      <div style={{ marginBottom: '24px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            color: '#9ca3af',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}>
          Mensaje
        </label>
        <div
          style={{
            backgroundColor: '#1f2937',
            border: '1px solid #374151',
            borderRadius: '8px',
            padding: '20px',
            borderLeft: '4px solid #3b82f6',
          }}>
          <p
            style={{
              margin: 0,
              fontSize: '15px',
              lineHeight: 1.7,
              color: '#e5e7eb',
              whiteSpace: 'pre-wrap',
            }}>
            {message}
          </p>
        </div>
      </div>

      {/* Marketing Consent */}
      <div
        style={{
          backgroundColor: marketingConsent ? '#065f46' : '#7f1d1d',
          borderRadius: '8px',
          padding: '16px',
          border: `1px solid ${marketingConsent ? '#059669' : '#dc2626'}`,
        }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: marketingConsent ? '#10b981' : '#ef4444',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>
            {marketingConsent ? '✓' : '✗'}
          </div>
          <span
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: marketingConsent ? '#a7f3d0' : '#fca5a5',
            }}>
            Consentimiento de Marketing:{' '}
            {marketingConsent ? 'ACEPTADO' : 'RECHAZADO'}
          </span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        backgroundColor: '#111111',
        padding: '20px 24px',
        textAlign: 'center',
        borderTop: '1px solid #404040',
      }}>
      <p
        style={{
          margin: 0,
          fontSize: '12px',
          color: '#6b7280',
        }}>
        Este mensaje fue enviado desde el formulario de contacto de{' '}
        <span style={{ color: '#3b82f6', fontWeight: '500' }}>haak.com</span>
      </p>
    </div>
  </div>
);
