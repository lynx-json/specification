# Validation

Validation is used to express validation constraints and the related content that should be displayed when a validation constraint is in one of the following states: invalid, unknown, or valid.

The `validation` specification property is used to express this information. The value of the property is a validation constraint set object.

A validation constraint may be included in the validation constraint set object. Lynx includes the following validation constraints: required, text, number, and content. Extended validation constraints may be included as well.

That validation constraints should not be evaluated when initially rendering a document. However, when an input value changes, the UA must evaluate the input's validation constraints to determine their new validation state. If a validation constraint cannot be reevaluated by the UA, then its new validation state must be unknown. Any validation constraints of any ancestors must also be reevaluated and the ancestors must reevaluate their descendants.

Initially and after reevaluation, the content related to the calculated validation state of a validation constraint or the derived validation state of a validation constraint set must be visible and all other content related to all other validation states must be hidden.

The rules for determining the validation state of a validation constraint set are:
  - if any constraints are invalid or if any constraints of any descendants are invalid, then the validation state is invalid;
  - else if any constraints are unknown or if any constraints of any descendants are unknown, then the validation state is unknown;
  - else if any constraints are valid or if any constraints of any descendants are valid, then the validation state is valid;
  - else the validation state is unknown.

A validation constraint set's validation state is always derived and never expressed.
A validation constraint object's validation state should be expressed.
