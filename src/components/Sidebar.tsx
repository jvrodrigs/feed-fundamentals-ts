import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <>
            <aside className={styles.siderbar}>
                <img className={styles.cover} 
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                     alt="" />

                 <div className={styles.profile}>
                    <Avatar urlAvatar={"https://github.com/jvrodrigs.png"} />
                    <strong>João</strong>
                    <span>Developer</span>
                 </div>

                 <footer>
                    <a href="/#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                 </footer>
            </aside>
        </>
    )
}