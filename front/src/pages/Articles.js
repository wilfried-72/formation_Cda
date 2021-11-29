import React from "react";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import User from "../components/User";
import Post from "../components/Post";
import Navigation from "../components/Navigation";


const Articles = () => {

    // on recupere les data de notre store au niveau du post reducer
    const posts = useSelector((state) => state.postReducer.post);
    // console.log("state posts ", posts);
    const users = useSelector((state) => state.userReducer);
    // console.log("state user ", users);

    return (
        <div>
            <Navigation />

            <PostForm />
            <div className="content">
                <div className="post-container">
                    {/* Le map s'effectue si post n'est pas vide via la fct isEmpty */}
                    {posts.length > 0 &&
                        posts.map((post, index) => (
                            <Post
                                post={post}
                                index={index}
                                key={index}
                            />
                        ))}

                    {posts.length > 0 &&
                        posts
                            // .filter((postFilter) => postFilter.author === edituser.pseudo)
                            .map((post, index) => (
                                <Post
                                    post={post}
                                    index={index}
                                    key={index}
                                />
                            ))}
                </div>
                <User />
            </div>
        </div>
    );
};

export default Articles;