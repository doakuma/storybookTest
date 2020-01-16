import React from 'react';
import Button from '../src/components/Button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
      componentSubtitle: '버튼 컴포넌트'
  }
};

// export const Test = () => <Button name="Test">Hello Button</Button>;
export const button = () => {
    const name = text('name', 'Test Button');
    const big = boolean('big', false)

    return(
        <Button
            name={name}
            big={big}
        />
    )
}
button.story = {
    name: 'Test'
}

