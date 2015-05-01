# Submit

A `submit` hint describes a value that defines where and how to submit form data.

## Format Rules

- MUST comply with the rules defined for [all objects](#objects).
- MUST have an `action` property whose value must be a valid [URI](./readme.md#uri).
- MAY have a `method` property indicating the protocol method used to submit the form data.
- MAY have an `enctype` property. If not present, the default value is `application/x-www-form-urlencoded`.

## Example

```json
{
  "title": "Submit Review",
  "action": "http://www.example.com/m/fletch/reviews",
  "method": "POST",
  "spec": {
    "hints": [ "submit" ],
    "children": [
        {
            "name": "title",
            "hints": [ "title", "text" ]
        }
    ]
  }
}
```

## User Agent Rules

- MUST comply with the rules defined for [all objects](#objects).
- The user agent MUST provide the user with a control to perform the submission.
- If the `method` property is not present, then the user agent MUST submit the form using the default retrieval action for the protocol (e.g. GET for HTTP).
- When a `submit` control is invoked, the user agent MUST prepare a form data set, encode the form data set into a representation, and submit the representation, as defined in [Submitting Form Data](#submitting-form-data).

## User Agent Considerations

- The user agent must anticipate that a `submit` object may contain no visible content.

