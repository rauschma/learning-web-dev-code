setInterval(
  () => {
    const d = new Date();
    console.log(
      d.toISOString().slice(11, 19)
    );
  },
  // Call function once every second
  1000 // milliseconds
);
