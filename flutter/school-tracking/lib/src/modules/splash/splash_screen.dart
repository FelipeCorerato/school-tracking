import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../constants/theme/colors.dart';
import '../../constants/routes.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    checkUserStatus();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorTheme.yellow,
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        child: Center(
          child: CupertinoActivityIndicator(radius: 10)
        ),
      ),
    );
  }

  Future<void> checkUserStatus() async {
    await Future.delayed(Duration(seconds: 2));
    Navigator.pushReplacementNamed(context, RoutesConstants.intro);
  }
}