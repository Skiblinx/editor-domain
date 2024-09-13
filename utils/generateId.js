
function GenerateIdFactory() {
    let _output = "";
    var captchaStr = "";
    let alphaNums = ["A","B","C","D","E","F","G","H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
  
    function generateTdId() {
      let emptyArr = Array.from({ length: 5 }, (e) => []);
  
      for (let i = 1; i <= 8; i++) {
        emptyArr[0].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
      }
      captchaStr = captchaStr.concat("", emptyArr[0].join(""));
      for (let i = 1; i <= 4; i++) {
        emptyArr[1].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
      }
      captchaStr = captchaStr.concat("-", emptyArr[1].join(""));
      for (let i = 1; i <= 4; i++) {
        emptyArr[2].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
      }
      captchaStr = captchaStr.concat("-", emptyArr[2].join(""));
      for (let i = 1; i <= 4; i++) {
        emptyArr[3].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
      }
      captchaStr = captchaStr.concat("-", emptyArr[3].join(""));
      for (let i = 1; i <= 12; i++) {
        emptyArr[4].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      }
  
      captchaStr = captchaStr.concat("-", emptyArr[4].join(""));
      return {
        emptyArr,
        captchaStr
      };
    }
  
    // const resl = generateTdId();
    // _output = resl.captchaStr;
  
    // return `id${_output}`;

    function getVal(){
      const resl = generateTdId();
      _output = resl.captchaStr;
    
      return `id${_output}`;
    }

    return Object.freeze({
      getVal
    })
}
const generateIdInstance = GenerateIdFactory();
export default generateIdInstance;