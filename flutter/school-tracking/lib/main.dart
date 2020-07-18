import 'package:flutter/material.dart';
import 'package:school_tracking/src/modules/login/password_step.dart';

import 'src/constants/routes.dart';

import 'src/modules/intro/intro_screen.dart';
import 'src/modules/splash/splash_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'School tracking',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Colors.yellow.shade700,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: RoutesConstants.splash,
      routes: {
        RoutesConstants.splash: (context) => SplashScreen(),
        RoutesConstants.intro: (context) => IntroScreen(),
        RoutesConstants.passwordStep: (context) => PasswordStep(),
      },
    );
  }
}
