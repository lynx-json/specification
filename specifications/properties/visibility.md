# Visibility Specification Property

## Name

`http://lynx-json.org/visibility`

## Meaning

The `visibility` property of a specification describes how a value should or should not be displayed to the user.

## Format Rules

The `visibility` property is OPTIONAL. If present, the value MUST be one of the following: `visible`, `revealed`, `concealed`, or `hidden`; otherwise, its value MUST be presumed to be `visible`.

## Example

```json
{
  "title": "Movie Trivia: What was Fletch's First Name?",
  "answer": "Irwin",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "title",
        "hints": [ "label", "text" ]
      },
      {
        "name": "answer",
        "hints": [ "text" ],
        "visibility": "concealed"
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

- If `hidden`, the user agent MUST NOT display the value to the user.
- If `visible`, the user agent MUST display the value to the user.
- If `concealed`, the user agent SHOULD conceal the value. The value's first visible child value described by a `header` hint, if any, SHOULD remain visible. The user agent SHOULD provide the user with a control change the value's visibility to `revealed`.
- If `revealed`, the user agent SHOULD display the value. The user agent SHOULD provide the user with a control change the value's visibility to `concealed`.
- If the user agent does not understand the value of the `visibility` property, it MUST consider the value to be `visible`.

## User Agent Considerations

The user agent must anticipate that the value may be input by the user. If `visibility` is `concealed`, the user agent should conceal the user's input.
