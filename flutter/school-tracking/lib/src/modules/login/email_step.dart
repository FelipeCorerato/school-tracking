import 'package:flutter/material.dart';
import 'package:keyboard_utils/widgets.dart';
import 'package:school_tracking/src/constants/routes.dart';
import 'package:school_tracking/src/utils/focus_utils.dart';

import '../../widgets/buttons/secondary_button.dart';
import 'widgets/text_input.dart';

class EmailStep extends StatefulWidget {
  final double height;

  const EmailStep({Key key, this.height}) : super(key: key);

  @override
  _EmailStepState createState() => _EmailStepState();
}

class _EmailStepState extends State<EmailStep> {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints viewportConstraints) {
        return SingleChildScrollView(
          physics: NeverScrollableScrollPhysics(),
          child: ConstrainedBox(
            constraints: BoxConstraints(maxHeight: viewportConstraints.maxHeight),
            child: Container(
              height: widget.height,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      IconButton(
                        icon: Icon(Icons.close), 
                        iconSize: 40,
                        onPressed: () => Navigator.pop(context),
                      ),
                      Container(
                        padding: EdgeInsets.symmetric(horizontal: 16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Digite seu email',
                              style: TextStyle(
                                fontSize: 18,
                                fontFamily: 'MontserratMedium'
                              ),
                            ),
                            SizedBox(height: 10),
                            Text(
                              'Ele é ou será o email usado na sua conta.',
                              style: TextStyle(
                                fontSize: 14,
                                fontFamily: 'MontserratRegular'
                              ),
                            ),
                            SizedBox(height: 20),
                            TextInput(
                              autoCorrect: false,
                              autoFocus: true,
                              textCapitalization: TextCapitalization.none,
                              type: TextInputType.emailAddress,
                              textInputAction: TextInputAction.next,
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  KeyboardAware(
                    builder: (context, keyboardConfig) {
                      return AnimatedContainer(
                        duration: Duration(milliseconds: 50),
                        curve: Curves.easeInQuart,
                        margin: EdgeInsets.only(bottom: keyboardConfig.keyboardHeight),
                        child: SecondaryButton(
                          title: 'CONTINUAR',
                          onPress: () {
                            FocusUtils.unFocus(context);
                            Navigator.pushNamed(context, RoutesConstants.passwordStep);
                          },
                          isActive: true,
                        ),
                      );
                    }
                  ),
                ],
              ),
            ),
          ),
        );
      }
    );
  }
}