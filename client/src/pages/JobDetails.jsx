const viewed =
JSON.parse(
localStorage.getItem(
"recentJobs"
)
) || [];

viewed.unshift(
job
);

localStorage.setItem(
"recentJobs",
JSON.stringify(
viewed.slice(0,5)
)
);