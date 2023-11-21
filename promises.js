function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        // Check if the response status is ok (status code 200-299)
        if (response.ok) {
          // Parse the JSON response and resolve the promise with the data
          return response.json();
        } else {
          // If the response status is not ok, reject the promise with an error message
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
      })
      .then(data => {
        // Resolve the promise with the parsed data
        resolve(data);
      })
      .catch(error => {
        // Reject the promise with the error
        reject(error);
      });
  });
}

// Example usage:
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Call the fetchData function to consume the service
fetchData(apiUrl)
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
