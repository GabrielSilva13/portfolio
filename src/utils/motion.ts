type TextVariantProps = {
  delay?: number
}

type FadeInProps = {
  direction: 'up' | 'down' | 'left' | 'right' | ''
  type: 'inertia' | 'spring' | 'tween' | 'keyframes' | 'just' | ''
  delay: number
  duration: number
}

type ZoomInProps = {
  delay: number
  duration: number
}

type SlideInProps = NonNullable<unknown> & FadeInProps

type StaggerContainerProps = {
  staggerChildren?: number
  delayChildren?: number
}

export const textVariant = ({ delay }: TextVariantProps) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  }
}

export const fadeIn = ({ delay, direction, duration, type }: FadeInProps) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }
}

export const zoomIn = ({ delay, duration }: ZoomInProps) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }
}

export const slideIn = ({ delay, direction, duration, type }: SlideInProps) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }
}

export const staggerContainer = ({
  delayChildren,
  staggerChildren,
}: StaggerContainerProps) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
