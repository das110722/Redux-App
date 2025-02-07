import { useState } from 'react';
import Input from '../Input/Input';
import './PostPage.scss';

const PostPage = () => {
    const [title, setTitle] = useState('Add a new title');
    const [desc, setDesc] = useState('Add a new description');
    const tags = ['None', ' NSFW', ' Mood', ' Quotes', 'Shitpost'];
    return (
        <section className="makepost-container ">
            <div className="makepost-navigation">
                <p className="makepost-save">Post</p>
            </div>
            <Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title" />
            <Input data={desc} inputType="textarea" setData={setDesc} label="Description" classStyle="makepost-desc" />
            <label> Tags </label>
            <div className="makepost-tags">
                {tags.map((tag) => {
                    return (
                        <>
                            <button>{tag}</button>
                        </>
                    );
                })}
            </div>
        </section>
    );
};

export default PostPage;
