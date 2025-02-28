const API_URL = "http://localhost:5000/api";

document.addEventListener("DOMContentLoaded", () => {
    fetchPortfolios();

    document.getElementById("portfolioForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const portfolioData = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            img: document.getElementById("img").value,
            codelink: document.getElementById("codelink").value,
            livelink: document.getElementById("livelink").value,
        };

        await fetch(`${API_URL}/portfolio`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(portfolioData),
        });

        fetchPortfolios();
    });
});

async function fetchPortfolios() {
    const res = await fetch(`${API_URL}/portfolio`);
    const portfolios = await res.json();

    const list = document.getElementById("portfolioList");
    list.innerHTML = portfolios
        .map((p) => `<div><h3>${p.title}</h3><p>${p.description}</p><button onclick="deletePortfolio('${p.id}')">Delete</button></div>`)
        .join("");
}

async function deletePortfolio(id) {
    await fetch(`${API_URL}/portfolio/${id}`, { method: "DELETE" });
    fetchPortfolios();
}
