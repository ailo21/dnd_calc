import React, { FC } from 'react';
import { ReactComponent as PlaceholderSvg } from '../../../asset/icon/icon_image.svg';

interface PlaceholderProps {
  active : boolean
}

const Placeholder : FC<PlaceholderProps> = ({ active }) => {
  const wrapClass = ['placeholder'];
  if (active) wrapClass.push('placeholder_active');
  return (
    <div className={ wrapClass.join(' ') }>
      <PlaceholderSvg />
      <div className="placeholder_text">
        <div><span className="font_blue">Drag and drop</span></div>
        <div><span className="font_small">Drag and drop</span></div>
      </div>
    </div>
  );
};

export default Placeholder;
