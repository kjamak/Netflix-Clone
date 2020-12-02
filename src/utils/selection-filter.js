export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series?.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series?.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series?.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series?.filter((item) => item.genre === "crime"),
      },
      {
        title: "Adventure",
        data: series?.filter((item) => item.genre === "adventure"),
      },
    ],
    films: [
      {
        title: "Action",
        data: films?.filter((item) => item.genre === "action"),
      },
      {
        title: "Thriller",
        data: films?.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Adventure",
        data: films?.filter((item) => item.genre === "adventure"),
      },
      {
        title: "Horror",
        data: films?.filter((item) => item.genre === "horror"),
      },
      {
        title: "Romance",
        data: films?.filter((item) => item.genre === "romance"),
      },
      {
        title: "Drama",
        data: films?.filter((item) => item.genre === "drama"),
      },
    ],
  };
}
