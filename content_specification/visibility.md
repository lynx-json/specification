# Visibility

The `visibility` property of a specification describes how a value should or should not be displayed to the user.

## Format Rules

- The `visibility` property is OPTIONAL. The default value is `visible`.
- If present, the value MUST be one of the following: `visible`, `hidden`, or `concealed`.

## Example

```json
{
  "title": "Movie Trivia: What was Fletch's First Name?",
  "answer": "Irwin",
  "spec": {
    "hints": [ "object" ],
    "children": [
      {
        "name": "title",
        "hints": [ "title", "text" ]
      },
      {
        "name": "answer",
        "hints": [ "text" ]
      }
    ],
    "visibility": "concealed"
  }
}
```

## User Agent Rules

- If `hidden`, the user agent MUST NOT display the value to the user.
- If `visible`, the user agent MUST display the value to the user.
- If `concealed`, the user agent SHOULD conceal the value. The user agent SHOULD provide a way to reveal the value.
- If the user agent does not understand the value of the `visibility` property, it MUST consider the value `visible`.

## User Agent Considerations

The user agent must anticipate that the value may be input by the user. If `visibility` is `concealed`, the user agent should conceal the user's input.
