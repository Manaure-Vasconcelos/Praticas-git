import { Component } from 'react';

import './Home.css';

import Posts from '../../component/Posts';
import loadPosts from '../../useful/loadPosts';
import SearchInput from '../../component/SearchInput/index';
import handleScroll from './../../useful/scroll-infinity';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 8,
    searchValue: '',
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
  };

  checkScroll = () => {
    const { allPosts, postsPerPage, page } = this.state;

    const newPosts = handleScroll(page, postsPerPage, allPosts);

    if (newPosts.length) {
      this.setState((prevState) => ({
        posts: [...prevState.posts, ...newPosts],
        page: prevState.page + this.state.postsPerPage,
      }));
    }
  };

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, searchValue, allPosts } = this.state;

    const filteredPosts = searchValue ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase())) : posts;

    return (
      <section className='container'>
        {!!searchValue && <h1>Search: {searchValue}</h1>}

        <SearchInput
          onChange={this.handleSearch}
          value={searchValue}
          className={'searchInput'}
          type={'search'}
        />

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <h1>Desculpa, não encontramos nada.</h1>}
      </section>
    );
  }
}

export default Home;
