import { Component } from 'react';

import './Home.css';

import { Posts } from '../../component/Posts';
import { loadPosts } from '../../useful/loadPosts';
import { handleScroll } from './../../useful/scroll-infinity.js';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 8,
  };

  /* função async, usando o await para aguardar a resposta das duas fetch que foram feitas. e então tratando o dado até ser setado no state. 
    Se for ser chamado mais de um metodo no componentDidMount, então é melhor fazer em metodos separados e chama-los individualmente. Mas como no exemplo está apenas carregando uma api, então colocamos as ações no componentDidMount.
  */
  componentDidMount() {
    this.loadPostsInPage();
    window.addEventListener('scroll', this.checkScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  }
  
  loadPostsInPage = async () => {
    const { page, postsPerPage } = this.state;
  
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  checkScroll = () => {
    const { allPosts, postsPerPage, page } = this.state;

    const newPosts = handleScroll(page, postsPerPage, allPosts);

    if (newPosts.length) {
      this.setState((prevState) => ({
        posts: [...prevState.posts, ...newPosts],
        page: prevState.page + this.state.postsPerPage,
      }));
    }
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
