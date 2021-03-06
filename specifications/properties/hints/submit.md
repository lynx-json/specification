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
- MUST have an `action` property whose value is a valid [URI](../../../#uri).
- MAY have a `method` property indicating the protocol method used to submit the form data.
- MAY have an `enctype` property indicating how the form data is to be encoded. If not present, the default value is `application/x-www-form-urlencoded`.
- MAY have a `type` property whose value must be a valid 
  [media type name](../../../references/#rfc-6838) to indicate the expected 
  media type of the content.
- MAY have a `rel` property whose value specifies the relationship between the document containing the submit and the destination resource, as described in [RFC 5988](../../../references/index.md#rfc-5988).
- MAY have a `send` property whose value MUST be one of the following:
  - `change` indicating that the user agent should invoke the submit on behalf of the user when the user changes an input value, or
  - `ready` indicating that the user agent should invoke the submit on behalf of the user when the submit is ready.
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
- When a `submit` control is invoked, the user agent MUST prepare a form data set, encode the form data set into a representation, and submit the representation, as defined in the [Process for Submitting Form Data](../../../processes/submitting_form_data.md) section.
- If the `submit` control contains a `send` property with a value of `change`, the user agent MUST submit the related form data when the value of an input changes if the validation state of the form is not invalid.
- If the `submit` control contains a `send` property with a value of `ready`, the user agent MUST submit the related form data when the `submit` control is ready.

## User Agent Considerations

- The user agent must anticipate that a value described by a `submit` hint may not contain visible content.
- The user agent must anticipate that a value described by a `submit` hint may contain other properties that are also described by a specification.
