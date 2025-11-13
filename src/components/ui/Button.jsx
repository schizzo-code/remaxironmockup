import clsx from 'clsx'

export default function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-remax-red text-white hover:bg-red-700 focus:ring-remax-red',
    secondary: 'bg-remax-blue text-white hover:bg-blue-900 focus:ring-remax-blue',
    outline: 'border-2 border-remax-red text-remax-red hover:bg-remax-red hover:text-white',
    ghost: 'text-gray-700 hover:bg-gray-100',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-600',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
