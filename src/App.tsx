
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Author, Content, Post } from './components/Post';

import './global.css'
import styles from './App.module.css';

interface Post {
  id: number;
  author: Author,
  content: Content[],
  publishedAt: Date
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jvrodrigs.png",
      name: "JoÃ£o Vitor Rodrigues",
      role: "Desenvolvedor @ Freelancer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa ð'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-11-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/alexandreakao.png",
      name: "Alexandre Akao",
      role: "Desenvolvedor @ Freelancer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa ð'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-11-01 14:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/GabrielBritoP.png",
      name: "Gabriel Brito",
      role: "Desenvolvedor @ Freelancer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa ð'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {
            posts.map(post => {
              return(
                <Post 
                  key={post.id} 
                  author={post.author} 
                  content={post.content} 
                  publishedAt={post.publishedAt} 
                />
              )
            })
          }
        </main>
      </div>
    </>
  );
}

export default App;
