
    
const sunIcon =  (typeof window !== undefined) && document.querySelector(".sun");
const moonIcon =  (typeof window !== undefined) && document.querySelector(".moon"); 

const userTheme = localStorage.getItem("theme");

const IconToggle = () => {
    moonIcon && moonIcon?.classList.toggle("hidden");
    sunIcon && sunIcon?.classList.toggle("hidden");
};

export const themeCheck = () => {
    if (userTheme === "dark") {
         (typeof window !== undefined) && document.documentElement.classList.add("dark");
        moonIcon && moonIcon?.classList.add("hidden");
        return;
    }
    sunIcon && sunIcon?.classList.add("hidden");
};

export const themeSwitch = () => {
    if ( (typeof window !== undefined) && document.documentElement.classList.contains("dark")) {
         (typeof window !== undefined) && document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        IconToggle();
        return;
    }
     (typeof window !== undefined) && document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    IconToggle()
}
