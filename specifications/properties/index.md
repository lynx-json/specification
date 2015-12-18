# Specification Properties

A specification property is used to provide metadata for a JSON value. A specification property name is a URI. If a specification property name is unqualified (relative URI), it MUST be assumed to be in the `http://lynx-json.org/` namespace. For example, a specification property of `visibility` MUST be considered to be `http://lynx-json.org/visibility`.

## Extensions

This media type may be extended to include new specification properties. The name of an extended specification property MUST be a qualified name (absolute URI).

This media type may also be extended to include new hints. The name of an extended hint MUST be a qualified name (absolute URI).
