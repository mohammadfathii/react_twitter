import React from "react";
import Layout from "./layout/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import Tag from "../pages/tag/Tag";
import User from "../pages/user/User";
import Post from "../pages/Post";
import Test from "../pages/Test";
import Page404 from "../pages/errors/404";

const App = () => {
    return <div>
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route index path={"/"} element={<Home />} />
                    <Route path={"/home"} element={<Home />} />
                    <Route path={"/tags"} element={<Tag />} />
                    <Route path={"/tags/:tagName"} element={<Tag />} />
                    <Route path={"/user/:username"} element={<User />} />
                    <Route path={"/post/:id"} element={<Post />} />
                    <Route path={"/Test"} element={<Test />} /> {/*test for react router*/}

                    <Route path={"*"} element={<Page404 /> } /> {/* 404 page not found */}
                </Routes>
            </BrowserRouter>
        </Layout>
    </div>;
}

export default App;
