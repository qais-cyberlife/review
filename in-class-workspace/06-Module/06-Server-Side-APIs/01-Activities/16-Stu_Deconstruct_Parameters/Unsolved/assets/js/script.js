fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per_page=10: This parameter specifies the number of results to be returned per page. In this case, it is set to 10.

// state=open: This parameter filters the issues to only those that are currently open.

// sort=created: This parameter specifies the sorting of the returned issues based on their creation date.

// direction=desc: This parameter specifies the sorting direction, which is set to descending in this case.
