// Regular expression to validate passwords
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/;

// Function to validate an array of passwords
function validatePasswords(passwords) {
    return passwords.filter(password => passwordRegex.test(password));
}

// Example usage
const passwords = [
    "Password1@", // Valid
    "password@",   // Invalid (no uppercase and digit)
    "PASSWORD1@",  // Invalid (no lowercase)
    "Pass123@",    // Invalid (too short)
    "Passw0rd!!!"  // Invalid (special characters not allowed)
];

console.log(validatePasswords(passwords));
// Output: ["Password1@"]



// Regular expression to extract date, username, and IP address
const logRegex = /(\d{4}-\d{2}-\d{2}) \d{2}:\d{2}:\d{2} - Error: User (\w+) failed to login from IP (\d+\.\d+\.\d+\.\d+)/;

// Function to modify log file and redact IP addresses
function redactIPAddresses(log) {
    return log.replace(/(\d+\.\d+\.\d+\.\d+)/g, '[REDACTED]');
}

// Example log entry
const logEntry = "2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1";

// Extracting data using regex
const match = logRegex.exec(logEntry);
if (match) {
    const date = match[1]; // Extracted date
    const username = match[2]; // Extracted username
    const ipAddress = match[3]; // Extracted IP address
    console.log(`Date: ${date}, Username: ${username}, IP Address: ${ipAddress}`);
}





// Redact IP addresses in the log
const modifiedLog = redactIPAddresses(logEntry);
console.log(modifiedLog);
// Output: "2024-08-28 14:32:01 - Error: User john_doe failed to login from IP [REDACTED]"


// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed."); // Throw error if divisor is zero
    }
    return a / b; // Return the result of division
}

// Example usage with try-catch
try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(10, 0)); // This will throw an error
} catch (error) {
    console.error(error.message); // Output: "Division by zero is not allowed."
}









// Function to parse JSON string
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString); // Attempt to parse JSON
    } catch (error) {
        console.error("Invalid JSON format:", error.message); // Log error message
        return {}; // Return default empty object on error
    }
}

// Example usage
const validJSON = '{"name": "Alice", "age": 30}';
const invalidJSON = '{"name": "Alice", "age": 30'; // Missing closing bracket

console.log(parseJSON(validJSON)); // Output: { name: 'Alice', age: 30 }
console.log(parseJSON(invalidJSON)); // Output: {} and logs an error message
