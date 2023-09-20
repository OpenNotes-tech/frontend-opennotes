import Cookies from "js-cookie";

const maskEmail = (email) => {
  if (Cookies.get("logged_in_candidate") === "yes" && email !== undefined) {
    // Split the email address into local and domain parts
    const [localPart, domainPart] = email.split("@");

    // Mask the local part with three dots
    const maskedLocalPart =
      localPart.length <= 3
        ? localPart
        : localPart.slice(0, 1) + "......" + localPart.slice(-1);

    // Combine the masked local part and domain part to form the masked email
    const maskedEmail = maskedLocalPart + "@" + domainPart;

    return maskedEmail;
  }
};
export default maskEmail;
