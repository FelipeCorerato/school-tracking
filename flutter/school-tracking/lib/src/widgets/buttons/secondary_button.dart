import 'package:flutter/material.dart';

import '../../constants/theme/colors.dart';

class SecondaryButton extends StatelessWidget {
  final Function onPress;
  final String title;
  final bool isActive;

  const SecondaryButton({Key key, @required this.onPress, @required this.title, this.isActive = true}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: isActive ? onPress : null,
      child: Container(
        alignment: Alignment.center,
        width: double.infinity,
        height: 55,
        decoration: BoxDecoration(
          border: Border.all(
            color: isActive ? ColorTheme.yellow : ColorTheme.mediumGrey,
            width: 1
          ),
          borderRadius: BorderRadius.all(Radius.circular(4)),
          color: ColorTheme.white
        ),
        child: Text(
          title,
          style: TextStyle(
            fontSize: 18,
            fontFamily: 'MontserratSemiBold',
            color: isActive ? ColorTheme.yellow : ColorTheme.mediumGrey,
          ),
          textAlign: TextAlign.center,  
        ),
      ),
    );
  }
}