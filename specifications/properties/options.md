# Options Specification Property

## Name

`http://lynx-json.org/options`

## Meaning

The `options` property of a specification identifies another value that provides options for the current input value.

## Format Rules

The `options` property is optional. If present, its value MUST be the property name of the value that provides options for the value being described by the specification.

## Examples

```json
{
  "favoriteMovie": null,
  "listOfMovies": [
    "Fletch",
    "Caddyshack",
    "Christmas Vacation"
  ],
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "favoriteMovie",
        "visibility": "hidden",
        "hints": [ "http://example.com/movie-title", "text" ],
        "input": true,
        "options": "listOfMovies"
      },
      {
        "name": "listOfMovies",
        "hints": [ "container" ],
        "children": {
          "hints": [ "http://example.com/movie-title", "text" ]
        }
      }
    ]
  }
}
```

```json
{
  "favoriteMovie": null,
  "listOfMovies": {
    "src": "http://example.com/movies/fav/options",
    "type": "application/lynx+json"
  },
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "favoriteMovie",
        "visibility": "hidden",
        "hints": [ "http://example.com/movie-title", "text" ],
        "input": true,
        "options": "listOfMovies"
      },
      {
        "name": "listOfMovies",
        "hints": [ "content" ]
      }
    ]
  }
}
```

### Multi-Valued Text Input with Options

```json
{
  "favoriteMovies": null,
  "listOfMovies": {
    "src": "http://example.com/movies/fav/options",
    "type": "application/lynx+json"
  },
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "favoriteMovies",
        "visibility": "hidden",
        "input": true,
        "options": "listOfMovies",
        "children": {
          "hints": [ "http://example.com/movie-title", "text" ],
          "input": true
        }
      },
      {
        "name": "listOfMovies",
        "hints": [ "content" ]
      }
    ]
  }
}
```

## User Agent Rules

An "option" is defined as a value that is described by a hint matching the most specific hint describing the input value.

- When finding the value identified by the `options` property, the user agent MUST use the [process for finding values](#process-for-finding-values).
- For the value identified by the `options` property, the user agent MUST identify the options in the value (including the value itself).
- The user agent MUST provide the user with a control to select and deselect each identified option. If an option is in a container and the container contains no other options, then the container MAY be considered the control to select the option.
- For multi-valued inputs, selecting an option adds the value to the input container and deselecting an option removes the value from the input container.
