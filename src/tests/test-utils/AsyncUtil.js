
export const asyncAssert = (done, codeBlock,timeout=0) => {
  setTimeout(function(){
    try {
      codeBlock();
      done()
    } catch(error) {
      done.fail(error)
    }
  },timeout)
};

export default asyncAssert;
