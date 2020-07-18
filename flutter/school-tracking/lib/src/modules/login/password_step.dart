import 'package:flutter/material.dart';
import 'package:keyboard_utils/keyboard_aware/keyboard_aware.dart';
import 'package:school_tracking/src/constants/routes.dart';
import 'package:school_tracking/src/constants/theme/colors.dart';
import 'package:school_tracking/src/modules/login/widgets/text_input.dart';
import 'package:school_tracking/src/widgets/buttons/secondary_button.dart';

class PasswordStep extends StatefulWidget {
  final double height;

  const PasswordStep({Key key, this.height}) : super(key: key);

  @override
  _PasswordStepState createState() => _PasswordStepState();
}

class _PasswordStepState extends State<PasswordStep> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: LayoutBuilder(
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
                            icon: Icon(Icons.chevron_left), 
                            iconSize: 40,
                            onPressed: () => Navigator.pop(context),
                          ),
                          Container(
                            padding: EdgeInsets.symmetric(horizontal: 16),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Digite a sua senha',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'MontserratMedium'
                                  ),
                                ),
                                SizedBox(height: 20),
                                TextInput(
                                  autoCorrect: false,
                                  autoFocus: true,
                                  textCapitalization: TextCapitalization.none,
                                  type: TextInputType.emailAddress,
                                  textInputAction: TextInputAction.next,
                                  suffixIcon: Icon(Icons.remove_red_eye, color: ColorTheme.darkGrey,),
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
                              title: 'ENTRAR',
                              onPress: () {},
                              isActive: false,
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
        ),
      ),
    );
  }
}