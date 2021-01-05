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