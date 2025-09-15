export function insertVars(vars, string) {
  for (const [key, value] of Object.entries(vars)) {
    string = string.replaceAll('{{' + key + '}}', value);
  }
  return string;
}