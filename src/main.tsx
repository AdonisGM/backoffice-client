import {createRoot} from 'react-dom/client'
import {HeroUIProvider} from "@heroui/react"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { routeTree } from '@/routeTree.gen.ts'
import {createRouter, RouterProvider} from "@tanstack/react-router";
import '@/index.css'
import '@/languages/i18n.ts'
import { Provider } from "react-redux";

const queryClient = new QueryClient()
import { store } from '@/redux/store.ts'
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <HeroUIProvider>
                <RouterProvider router={router} />
            </HeroUIProvider>
        </QueryClientProvider>
    </Provider>,
)
