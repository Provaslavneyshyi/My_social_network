import React from 'react';
import './index.css';
import {rerenderEntireTree} from "./render";
import State from "./Redux/State";
import state from "./Redux/State";

rerenderEntireTree(state);

