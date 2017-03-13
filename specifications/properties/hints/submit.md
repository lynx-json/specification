# Submit Hint

## Name

`http://lynx-json.org/submit`

## Meaning

A `submit` hint describes a value that defines where and how to submit form data.

## Related Hints

None

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST be an object.
- MUST have an `action` property whose value is a valid [URI](/#uri).
- MAY have a `method` property indicating the protocol method used to submit the form data.
- MAY have an `enctype` property indicating how the form data is to be encoded. If not present, the default value is `application/x-www-form-urlencoded`.
- MAY have a `scope` property whose value specifies the content realm intended for display. If present, the value MUST comply with the rules defined for [realm URI](/realm/).
- MAY have a `rel` property whose value specifies the relationship between the document containing the submit and the destination resource, as described in [RFC 5988](/references/#rfc-5988).
- MAY contain other properties.

## Examples

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
            "hints": [ "label", "text" ]
        }
    ]
  }
}
```

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

- The user agent MUST provide the user with a control to perform the submission.
- If the `method` property is not present, then the user agent MUST submit the form data using the default retrieval action for the protocol (e.g. GET for HTTP).
- When a `submit` control is invoked, the user agent MUST prepare a form data set, encode the form data set into a representation, and submit the representation, as defined in the [Process for Submitting Form Data](/processes/submitting_form_data.md) section.

## User Agent Considerations

- The user agent must anticipate that a value described by a `submit` hint may not contain visible content.
- The user agent must anticipate that a value described by a `submit` hint may contain other properties that are also described by a specification.
