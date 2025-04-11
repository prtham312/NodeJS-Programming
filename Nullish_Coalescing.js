//Returns the right-hand operand only if the left-hand side is null or undefined.
function getUserMessage(user) {
    if (!user.isLoggedIn) {
      return "Please log in to view notifications";
    }
  
    const prefersEmail = user.preferences?.notifyByEmail;
    const prefersSMS = user.preferences?.notifyBySMS;
  
    const email = user.email ?? null;
    const phone = user.phone ?? null;
  
    if (prefersEmail && email) {
      return `Notification sent to ${email}`;
    }
  
    if (prefersSMS && phone) {
      return `Notification sent to ${phone}`;
    }
  
    return "No valid contact info available";
  }

  
  console.log(getUserMessage({
    name: "John",
    isLoggedIn: false
  }));
  // User has to login to view notification
  
  console.log(getUserMessage({
    name: "Amy",
    isLoggedIn: true,
    email: "amy@example.com",
    phone: null,
    preferences: {
      notifyByEmail: true,
      notifyBySMS: false
    }
  }));
  // Notification sent to user email id
  
  console.log(getUserMessage({
    name: "Bob",
    isLoggedIn: true,
    email: null,
    phone: "1234567890",
    preferences: {
      notifyByEmail: false,
      notifyBySMS: true
    }
  }));
  // Notification sent to user phone number
  
  console.log(getUserMessage({
    name: "Eve",
    isLoggedIn: true,
    email: null,
    phone: null,
    preferences: {
      notifyByEmail: true,
      notifyBySMS: true
    }
  }));
  // No proper contact info available
  