export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePhoneNumber = (phone) => {
    return phone.length >= 10;
  };
  