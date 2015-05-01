# Content

The content of all documents defined by this media type are extensions of [JSON](#json) and MUST comply with the rules of that media type. All usages of the JSON keywords "string", "number", "object", "array", "true", "false", "null", and "value" refer to the concepts in the JSON specification unless otherwise stated. The word "property" is used to refer to the concept of "pair", "name/value pair", or "member" in the JSON specification. The word "integer" is used to refer to a JSON "number" with no fractional part. The phrase "simple value" is used to refer to strings, numbers, `true`, `false`, or `null`.

## User Agent Rules

If the user agent encounters a relative URI it MUST resolve an absolute URI using the process defined in [Section 5 "Reference Resolution" in RFC 3986](#rfc-3986).
