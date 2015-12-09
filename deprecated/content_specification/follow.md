# Follow

The `follow` property of a specification describes a link that the user agent should follow on behalf of the user.

## Format Rules

- The `follow` property is OPTIONAL.
- If present, the value MUST be a number indicating the number of milliseconds the user agent must wait before following the link.

## Example

```json
{
  "title": "Preparing movie for viewing. Please wait while we finish...",
  "href": "http://www.example.com/movies/fletch/view",
  "spec": {
    "hints": [ "link" ],
    "children": [
      {
        "name": "title",
        "hints": [ "title", "text" ]
      }
    ],
    "follow": 5000
  }
}
```

## User Agent Rules

After displaying the document, the user agent MUST wait the specified number of milliseconds and then MUST follow the link.

