import 'package:flutter/material.dart';

import '../utils/focus_utils.dart';

class InputPage extends StatelessWidget {
  final Widget child;

  const InputPage({Key key, this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: GestureDetector(
        behavior: HitTestBehavior.translucent,
        onTap: () => FocusUtils.unFocus(context),
        child: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints boxConstraints) {
            return SingleChildScrollView(
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  minHeight: boxConstraints.maxHeight,
                ),
                child: child
              ),
            );
          },
        ),
      ),
    );
  }
}