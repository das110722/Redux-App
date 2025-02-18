import { useState } from 'react';
import Input from '../Input/Input';
import './PostPage.scss';

const PostPage = () => {
    const [title, setTitle] = useState('Add a new title');
    const [desc, setDesc] = useState('Add a new description');
    const [selectedIdx, setSelectedIdx] = useState(0);
    const tags = ['None', 'NSFW', 'Mood', 'Quotes', 'Shitpost'];

    const handlePost = () => {
        // Post the data to the server
    };
    return (
        <section className="makepost-container ">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div>
            <Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title" />
            <Input data={desc} inputType="textarea" setData={setDesc} label="Description" classStyle="makepost-desc" />
            <label> Tags </label>
            <div className="makepost-tags">
                {tags.map((tag, idx) => {
                    return (
                        <>
                            <button
                                key={idx}
                                className={`${selectedIdx === idx ? `makepost-tags-selected` : `makepost-tags-${tag}`}`}
                                onClick={() => setSelectedIdx(idx)}>
                                {tag}
                            </button>
                        </>
                    );
                })}
            </div>
        </section>
    );
};

export default PostPage;
