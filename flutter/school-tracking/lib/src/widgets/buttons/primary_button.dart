import 'package:flutter/material.dart';

import '../../constants/theme/colors.dart';

class PrimaryButton extends StatelessWidget {
  final Function onPress;
  final String title;
  final bool isActive;
  final bool isOutlined;

  const PrimaryButton({Key key, @required this.onPress, @required this.title, this.isActive = true, this.isOutlined = false}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: isActive ? onPress : null,
      child: Container(
        alignment: Alignment.center,
        width: double.infinity,
        height: 55,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(4)),
          border: isOutlined ? Border.all(
            color: ColorTheme.white,
            width: 2
          ) : null,
          color: isActive ? ColorTheme.yellow : ColorTheme.lightGrey,
        ),
        child: Text(
          title,
          style: TextStyle(
            fontSize: 18,
            fontFamily: 'MontserratMedium',
            color: isActive ? ColorTheme.white : ColorTheme.mediumGrey,
          ),
          textAlign: TextAlign.center,  
        ),
      ),
    );
  }
}