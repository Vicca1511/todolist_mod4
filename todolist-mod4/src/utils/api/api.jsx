const defaultUrl = "https://animes-api-c017.herokuapp.com/animes";

    export const api = {
        createAnime: async (anime) => {
            fetch( defaultUrl + "/create", {
                method: "POST",
                headers: new Headers ({ "Content-Type": "application/json" }),
                body: JSON.stringify(anime),

            });
        },

        getAllAnimes: async (anime) => {
            const response = await fetch( defaultUrl + "/");
            const allAnimes = await response.json();

            return allAnimes;
    }
}