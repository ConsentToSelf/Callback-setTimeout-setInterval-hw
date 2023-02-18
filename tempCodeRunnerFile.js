let idInterval = setTimeout(function request() {
  let time = new Date();
  console.log(time);
  setTimeout(request, 3000);
}, 3000);
