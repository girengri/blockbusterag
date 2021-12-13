const API = "https://api.themoviedb.org/3/";

export function obtener(path) {
    return fetch(API + path + "?language=es", {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTUwMzQ5ZjQ3NGIyODg3NWQ1YTY0MjNlN2I5YWRkMyIsInN1YiI6IjYxYTgyM2FhNGE1MmY4MDA2NDMyNGY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UzqR7NxIOCsIkE4Y6p8BWNZ_IN_kXKxc7F7zMIy-2eM",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}
