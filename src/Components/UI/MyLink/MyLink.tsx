import { ReactNode } from 'react';
import styles from './MyLink.module.css'

interface MyButtonProps {
    children?:ReactNode,
    href?:string,
    className?:string,
}

const MyButton: React.FC<MyButtonProps> = ({children,href, className}) => {
    return (
        <a className={`${styles.weight_link} ${className}`} href={href}>
            {children}
        </a>
    );
};

export default MyButton;