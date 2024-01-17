/* import React, {useState} from 'react';
import {getColors} from 'react-native-image-colors';

interface Props {
  url: string;
}

export const useImageColors = ({url}: Props) => {
  const [colors, setColors] = useState(null);

  React.useEffect(() => {
    getColors(url, {
      fallback: 'grey',
      cache: true,
      key: url,
    }).then(setColors);
  }, []);

  return colors;
};
 */
