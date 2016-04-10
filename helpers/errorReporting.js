function report(error){
  if(error){
    console.log("Произошла ошибка");
    console.log(error);
  }
}
exports.report = report;
