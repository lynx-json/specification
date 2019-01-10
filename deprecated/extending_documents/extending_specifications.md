# Specification Property Extensions

Specification property extensions are used to help a user agent improve a user's experience with a value. They provide additional metadata for values independent of their hints or other specification properties. For example, it may describe a relationship between two values or it may describe an action that a user agent may take on behalf of a user.

## Format Rules

- The property name SHOULD be an absolute URI.
- SHOULD document the meaning of the property value.
- SHOULD document the format rules for the property value.
- SHOULD document rules or considerations for how user agents process and interpret the property value.

## Example

The following is an example of the documentation that an author could use to define an extended specification property:

> ### Expanded
>
> #### Name
> http://example.com/expanded
>
> #### Meaning
>
> Indicates whether content is collapsible and whether the content is currently expanded or collapsed.
>
> #### Format Rules
> If present, MUST have a value of `true` or `false`.
>
> #### Example
>
> ```json
> {
>   "http://example.com/expanded" : true
> }
> ```
>
> #### User Agent Rules
> - The user agent MUST provide the user with a  control to interact with the expandable value in order to expand or collapse it.
> - If the value described by the specification has a `title` the user agent MUST ensure that it is visible in collapsed and expanded states.

## Authoring Considerations

- Authors should understand that by not using a property name that is an absolute URI, they are creating a risk of collision with other specification property extensions or future revisions of this media type.
- Authors should design documents that allow a user to successfully complete a process whether or not the user agent understands a particular specification extension.
