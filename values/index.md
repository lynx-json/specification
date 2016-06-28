# Values

A value can be any JSON value. They can be divided into two groups: simple values and container values.

## Simple Values

Simple values include strings, numbers, `true`, `false`, and `null`.

## Container Values

Container values include objects and arrays.

## Format Rules

The JSON media type specification controls the format of JSON values.

## Examples

### Strings

```json
{
  "value": "Fletch",
  "spec": {
    "hints": [ "text" ]
  }
}
```

### Numbers

```json
{
  "value": 42,
  "spec": {
    "hints": [ "text" ]
  }
}
```

### Literals

```json
{
  "value": true,
  "spec": {
    "hints": [ "text" ]
  }
}
```

### Containers

```json
{
  "value": {},
  "spec": {
    "hints": [ "container" ]
  }
}
```

```json
{
  "value": [],
  "spec": {
    "hints": [ "container" ]
  }
}
```

## User Agent Rules

If a value does not have a spec, then its value is not understood. If a value is not understood, the user agent MAY choose to not display the value.
