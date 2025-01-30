const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  console.log(JSON.stringify(sender.data, null, 3));

  fetch("/postSurvey", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sender.data), // Send the survey data as JSON
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to save survey");
    })
    .then((data) => {
      console.log("Server response:", data);
      if (data.redirect) {
        window.location.href = data.redirect; // Redirect to the specified URL
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to save survey. Please try again.");
    });
});

survey.render(document.getElementById("surveyElement"));