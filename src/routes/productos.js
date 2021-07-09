export default [
    {
        path: '/productos', component: () => import('@views/productos/index'),
        children:[
            {
                path:'new', component:()=> import('@views/productos/modalProducto')
            }
        ]
    }
]