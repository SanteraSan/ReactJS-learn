import React from "react";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import s from "./post.module.css"
import {maxLength, required} from "../../Utils/Validators/validators";
import {TextArea} from "../../Common/FormsControls/FormsControls";


const maxLength15 = maxLength(15);

let NewPostProfileForm = React.memo(({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.some}>
                <Field component={TextArea} name="profileAddPost" placeholder="Enter you message"
                       validate={[required, maxLength15]}
                />
            </div>
            <button>Отправить</button>
        </form>)
});


NewPostProfileForm = reduxForm({form: 'profileForm'})(NewPostProfileForm);


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.greet} likeCounts={p.likeCounts}/>);
    let onAddPosts = (value) => {
        props.addPost(value.profileAddPost);
    };

    return <div className={s.myPosts}>
        <h3>My Posts</h3>
        <NewPostProfileForm onSubmit={onAddPosts}/><br/>
        {postsElements}
    </div>
};

export default MyPosts