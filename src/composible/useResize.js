import { onMounted, onUnmounted, ref } from 'vue';
function useResize(callback) {
    onMounted(() => {
        window.addEventListener('resize', callback);
    });
    onUnmounted(() => {
        window.removeEventListener('resize', callback);
    });
}
export function useMobileBreakpoint(breakpoint) {
    const nameDevice = ref(window.innerWidth <= breakpoint);
    const handleResize = () => {
        nameDevice.value = window.innerWidth <= breakpoint;
    };
    useResize(handleResize);
    return { nameDevice };
}
