class Regex {
  Regex._();

  static final RegExp _emailRegex = RegExp(
    r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
  
  static bool validateEmail(String email) {
    final Iterable<Match> matches = _emailRegex.allMatches(email);
    final bool isValid = matches.isNotEmpty && email.isNotEmpty;

    return isValid;
  }

  static bool validatePassword(String password) {
    return password.length >= 6;
  }
}
