import { useEffect, useState } from 'react';

function useCardActivation({ isActive: disabled, taste }) {
  const [isCardActive, setIsCardActive] = useState(false);
  const [productBottomText, setProductBottomText] = useState('Чего сидишь? Порадуй котэ, ');
  const [productStatus, setProductStatus] = useState('');

  useEffect(() => {
    if (!disabled) {
      setProductBottomText(`Печалька, с ${taste} закончился.`);
      setProductStatus('card_disabled');
    }
  }, []);

  const addProduct = (bottomText) => {
    console.log('clicked!');
    if (!disabled) {
      return null
    } else if (!isCardActive) {
      setProductStatus('card_selected');
      setProductBottomText(bottomText);
      setIsCardActive(!isCardActive)
    } else {
      setProductStatus('');
      setProductBottomText('Чего сидишь? Порадуй котэ, ');
      setIsCardActive(!isCardActive)
    }
  };

  return [{ productStatus, productBottomText }, addProduct]
}

export default useCardActivation;