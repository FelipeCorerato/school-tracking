import 'package:flutter/material.dart';

import '../../../constants/theme/colors.dart';

class TextInput extends TextField {
  TextInput({
    bool autoCorrect = true,
    bool autoFocus = false,
    Color borderSideColorOnFocus = ColorTheme.black,
    Color borderSideUnFocus = ColorTheme.black,
    TextEditingController controller,
    bool enabled = true,
    bool enableSuggestions = true,
    FocusNode focusNode,
    TextInputType type = TextInputType.text,
    bool obscureText = false,
    String placeholder,
    Widget suffixIcon,
    TextCapitalization textCapitalization = TextCapitalization.sentences,
    TextInputAction textInputAction = TextInputAction.done,
    Function onEditingComplete,
    Function onTextChanged,
  }) : super(
    autocorrect: autoCorrect,
    autofocus: autoFocus,
    controller: controller,
    decoration: InputDecoration(
      fillColor: ColorTheme.black,      
      labelText: placeholder,
      labelStyle: TextStyle(
        color: ColorTheme.black,
      ),
      suffixIcon: suffixIcon,
    ),
    enabled: enabled,
    enableSuggestions: enableSuggestions,
    focusNode: focusNode,
    keyboardType: type,
    obscureText: obscureText,
    style: TextStyle(
      color: ColorTheme.black,
      decoration: TextDecoration.none,
      fontFamily: 'MontserratRegular',
      fontSize: 18,
    ),
    textInputAction: textInputAction,
    textCapitalization: textCapitalization,
    onChanged: onTextChanged,
    onEditingComplete: onEditingComplete,
  );
}
