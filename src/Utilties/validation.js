// rules [{rule:"",value:''}]
// vale = any
// return errorMessage
export const validateField = (rules, value) => {
  if (!Array.isArray(rules)) {
    return "";
  }

  let errorMessage = "";

  rules.some((rule) => {
    switch (rule.name) {
      case "min":
        if (value?.length < rule.value) {
          errorMessage = `Min value should be ${rule.value}`;
          return true;
        }
        break;
      case "max":
        if (value?.length > rule.value) {
          errorMessage = `Max value should be ${rule.value}`;
          return true;
        }
        break;
      case "regex":
        const regex = new RegExp(rule.value);
        if (!regex.test(value)) {
          errorMessage = `Invalid input`;
          return true;
        }
        break;

      case "isEmail":
        const emailRegex = new RegExp(rule.value);
        if (!emailRegex.test(value)) {
          errorMessage = `This is not an email`;
          return true;
        }
        break;
      case "between":
        const [minValue, maxValue] = rule.value;
        if (value?.length < minValue || value?.length > maxValue) {
          errorMessage = `Filed Value should be between ${minValue} and ${maxValue}`;
          return true;
        }
        break;
      case "required":
        if (rule.value && !value) {
          errorMessage = "This field is required";
          return true;
        }
        break;
      default:
        return false;
    }

    // default value
    return false;
  });
  return errorMessage;
};
