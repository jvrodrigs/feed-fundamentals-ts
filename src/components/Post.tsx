import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FormEvent, useState} from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface Content {
    type: 'paragraph' | 'link';
    content: string;
  }
  
  export interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
  }

export function Post({ author, publishedAt, content }: PostProps){

    const [comments, setComments] = useState(['O primeiro comentário do Array!']);
    const [newCommentEvent, setNewCommentEvent] = useState('');
    
    const isInputCommentEmpty = newCommentEvent.length === 0;

    const dateTitleFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const dateRelativeToNowString = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const createNewComent = (event: FormEvent) => {
        event.preventDefault()        

        setComments([...comments, newCommentEvent]);
        setNewCommentEvent('');
    }

    function deleteComment(commentDelet: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentDelet;
        })

        setComments(commentsWithoutDeletedOne);
    }

    return(
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar urlAvatar={author.avatarUrl}/>
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>

                    <time
                        title={dateTitleFormatted}
                    >{dateRelativeToNowString}</time>
                </header>

                <div className={styles.content}>
                    {
                        content.map(line => {
                            switch(line.type){
                                case 'paragraph':
                                    return <p key={line.content}>{line.content}</p>;
                                case 'link':
                                    return <p key={line.content}><a href="/#"> {line.content} </a></p>;
                                default:
                                    console.log(`Sorry, we are out of ${line.type}`);
                            }
                        })
                    }
                </div>

                <form onSubmit={createNewComent} className={styles.comentForm}>
                    <strong>Deixe seu feedback!</strong>

                    <textarea
                        placeholder='Deixe um comentário'
                        value={newCommentEvent}
                        onChange={(e) => setNewCommentEvent(e.target.value)}
                        required
                    />

                    <footer>
                        <button
                            disabled={isInputCommentEmpty}
                            type="submit">
                            Publicar
                        </button>
                    </footer>
                </form>

                <div className={styles.comentList}>
                    {
                        comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>)
                    }
                </div>
            </article>
        </>
    )
}