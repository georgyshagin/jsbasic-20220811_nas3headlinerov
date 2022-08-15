function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  } else {        
    str = str.slice(0, maxlength - 1) + "…";
    return str;
  }
}
