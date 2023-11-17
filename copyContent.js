let text = document.getElementById('myText').innerHTML;

  const copyText1 = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  
let text1 = document.getElementById('myText1').innerHTML;

  const copyText2 = async () => {
    try {
      await navigator.clipboard.writeText(text1);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  let text2 = document.getElementById('myText2').innerHTML;

  const copyText3 = async () => {
    try {
      await navigator.clipboard.writeText(text2);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
