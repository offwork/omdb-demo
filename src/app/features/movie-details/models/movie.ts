/* 
{
  "adult": false,
  "backdrop_path": "/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg",
  "belongs_to_collection": null,
  "budget": 159000000,
  "genres": [
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 18,
      "name": "Drama"
    }
  ],
  "homepage": "https://www.theirishman-movie.com",
  "id": 398978,
  "imdb_id": "tt1302006",
  "original_language": "en",
  "original_title": "The Irishman",
  "overview": "Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.",
  "popularity": 240.363,
  "poster_path": "/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
  "production_companies": [
    {
      "id": 11391,
      "logo_path": null,
      "name": "Tribeca Productions",
      "origin_country": "US"
    },
    {
      "id": 23243,
      "logo_path": null,
      "name": "Sikelia Productions",
      "origin_country": "US"
    },
    {
      "id": 8880,
      "logo_path": "/fE7LBw7Jz8R29EABFGCvWNriZxN.png",
      "name": "Winkler Films",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2019-11-01",
  "revenue": 607420,
  "runtime": 209,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "iso_639_1": "it",
      "name": "Italiano"
    },
    {
      "iso_639_1": "la",
      "name": "Latin"
    },
    {
      "iso_639_1": "es",
      "name": "Español"
    }
  ],
  "status": "Released",
  "tagline": "His story changed history",
  "title": "The Irishman",
  "video": false,
  "vote_average": 8,q
  "vote_count": 1106
}
 */

export interface Movie {
  poster_path: string;
  title: string;
  overview: string;
  id: string;
  imdb_id: string;
  release_date: string;
}