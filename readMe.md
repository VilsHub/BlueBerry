# Atributes and meaning

## Class values
- text-field            : Defines a text field input, applied on input of type text
- disabled              : Declares an input disabled
- singleLine            : Declares a an input wrapper a single type (a row), to be applied on input parent  element
- labeled-input.pos-x   : Defines a labeled input, having its label on the side
- labeled-input.fluid   : Defines a labeled input, having its label on the top with full width
- input-info            : Declares an input info wrapper, this element should be placed within the same input wrapper, but comes after the input element. 
- text-field.readonly   : Declares a text input field that is readonly, should be applied on the input element
- family-input          : Declares a parent for xfield element
- xfield                : Declares a child of family-input, which could hold any input wrapper
- xfield.fixed          : Declares an xfield width to be unaffected by the wrap mode of family-input
  
    **Note**
    - If wrapper is declared singleLine, then input-info will overflow without obstructing neighbouring element, as wrapper will maintained single line height.
    - If wrapper is not declared singleLine, then input-info will disrrupt neighbouring element, as wrapper will be altered, taking the available height plus the height of the input-info element.

## Data 
- data-wrapViewPort     : Defines the view port at which siblings get wrapped. its is applied .family-input element and .labeled-input