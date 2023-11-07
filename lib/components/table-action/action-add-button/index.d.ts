import './style.css';
/**
 * @description
 * @author Huang Wenjie
 * @createDate 2023-10-08
 */
import type { ReactNode } from 'react';
interface PropsType {
    children: ReactNode;
    handleClick: () => void;
    width: number;
    height: number;
    type?: 'col' | 'row';
    childrenIsMoverBar?: boolean;
    bindId: string;
}
export default function AddButton(props: PropsType): import("react/jsx-runtime").JSX.Element;
export {};
