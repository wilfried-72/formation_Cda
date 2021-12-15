import React from "react";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import Post from "../components/Post";
import Navigation from "../components/Navigation";
import User from "../components/User";
import SelectUser from "../components/SelectUser";
import LikesTop from "../components/LikesTop"

const Articles = () => {

    // on recupere les data de notre store 
    const posts = useSelector((state) => state.postReducer.posts);
    // console.log("state posts ", posts);
    const users = useSelector((state) => state.userReducer.users);
    // console.log("state user ", users);
    const userChoice = useSelector((state) => state.userReducer.choiceUser);
    console.log("state choiceUser", userChoice);

    return (
        <div>
            <Navigation />

            {users && (
                <div className="underNav">
                    <SelectUser users={users} />

                    <LikesTop users={users} />
                </div>
            )}

            {userChoice.pseudo && (
                <div>
                    <PostForm />
                </div>
            )}

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

                {userChoice.pseudo &&
                    <User users={users} userChoice={userChoice} />
                }

            </div>
        </div>
    );
};

export default Articles;