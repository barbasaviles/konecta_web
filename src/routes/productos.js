export default [
    {
        path: '/productos', component: () => import('@views/productos/index'),
        children:[
            {
                path:'new', component:()=> import('@views/productos/modalProducto')
            },
            {
                path:'edit/:id(\\d)', component:()=> import('@views/productos/modalProducto'), props: true
            }
        ]
    }
]