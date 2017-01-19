# Group Hint

## Name

`http://lynx-json.org/group`

## Meaning

A `group` hint describes a value that is a container of other values that should be interpreted as an idea. Values in a group are closely related to each other in some way.

## Related Hints

- `[ "group", "container" ]`
- `[ "group", "link" ]`
- `[ "group", "submit" ]`
- `[ "group", "form" ]`

## Synonyms

None

## Format Rules

None

## Example

```json
{
  "spec": {
    "hints": [ "group", "container" ],
    "children": {
      "hints": [ "text" ]
    }
  },
  "value": [
    "The",
    "quick",
    "brown",
    "fox…"
  ]
}

```

## Authoring Rules

None

## Authoring Considerations

Use a `group` hint when the emphasis is more on the group than on the values in the group.

## User Agent Rules

None

## User Agent Considerations

In order to emphasize the group more than the values in the group, a user agent should render the group in a way that accomplishes that goal. For example, a user agent may choose to render the values in a group in the primary direction of reading order, such as left-to-right in English (as opposed to the secondary direction of reading order top-to-bottom).
