const repeatString = function(string, times) {
if(times < 0)
  return '';
 if(times === 1)
   return string;
  else
    return string + repeatstring(string, times -1)
};

// Do not edit below this line
module.exports = repeatString;
