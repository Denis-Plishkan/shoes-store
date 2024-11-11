export function useToggle(nameVariable) {
    return () => {
        nameVariable.value = !nameVariable.value;
    };
}
