import { Component } from 'react';

import './Home.css';

import { Posts } from '../../component/Posts';
import { loadPosts } from '../../useful/loadPost';

class Home extends Component {
  state = {
    posts: [],
  };

  /* função async, usando o await para aguardar a resposta das duas fetch que foram feitas. e então tratando o dado até ser setado no state. 
    Se for ser chamado mais de um metodo no componentDidMount, então é melhor fazer em metodos separados e chama-los individualmente. Mas como no exemplo está apenas carregando uma api, então colocamos as ações no componentDidMount.
  */
  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default Home;
