import { PostCard } from '../newPosts';
import PropTypes from 'prop-types'
import './style.css'

const Posts = ({ posts }) => (
<div className="posts">
    {posts.map((post) => (
      // Uso de props e components
    <PostCard 
        key={post.id} 
        title={post.title} 
        cover={post.cover} 
        body={post.body} />
    ))}
</div>


);

Posts.propTypes = {
  posts: PropTypes.array
}

export default Posts