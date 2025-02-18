import { useSelector } from 'react-redux';
import './PostPage.scss';

const Post = () => {
    const post = useSelector((state) => state.post.posts);
    return (
        <>
            <section className="post-container">
                {post.map((post, idx) => {
                    return (
                        <div key={idx} className="posts">
                            <p className="posts-title">{post.title}</p>
                            <p className="posts-tags">{post.tag}</p>
                            <p className="posts-description">{post.description}</p>
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default Post;
