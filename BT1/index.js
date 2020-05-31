console.time("Time this");

for (var i = 0; i < 10000; i++) {
  // Your stuff here
  console.log(i);
}

console.timeEnd("Time this");
/*
    request has been deprecated, see https://github.com/request/request/issues/3142
    time() và timeEnd(): Để đo thời gian của các lệnh 
*/