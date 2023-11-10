import styles from './button.module.css'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    outlined?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    children,
    variant = 'primary',
    outlined = false,
    type = 'button',
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[`button--${variant}`]} ${outlined ? styles['button--outline'] : ''}`}
            {...props}
        >
            {children}
        </button>
    )
}