import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    urlAvatar: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, urlAvatar }: AvatarProps) {
    return(
        <>
            <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
                src={urlAvatar}
                alt="Imagem de Perfil do Usuário"
            />
        </>
    )
}