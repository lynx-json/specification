# Data

A `data` hint describes a value that represents data. The data could be downloaded from a remote location or provided by a user as input.

## Format Rules

### Non-Input

- MUST comply with the rules defined for [all objects](#objects).
- MUST have an `href` property whose value is a valid [URI](#uri).
- MAY have a `type` property to indicate the most common media type representation of the target resource. If present, its value must be a string that represents a valid [media type name](#media-type-name).

### Input

MUST be `null` or undefined.

## Examples

### Non-Input

```json
{
  "title": "Fletch (1985)",
  "href": "http://www.example.com/m/fletch",
  "type": "video/mp4",
  "spec": {
    "hints": [ "data" ]
  }
}
```

### Input

```json
{
  "title": "Upload Your Movie",
  "movieToUpload": null,
  "spec": {
    "hints": [ "form" ],
    "children": [
    {
      "name": "movieToUpload",
      "hints": [ "data" ],
      "input": true
    }
  ]
  }
}
```

## User Agent Rules

### Non-Input

- The user agent MUST provide the user with a control to download the data.
- If the user chooses to download the data, then the user agent MUST download the target identified by the `href` using the default retrieval action for the protocol (e.g. GET for HTTP).
- The user agent SHOULD display or make the `href` accessible to the user so he/she can consider its value prior to downloading the data.

### Input

The user agent MUST provide the user with a control to upload the data.

## User Agent Considerations

- The user agent must anticipate that a data object may contain additional properties (objects, arrays, links, etc.).
- The user agent must anticipate that a data object may contain no visible content.
