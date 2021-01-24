import { combineReducers } from "redux";
import post from "../post/post.reducer";
import count from './../count/count.reducer';
import menu from '../menu/menu.reducer';
export default combineReducers({
    post,
    count,
    menu
})