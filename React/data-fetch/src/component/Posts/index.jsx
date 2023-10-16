import { PostCard } from '../newPosts';

export const Posts = ({ posts }) => (
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
