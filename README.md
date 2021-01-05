# Water My Plants API

## Endpoints

BASE URL: https://water-my-plants-tt-webft-48.herokuapp.com


| Method | Endpoint                         | Description                                       |
| :----- | :---------------------------     | :------------------------------------------------ |
| GET    | /api/plants                      | Returns array of saved plants                     |
| GET    | /api/plants/:id                  | Returns plants object by id                       |
| POST   | /api/plants                      | Creates plant; returns new plant object           |
| PUT    | /api/plants/:id                  | Updates plant; returns updated plant object       |
| DELETE | /api/plants/:id                  | Deletes plant; returns number of deleted users    |

| GET    | /api/users                       | Returns array of saved users                      |
| GET    | /api/users/:id                   | Returns user object by id                         |
| PUT    | /api/users/:id                   | Updates user; returns new user object             |
| DELETE | /api/users/:id                   | Deletes user; returns number of deleted users     |