import 'package:flutter/material.dart';

class FocusUtils {
  static Future<void> unFocus(BuildContext context) async => 
    FocusScope.of(context).unfocus();

  static Future<void> previousFocus(BuildContext context) async =>
    FocusScope.of(context).previousFocus();

  static Future<void> nextFocus(BuildContext context) async => 
    FocusScope.of(context).nextFocus();

  static Future<void> autoFocus(BuildContext context, FocusNode node) async =>
    FocusScope.of(context).autofocus(node);

  static Future<void> focus(BuildContext context, FocusScopeNode scope) async => 
    FocusScope.of(context).setFirstFocus(scope);
}