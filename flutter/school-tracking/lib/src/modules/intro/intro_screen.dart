import 'package:flutter/material.dart';


import '../../constants/theme/colors.dart';
import '../../utils/metrics_utils.dart';
import '../../widgets/buttons/secondary_button.dart';
import '../login/email_step.dart';

class IntroScreen extends StatefulWidget {
  @override
  _IntroScreenState createState() => _IntroScreenState();
}

class _IntroScreenState extends State<IntroScreen> {
  void _onButtonPressed() {
    final modalHeight = 
      MetricUtils.fullHeight(context) - MetricUtils.statusBarHeight(context);

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => EmailStep(height: modalHeight)
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorTheme.yellow,
      body: SafeArea(
        child: Container(
          height: MediaQuery.of(context).size.height,
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Text(
                'Uma nova alternativa de transporte escolar',
                style: TextStyle(
                  color: ColorTheme.white,
                  fontFamily: 'MontserratMedium',
                  fontSize: 26
                ),
              ),
              SizedBox(height: 20),
              SecondaryButton(
                onPress: _onButtonPressed,
                title: 'ENTRAR',
              ),
            ],
          )
        ),
      ),
    );
  }
}