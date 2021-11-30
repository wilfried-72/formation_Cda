import React from "react";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import User from "../components/User";
import Post from "../components/Post";
import Navigation from "../components/Navigation";

const Articles = () => {

    // on recupere les data de notre store 
    const posts = useSelector((state) => state.postReducer.posts);
    // console.log("state posts ", posts);
    const userChoice = useSelector((state) => state.userReducer.choiceUser);
    // console.log("state choiceUser", userChoice);

    return (
        <div>
            <Navigation />
            <PostForm />
            <div className="content">
                <div className="post-container">
                    {posts.length > 0 && !userChoice.pseudo &&
                        posts.map((post, index) => (
                            <Post
                                post={post}
                                index={index}
                                key={index}
                            />
                        ))}

                    {posts.length > 0 &&
                        posts
                            .filter((postFilter) => postFilter.author === userChoice.pseudo)
                            .map((post, index) => (
                                <Post
                                    post={post}
                                    index={index}
                                    key={index}
                                />
                            ))}
                </div>
                    {/* <User /> */}
            </div>
        </div>
    );
};

export default Articles;