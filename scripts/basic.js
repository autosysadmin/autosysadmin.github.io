

    // footer year
    document.getElementById("year").textContent = new Date().getFullYear();

    // theme toggle: default dark; toggle to light
    const root = document.documentElement;
    const toggle = document.getElementById("themeToggle");

    // Persist theme
    const saved = localStorage.getItem("autrixTheme");
    if (saved === "light") root.classList.add("theme-light");

    toggle.addEventListener("click", () => {
      root.classList.toggle("theme-light");
      localStorage.setItem("autrixTheme", root.classList.contains("theme-light") ? "light" : "dark");
    });
