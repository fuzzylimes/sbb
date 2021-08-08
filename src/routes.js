// Components
import Home from './routes/Home.svelte'
import About from './routes/About.svelte'
import NotFound from './routes/NotFound.svelte'

// Export the route definition object
export default {
    '/': Home,
    '/about': About,
    '*': NotFound
}