import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [countLikes, setCountLikes] = useState(0);

    const handleTrashComment = () => {
        onDeleteComment(content)
    };

    const handleLikeInComment = () => {
        setCountLikes( (state) => {
            return state + 1;
        })
    }

    return(
        <>
            <div className={styles.comment}>
                <Avatar urlAvatar={"https://github.com/jvrodrigs.png"} hasBorder={false}/>

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>João</strong>
                                <time title='1 de Novembro de 2022'>Publcado há 1h atrás.</time>
                            </div>
                            <button onClick={handleTrashComment} title='Deletar comentário'>
                                <Trash size={24}/>
                            </button>
                        </header>
                        
                        <p> {content} </p>
                    </div>

                    <footer>
                        <button onClick={handleLikeInComment}>
                            <ThumbsUp/>
                            Aplaudir <span>{countLikes}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}