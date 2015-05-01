# Options

The `options` property of a specification describes the location of a value that represents the options available for an input.

## Format Rules

If the `input` property is present and the value has a hint of `text`, the `options` property is OPTIONAL. Otherwise, the `options` property MUST NOT be present. If present, it MUST be an an object matching the following rules:

- MUST be a valid [URI](#uri).

## Example of Remote Options

```json
{
  "favoriteMovie": null,
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "favoriteMovie",
        "hints": [ "urn:com:example:movie-title", "text" ],
        "input": true,
        "options": "http://www.example.com/movies/fav/options"
      }
    ]
  }
}
```

## Example of Inline Options

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
        "hints": [ "urn:com:example:movie-title", "text" ],
        "input": true,
        "options": "#listOfMovies"
      },
      {
        "name": "listOfMovies",
        "hints": [ "array" ],
        "children": {
          "hints": [ "urn:com:example:movie-title", "text" ]
        }
      }
    ]
  }
}
```

## User Agent Rules

- A `media` object must be displayed for the input property instead of an input control. The content of the `media` object is the value targeted by the `options` property.
- While displaying the `media` object content, the user agent MUST consider any value an option if it has a hint matching the most specific hint of the input property.
- After resolving the options, the user agent MUST provide the user with a control to select each option. If the option has no siblings that are options, then the option's parent MAY be considered the control to select the option.
