export default defineNuxtRouteMiddleware((to, from) => {
    let isMaintenance = false;
    if (isMaintenance) {
        if (to.path.startsWith('/') && to.path !== '/maintenance') {
            return navigateTo('/maintenance');
        }
    }
})