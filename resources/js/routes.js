const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const CardList = () => import('./components/Card/List.vue' /* webpackChunkName: "resource/js/components/Card/list" */)
const CardCreate = () => import('./components/Card/Add.vue' /* webpackChunkName: "resource/js/components/Card/add" */)
const CardEdit = () => import('./components/Card/Edit.vue' /* webpackChunkName: "resource/js/components/Card/edit" */)
const CardShow = () => import('./components/Card/Show.vue' /* webpackChunkName: "resource/js/components/Card/show" */)

export const routes = [
    {
        name: 'home',
        path: '/home',
        component: Welcome
    },
    {
        name: 'cardList',
        path: '/',
        component: CardList
    },
    {
        name: 'cardShow',
        path: '/cards/:card_number',
        component: CardShow
    },
    {
        name: 'cardAdd',
        path: '/cards/add',
        component: CardCreate
    }
]
