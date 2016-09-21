# Realm URI

A realm is a field or domain of activity or interest that may be used to organize information (see Section 6.5.4 "Design of Media Types" in [Fielding Dissertation](/references/#fielding-dissertation)).

A realm URI is used to identify and refer to a realm. By disclosing a realm, the server provides additional information to user agents, or other components, that they may use to apply special treatment to the content within the realm.

## Format Rules

MUST be an absolute URI.

## Normalization and Comparison

Given realm URI A and realm URI B, if A starts with B (using a simple string comparison after URI normalization as defined in Section 6 "Normalization and Comparison" in [RFC 3986](/references/#rfc-3986)) then the realm identified by A is considered to be within the realm identified by B.
