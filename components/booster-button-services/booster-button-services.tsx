import styles from './booster-button-services.module.css';

interface Props {
    buttonText: string;
    onClick?: () => void;
}

export function BoosterButtonServices(props: Props) {
    return (
        <button className={styles.button} onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
}
