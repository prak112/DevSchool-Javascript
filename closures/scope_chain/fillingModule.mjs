// example for closure scoping - Enclosed: Module

let filling = 'dark chocolate';
export const getFilling = () => filling;
export const setFilling = (customerChoice) => {
    filling = customerChoice;
}
