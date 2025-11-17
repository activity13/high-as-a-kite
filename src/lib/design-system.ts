export const haakDesign = {
  // Espaciado consistente
  spacing: {
    section: 'py-16 md:py-24',
    container: 'container mx-auto px-4 md:px-6 lg:px-8',
    card: 'p-6',
    gap: 'gap-4',
  },

  // Tipografía (usando tu Stretch Pro)
  typography: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-base-content',
    h2: 'text-3xl md:text-4xl font-bold tracking-tight text-base-content',
    h3: 'text-2xl md:text-3xl font-semibold text-base-content',
    body: 'text-base leading-relaxed text-base-content font-helvetica',
    small: 'text-sm text-base-content/70',
  },

  // Componentes DaisyUI
  components: {
    // Botones - SIEMPRE usar estas clases
    button: {
      primary: 'btn btn-primary',
      secondary: 'btn btn-secondary',
      accent: 'btn btn-accent',
      ghost: 'btn btn-ghost',
      outline: 'btn btn-outline',
      // Tamaños consistentes
      sizes: {
        sm: 'btn-sm',
        md: '', // tamaño por defecto
        lg: 'btn-lg',
      },
    },

    // Cards
    card: {
      default: 'card bg-base-100 shadow-lg',
      bordered: 'card bg-base-100 border border-base-300',
      compact: 'card bg-base-100 shadow-lg card-compact',
      body: 'card-body',
    },

    // Inputs
    input: {
      default: 'input input-bordered w-full',
      primary: 'input input-bordered input-primary w-full',
      sizes: {
        sm: 'input-sm',
        md: '', // por defecto
        lg: 'input-lg',
      },
    },

    // Badges
    badge: {
      primary: 'badge badge-primary',
      secondary: 'badge badge-secondary',
      accent: 'badge badge-accent',
      success: 'badge badge-success',
      warning: 'badge badge-warning',
      error: 'badge badge-error',
    },
  },
} as const;
