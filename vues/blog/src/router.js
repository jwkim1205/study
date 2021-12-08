import { createWebHistory, createRouter } from "vue-router";

import List from './components/List.vue'
import Main from './components/Main.vue'
import Detail from './components/Detail.vue'
import Error404 from './components/404Error.vue'
import Comment from './components/Comment.vue'
import Author from './components/Author.vue'

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Main
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  },
  {
    path: "/:anything(.*)",
    component: Error404
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 